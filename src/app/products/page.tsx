'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FlaskConical, Target, Shield, Award, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';

export default function ProductsPage() {
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
                <Sparkles className="w-4 h-4 text-[#D4AF37] mr-2" />
                <span className="text-sm text-gray-700 font-medium">创新材料 · 匠心制造</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                产品中心
              </h1>
              <p className="text-lg text-gray-600">
                专注于环保珐琅颜料与高纯度黄金合金的研发与生产
              </p>
            </div>
          </div>
        </section>

        {/* Enamel Pigment Section */}
        <section id="enamel" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-[#F5F0E6] px-4 py-2 rounded-full mb-6">
                    <FlaskConical className="w-4 h-4 text-[#9D2933] mr-2" />
                    <span className="text-sm font-medium text-[#9D2933]">核心产品</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    环保珐琅颜料
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    采用先进的生产工艺，开发出无铅无镉的环保珐琅颜料，严格符合 REACH 标准，满足高端首饰制造商的多样化需求。
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">环保认证</h4>
                        <p className="text-sm text-gray-600">无铅无镉，通过 REACH 认证，符合国际环保标准</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">色彩丰富</h4>
                        <p className="text-sm text-gray-600">故宫红、皇宫黄、宝石蓝、祖母绿、玫瑰金等经典色彩</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">性能优异</h4>
                        <p className="text-sm text-gray-600">色泽稳定性强，附着力高，硬度符合行业标准</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Images Gallery */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">产品展示</h3>
                  <p className="text-gray-600">环保珐琅颜料 - 多种色彩选择</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { image: '/images/enamel/enamel-1.jpg', title: '故宫红', desc: '经典中国红' },
                    { image: '/images/enamel/enamel-2.png', title: '皇宫黄', desc: '皇家尊贵黄' },
                    { image: '/images/enamel/enamel-3.png', title: '宝石蓝', desc: '深邃宝石蓝' },
                    { image: '/images/enamel/enamel-4.png', title: '祖母绿', desc: '天然祖母绿' },
                    { image: '/images/enamel/enamel-5.jpg', title: '玫瑰金', desc: '优雅玫瑰金' },
                    { image: '/images/enamel/enamel-7.png', title: '珍珠白', desc: '纯净珍珠白' },
                    { image: '/images/enamel/enamel-11.jpg', title: '珐琅金', desc: '经典珐琅金' },
                    { image: '/images/enamel/enamel-12.png', title: '珐琅紫', desc: '神秘珐琅紫' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500 italic">* 悬停查看产品详情</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enamel Technical Specs */}
        <section id="enamel-specs" className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">技术指标</h3>
              </div>
              
              <div className="bg-gradient-to-br from-[#9D2933]/5 to-[#D4AF37]/5 rounded-2xl p-8 border border-[#D4AF37]/20 shadow-lg">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">重金属含量</span>
                      <span className="text-sm text-[#9D2933] font-bold">符合 REACH</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#9D2933] to-[#D4AF37] h-2 rounded-full transition-all duration-1000" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">色泽稳定性</span>
                      <span className="text-sm text-[#9D2933] font-bold">优秀</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5C745] h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }} />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">附着力</span>
                      <span className="text-sm text-[#9D2933] font-bold">优秀</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#D4AF37] to-[#F5C745] h-2 rounded-full transition-all duration-1000" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">硬度</span>
                      <span className="text-sm text-[#9D2933] font-bold">符合标准</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#9D2933] to-[#D4AF37] h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Gold Titanium Alloy Section */}
        <section id="alloy" className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-[#D4AF37]/5 to-[#9D2933]/5 rounded-2xl p-8 border border-[#9D2933]/20 shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">产品优势</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="text-4xl font-bold text-[#9D2933] mb-2 group-hover:scale-110 transition-transform">30%+</div>
                        <div className="text-sm text-gray-600">硬度提升</div>
                      </div>
                      <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="text-4xl font-bold text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform">15-20%</div>
                        <div className="text-sm text-gray-600">成本降低</div>
                      </div>
                      <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="text-4xl font-bold text-[#9D2933] mb-2 group-hover:scale-110 transition-transform">99%</div>
                        <div className="text-sm text-gray-600">金纯度</div>
                      </div>
                      <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="text-4xl font-bold text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform">1-2吨</div>
                        <div className="text-sm text-gray-600">月产能</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center bg-[#F5F0E6] px-4 py-2 rounded-full mb-6">
                    <Target className="w-4 h-4 text-[#D4AF37] mr-2" />
                    <span className="text-sm font-medium text-[#D4AF37]">高端材料</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    高纯度黄金合金
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    采用先进的合金熔炼工艺，生产高纯度黄金合金材料。金含量 ≥99%，
                    通过添加其他环保金属，在保持黄金色泽的同时，大幅提高材料性能。
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#9D2933] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">硬度提升</h4>
                        <p className="text-sm text-gray-600">相比传统黄金材料，硬度提升 30% 以上</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#9D2933] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">保持色泽</h4>
                        <p className="text-sm text-gray-600">完美保留黄金的经典色泽，视觉效果出众</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#9D2933] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">成本优化</h4>
                        <p className="text-sm text-gray-600">在保证质量的前提下，降低成本 15-20%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alloy Product Images Gallery */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">合金产品展示</h3>
                  <p className="text-gray-600">高纯度黄金合金 - 精密工艺制作</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { image: '/images/alloy/alloy-1.png', title: '黄金合金产品1', desc: '99%金纯度，硬度提升30%+' },
                    { image: '/images/alloy/alloy-2.png', title: '黄金合金产品2', desc: '保持黄金色泽，成本降低15-20%' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/90 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500 italic">* 悬停查看产品详情</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  应用领域
                </h2>
                <p className="text-gray-600">
                  我们的产品广泛应用于多个高端领域
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group bg-gradient-to-br from-[#F5F0E6] to-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#9D2933] transition-colors">高端首饰</h3>
                  <p className="text-sm text-gray-600">
                    用于高端首饰制作，提升产品品质与价值
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-[#F5F0E6] to-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F5C745] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#9D2933] transition-colors">镶嵌配件</h3>
                  <p className="text-sm text-gray-600">
                    精密镶嵌件制作，满足高端定制需求
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-[#F5F0E6] to-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <FlaskConical className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#9D2933] transition-colors">精密配件</h3>
                  <p className="text-sm text-gray-600">
                    高精度配件生产，适用于多种精密应用
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#9D2933] via-[#b83c47] to-[#9D2933] relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="productPattern" patternUnits="userSpaceOnUse" width="40" height="40">
                    <circle cx="20" cy="20" r="2" fill="#D4AF37"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#productPattern)"/>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                需要定制化解决方案？
              </h2>
              <p className="text-white/90 mb-6">
                我们的专业团队随时为您提供技术咨询和定制服务
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-[#9D2933] rounded-lg font-medium hover:bg-[#F5F0E6] transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
              >
                联系我们
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
