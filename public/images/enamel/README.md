# 珐琅产品图片替换说明

## 当前状态
由于下载链接签名验证失败，当前使用的是渐变色块占位符来展示珐琅产品图片。

## 图片文件列表
需要将以下8张珐琅产品图片放置到 `public/images/enamel/` 目录：

1. `enamel-1.jpg` - 珐琅1
2. `enamel-2.png` - 珐琅2
3. `enamel-3.png` - 珐琅3
4. `enamel-4.png` - 珐琅4
5. `enamel-5.jpg` - 珐琅5
6. `enamel-7.png` - 珐琅7
7. `enamel-11.jpg` - 珐琅11
8. `enamel-12.png` - 珐琅12

## 替换步骤

1. **准备图片文件**
   - 将提供的8张珐琅产品图片文件名按照上述列表命名
   - 确保图片格式与文件扩展名匹配（.jpg 或 .png）

2. **替换图片**
   - 将图片文件复制到 `public/images/enamel/` 目录
   - 覆盖现有的占位符文件

3. **更新代码（可选）**
   如果需要使用实际图片而不是占位符，可以修改 `src/app/products/page.tsx` 文件中的产品图片展示部分：

   ```tsx
   // 找到产品图片展示区域（大约在第135-160行）
   // 将渐变色块替换为实际的 <img> 标签

   <div className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
     <img
       src="/images/enamel/enamel-1.jpg"
       alt="珐琅产品1"
       className="w-full h-full object-cover"
     />
     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
     {/* ... 其他内容 */}
   </div>
   ```

4. **验证效果**
   - 运行开发服务器查看效果
   - 或部署到生产环境查看最终效果

## 当前展示效果

目前使用的是基于品牌色的渐变色块：
- 故宫红 (#9D2933)
- 珐琅金 (#D4AF37)
- 皇宫黄 (#F5C745)

每个色块都包含：
- 烧瓶图标（代表化学原料）
- 产品名称标签
- 悬停效果（缩放、阴影）
- 点击提示

## 建议的图片规格

- **尺寸**：建议正方形或接近正方形的图片
- **分辨率**：建议 800x800 或更高
- **格式**：JPG 或 PNG
- **文件大小**：建议每张图片不超过 500KB，确保加载速度快
- **背景**：建议使用白色或透明背景

## 注意事项

- 确保图片质量清晰，能展现珐琅产品的色彩和质感
- 图片命名必须与代码中引用的文件名完全一致
- 替换图片后需要重新构建项目才能看到效果
- 如需调整图片展示效果，可以修改对应的CSS类名

## 技术支持

如遇到问题，请检查：
1. 图片文件路径是否正确
2. 文件名大小写是否匹配
3. 图片格式是否正确
4. 是否已重新构建项目
