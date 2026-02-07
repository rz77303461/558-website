import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footerPattern" patternUnits="userSpaceOnUse" width="60" height="60">
                <circle cx="30" cy="30" r="1" fill="#D4AF37"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerPattern)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9D2933] to-[#D4AF37] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">新</span>
              </div>
              <span className="font-bold text-xl">伍伍捌新材料科技有限公司</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              专注于环保珐琅颜料、高纯度黄金合金的研发、生产与销售，为首饰行业提供优质材料解决方案。
              通过持续的技术创新，致力于成为新材料领域的领先企业。
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <MapPin size={16} />
                <span>湖南省岳阳市洞庭湖小镇</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4AF37]">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center group">
                  <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-2 group-hover:w-1.5 group-hover:h-1.5 transition-all" />
                  首页
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center group">
                  <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-2 group-hover:w-1.5 group-hover:h-1.5 transition-all" />
                  产品中心
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center group">
                  <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-2 group-hover:w-1.5 group-hover:h-1.5 transition-all" />
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm flex items-center group">
                  <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-2 group-hover:w-1.5 group-hover:h-1.5 transition-all" />
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#D4AF37]">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Phone size={16} />
                <span>联系电话</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Mail size={16} />
                <span>邮箱咨询</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-400 hover:text-[#D4AF37] transition-colors">
                <MapPin size={16} />
                <span>湖南省岳阳市洞庭湖小镇</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-sm text-gray-500">
          <p className="hover:text-gray-300 transition-colors">© {currentYear} 伍伍捌新材料科技有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}
