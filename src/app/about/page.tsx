import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Users, Target, Award, Building2, Lightbulb, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-[#F5F0E6] via-white to-[#FFF8E7] py-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#9D2933]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <Building2 className="w-4 h-4 text-[#D4AF37] mr-2" />
                <span className="text-sm text-gray-700 font-medium">创新引领 · 匠心筑梦</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                关于我们
              </h1>
              <p className="text-lg text-gray-600">
                专注于新材料研发与创新，引领行业发展
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">公司简介</h2>
              </div>

              <div className="bg-gradient-to-br from-[#F5F0E6]/50 to-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9D2933] to-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      伍伍捌新材料科技有限公司
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      公司注册资本 500 万元，专注于新型合金材料、环保珐琅材料、模具原料、首饰加工耗材的研发、生产、销售以及技术服务与技术咨询。
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      坐落于湖南省岳阳市洞庭湖小镇，拥有 550-650 平方米的三层办公楼，涵盖研发中心、生产区和管理办公区。
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Target className="w-5 h-5 text-[#D4AF37] mr-2" />
                      <h4 className="font-semibold text-gray-900">核心业务</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 环保珐琅颜料研发与生产</li>
                      <li>• 高纯度黄金合金制造</li>
                      <li>• 技术服务与咨询</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 text-[#9D2933] mr-2" />
                      <h4 className="font-semibold text-gray-900">质量认证</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• ISO9001 质量管理体系</li>
                      <li>• ISO14001 环境管理体系</li>
                      <li>• REACH 环保认证</li>
                      <li>• RoHS 有害物质限制</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Atmosphere */}
        <section className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  公司风貌
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  真实展现我们的工作环境与企业氛围
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { image: '/images/company/company-4.png', title: '办公环境', desc: '现代化的办公空间' },
                  { image: '/images/company/company-5.png', title: '团队协作', desc: '专业的技术团队' },
                  { image: '/images/company/company-6.png', title: '生产现场', desc: '严格的生产管理' },
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

        {/* Mission & Vision */}
        <section className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  使命与愿景
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/30 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#9D2933] transition-colors">
                    企业使命
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    通过持续的技术创新，为客户提供高品质、环保的新材料解决方案，
                    推动首饰行业及相关领域的可持续发展，成为值得信赖的合作伙伴。
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/30 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F5C745] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#9D2933] transition-colors">
                    企业愿景
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    成为新材料领域的技术领先者和行业标杆，
                    以卓越的产品和服务赢得客户信赖，
                    实现企业价值与社会价值的共同提升。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  研发实力
                </h2>
                <p className="text-gray-600">
                  专业的技术团队，先进的研发设备
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F5F0E6]/50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#9D2933] flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">研发团队</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2 mt-2 flex-shrink-0" />
                        专业化、复合型核心研发团队，汇聚行业资深技术骨干与专业技术支持顾问。
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2 mt-2 flex-shrink-0" />
                        深度联动高校院所优质技术资源，打通产学研协同创新通道。
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2 mt-2 flex-shrink-0" />
                        外部顶尖研发专家智库参与，构建 "全职核心 + 外部赋能 + 院校协同" 的立体化研发体系。
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2 mt-2 flex-shrink-0" />
                        具备全链条技术攻坚与产品迭代能力，为企业持续创新筑牢硬核技术根基。
                      </li>
                    </ul>
                  </div>

                  <div className="group">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900">研发设备</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9D2933] mr-2 mt-2 flex-shrink-0" />
                        配备有系统化、高精尖的研发实验设备，硬件基础扎实。
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9D2933] mr-2 mt-2 flex-shrink-0" />
                        核心装备涵盖专业实验电炉、高精度光谱分析仪等精密仪器。
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9D2933] mr-2 mt-2 flex-shrink-0" />
                        构建了覆盖材料制备、成分分析、性能检测全流程的完整检测设备体系。
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9D2933] mr-2 mt-2 flex-shrink-0" />
                        为新材料研发、工艺优化与质量管控提供全维度硬件支撑，保障研发精准高效。
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section className="py-20 bg-[#F5F0E6]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  发展规划
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#9D2933] flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-full bg-[#D4AF37] mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">第一阶段</h4>
                    <p className="text-sm text-gray-600">
                      聚焦核心产品技术攻坚，完成环保珐琅颜料系列及高纯度黄金合金的研发突破，搭建标准化生产体系，同步启动市场布局与客户开发，夯实企业发展根基。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="w-0.5 h-full bg-[#9D2933] mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">第二阶段</h4>
                    <p className="text-sm text-gray-600">
                      稳步扩大生产产能，构建全流程质量管理体系，推进行业权威认证获取，深化客户合作粘性，建立稳定可持续的市场合作生态。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#9D2933] flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">第三阶段</h4>
                    <p className="text-sm text-gray-600">
                      实现规模化高效生产，持续拓展产品矩阵丰富产品线，全面打造品牌核心影响力，深耕新材料领域，成长为行业领先的新材料解决方案提供商。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  核心价值观
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="group text-center p-8 bg-gradient-to-br from-[#F5F0E6] to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9D2933] transition-colors">创新</h3>
                  <p className="text-sm text-gray-600">
                    持续技术创新，引领行业发展
                  </p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-[#F5F0E6] to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#F5C745] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9D2933] transition-colors">品质</h3>
                  <p className="text-sm text-gray-600">
                    严格质量控制，确保产品卓越
                  </p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-[#F5F0E6] to-white rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#9D2933] to-[#D4AF37] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#9D2933] transition-colors">合作</h3>
                  <p className="text-sm text-gray-600">
                    携手客户，共创美好未来
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
