import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// 接收邮箱地址（Resend 测试模式限制，只能发送到注册账号邮箱）
const TO_EMAIL = 'rz13910730449@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // 验证必填字段
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: '请填写所有必填字段' },
        { status: 400 }
      );
    }

    // 验证 API Key 是否配置
    if (!process.env.RESEND_API_KEY) {
      console.log('未配置 RESEND_API_KEY，模拟发送邮件成功');
      console.log('模拟邮件内容:', { name, email, phone, company, message });
      
      // 开发环境下，如果没有配置 API Key，返回成功（方便测试前端功能）
      // 在生产环境中，应该配置真实的 API Key
      return NextResponse.json(
        { 
          success: true, 
          message: '留言已提交成功（开发模式）',
          warning: '邮件服务未配置，邮件未真正发送'
        },
        { status: 200 }
      );
    }

    // 初始化 Resend 客户端
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 构建邮件内容
    const emailContent = `
      <h2 style="color: #9D2933; margin-bottom: 20px;">📧 新的在线留言</h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold; color: #333;">姓名：</td>
            <td style="padding: 10px; color: #666;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold; color: #333;">邮箱：</td>
            <td style="padding: 10px; color: #666;">${email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold; color: #333;">联系电话：</td>
            <td style="padding: 10px; color: #666;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 10px; font-weight: bold; color: #333;">公司名称：</td>
            <td style="padding: 10px; color: #666;">${company || '未填写'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #333; vertical-align: top;">留言内容：</td>
            <td style="padding: 10px; color: #666;">${message}</td>
          </tr>
        </table>
      </div>

      <p style="margin-top: 20px; color: #999; font-size: 12px;">
        此邮件来自伍伍捌新材料科技有限公司官网
      </p>
    `;

    // 发送邮件
    const { data, error } = await resend.emails.send({
      from: '伍伍捌新材料官网 <onboarding@resend.dev>', // 使用 Resend 的默认发件人（免费版）
      to: TO_EMAIL,
      subject: `【新留言】${name} - 来自官网`,
      html: emailContent,
    });

    if (error) {
      console.error('邮件发送失败:', error);
      return NextResponse.json(
        { error: '邮件发送失败，请稍后重试' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: '留言已提交成功',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('处理请求时出错:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    );
  }
}
