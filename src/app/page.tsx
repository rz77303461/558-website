import Link from 'next/link';
import { ArrowRight, FlaskConical, Award, TrendingUp, Shield, Sparkles, Target } from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#F5F0E6] via-white to-[#FFF8E7] pt-20 pb-16 overflow-hidden">
          {/* Decorative Pattern - Enamel Style */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="enamelPattern" patternUnits="userSpaceOnUse" width="60" height="60">
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#9D2933" strokeWidth="0.5"/>
                    <circle cx="30" cy="30" r="12" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#enamelPattern)"/>
              </svg>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#9D2933]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <Sparkles className="w-4 h-4 text-[#D4AF37] mr-2" />
                <span className="text-sm text-gray-700 font-medium">创新材料 · 引领未来</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                伍伍捌新材料科技<br />
                <span className="text-[#9D2933]">重塑行业标准</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                专注于环保珐琅颜料与高纯度黄金合金的研发与生产，为首饰行业提供符合
                REACH 标准的优质材料解决方案。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#9D2933] text-white rounded-lg font-medium hover:bg-[#b83c47] transition-colors shadow-lg hover:shadow-xl"
                >
                  探索产品
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 border-2 border-[#D4AF37] rounded-lg font-medium hover:bg-[#D4AF37] hover:text-white transition-colors"
                >
                  联系我们
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '500万', label: '注册资本（元）' },
                { value: '5-10吨', label: '月产能（珐琅）' },
                { value: '1-2吨', label: '月产能（合金）' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#9D2933] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Products Section */}
        <section className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                核心产品
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                以技术创新为核心，提供行业领先的新材料解决方案
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Product 1 */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#D4AF37]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9D2933]/5 to-[#D4AF37]/5 rounded-bl-full transition-transform group-hover:scale-110" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FlaskConical className="w-8 h-8 text-white" />
                  </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  环保珐琅颜料
                </h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span>无铅无镉，符合 REACH 标准</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span>5种以上市场急需色彩</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                    <span>优异的色泽稳定性与附着力</span>
                  </li>
                </ul>
                <Link
                  href="/products#enamel"
                  className="inline-flex items-center text-[#9D2933] font-medium hover:text-[#b83c47] transition-colors group-hover:translate-x-2 transition-transform"
                >
                  了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                </div>
              </div>

              {/* Product 2 */}
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#D4AF37]/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/5 to-[#F5C745]/5 rounded-bl-full transition-transform group-hover:scale-110" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F5C745] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  高纯度黄金合金
                </h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-[#9D2933] mr-2 mt-0.5 flex-shrink-0" />
                    <span>硬度提高 30% 以上</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 text-[#9D2933] mr-2 mt-0.5 flex-shrink-0" />
                    <span>保持黄金色泽</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-[#9D2933] mr-2 mt-0.5 flex-shrink-0" />
                    <span>成本降低 15-20%</span>
                  </li>
                </ul>
                <Link
                  href="/products#alloy"
                  className="inline-flex items-center text-[#9D2933] font-medium hover:text-[#b83c47] transition-colors group-hover:translate-x-2 transition-transform"
                >
                  了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                为什么选择我们
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                技术领先 · 质量保证 · 服务至上
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group text-center p-8 bg-gradient-to-br from-[#F5F0E6] to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FlaskConical className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9D2933] transition-colors">技术创新</h3>
                <p className="text-gray-600">
                  持续研发投入，保持技术领先，为客户提供最新材料解决方案
                </p>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-[#F5F0E6] to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F5C745] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9D2933] transition-colors">质量保证</h3>
                <p className="text-gray-600">
                  严格的质量控制体系，通过 ISO9001、ISO14001 等认证
                </p>
              </div>

              <div className="group text-center p-8 bg-gradient-to-br from-[#F5F0E6] to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9D2933] transition-colors">专业服务</h3>
                <p className="text-gray-600">
                  专业的技术团队，提供全方位的技术支持和服务
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Gallery */}
        <section className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  公司风采
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  展现企业风貌，彰显专业品质
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { image: '/images/company/company-1.png', title: '研发中心', desc: '专业的研发团队与先进设备' },
                  { image: '/images/company/company-2.png', title: '生产基地', desc: '现代化的生产车间' },
                  { image: '/images/company/company-3.png', title: '品质检测', desc: '严格的质量控制体系' },
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#9D2933] via-[#b83c47] to-[#9D2933] relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="ctaPattern" patternUnits="userSpaceOnUse" width="40" height="40">
                    <circle cx="20" cy="20" r="2" fill="#D4AF37"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#ctaPattern)"/>
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                准备好开始合作了吗？
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                联系我们，了解更多产品信息，开启优质材料解决方案之旅
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#9D2933] rounded-lg font-medium hover:bg-[#F5F0E6] transition-colors shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                立即联系
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
