'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { MapPin, Phone, Mail, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });

        // 3秒后隐藏成功提示
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setIsSubmitting(false);
        alert(data.error || '提交失败，请稍后重试');
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error('提交失败:', error);
      alert('网络错误，请稍后重试');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-[#F5F0E6] via-white to-[#FFF8E7] py-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#9D2933]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <Send className="w-4 h-4 text-[#D4AF37] mr-2" />
                <span className="text-sm text-gray-700 font-medium">随时为您服务</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                联系我们
              </h1>
              <p className="text-lg text-gray-600">
                期待与您的合作，随时为您提供专业的服务
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">联系方式</h2>

                  <div className="space-y-6">
                    <div className="group flex items-start p-4 bg-white rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9D2933] to-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">公司地址</h4>
                        <p className="text-gray-600">
                          湖南省岳阳市洞庭湖小镇×号楼
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start p-4 bg-white rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F5C745] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">联系电话</h4>
                        <p className="text-gray-600">
                          （待定）
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start p-4 bg-white rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9D2933] to-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">电子邮箱</h4>
                        <p className="text-gray-600">
                          （待定）
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-gradient-to-br from-[#F5F0E6]/50 to-white rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      办公时间
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>周一至周五：8:30 - 17:30</p>
                      <p>周六、周日：休息</p>
                      <p className="text-xs text-gray-500 mt-4">
                        * 节假日请提前预约
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">在线留言</h2>

                  {showSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-700 text-sm">留言已提交，我们将尽快与您联系！</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D2933] focus:border-[#D4AF37] focus:border-transparent outline-none transition-all hover:border-[#D4AF37]/50"
                        placeholder="请输入您的姓名"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D2933] focus:border-[#D4AF37] focus:border-transparent outline-none transition-all hover:border-[#D4AF37]/50"
                        placeholder="请输入您的邮箱"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        联系电话 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D2933] focus:border-[#D4AF37] focus:border-transparent outline-none transition-all hover:border-[#D4AF37]/50"
                        placeholder="请输入您的联系电话"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        公司名称
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D2933] focus:border-[#D4AF37] focus:border-transparent outline-none transition-all hover:border-[#D4AF37]/50"
                        placeholder="请输入您的公司名称（可选）"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        留言内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9D2933] focus:border-[#D4AF37] focus:border-transparent outline-none transition-all resize-none hover:border-[#D4AF37]/50"
                        placeholder="请输入您的留言内容"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#9D2933] to-[#b83c47] text-white rounded-lg font-medium hover:from-[#b83c47] hover:to-[#9D2933] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.02] transform duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          提交中...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          提交留言
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  位置地图
                </h2>
                <p className="text-gray-600">
                  湖南省岳阳市洞庭湖小镇
                </p>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                {/* Amap (高德地图) */}
                <div className="relative w-full h-[500px]">
                  <iframe
                    title="伍伍捌新材料科技有限公司位置"
                    src="https://ditu.amap.com/search?query=岳阳洞庭湖小镇"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    className="border-0"
                    allowFullScreen
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="p-6 bg-gradient-to-r from-[#F5F0E6]/50 to-white border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                      href="https://uri.amap.com/navigation?to=113.09,29.37,岳阳洞庭湖小镇&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#9D2933] to-[#D4AF37] text-white rounded-lg font-medium hover:from-[#b83c47] hover:to-[#D4AF37] transition-all flex items-center justify-center hover:shadow-lg hover:scale-[1.02] transform duration-300"
                    >
                      <Navigation className="w-5 h-5 mr-2" />
                      高德地图导航
                    </a>
                    
                    <a
                      href="https://ditu.amap.com/search?query=岳阳洞庭湖小镇"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-[#D4AF37] text-[#9D2933] rounded-lg font-medium hover:bg-[#D4AF37]/10 transition-all flex items-center justify-center hover:shadow-lg hover:scale-[1.02] transform duration-300"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      查看详细地图
                    </a>
                  </div>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    点击导航按钮可直接前往，或使用手机地图APP搜索"岳阳洞庭湖小镇"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
