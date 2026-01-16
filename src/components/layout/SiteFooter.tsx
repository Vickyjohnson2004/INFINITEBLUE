import React from "react";
export default function SiteFooter() {
  return (
    <footer className="bg-[#F8FAFF] border-t border-[#E7ECF6] text-[#0B1223]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <a href="/">
              <img
                src="/logo.jpg"
                alt="Infinity Bleu Logo"
                className="w-30 h-14"
              />
            </a>
            <p className="text-[#0B1223]/70 mt-4 text-sm leading-relaxed max-w-sm">
              We design modern-luxury experiences that connect vision,
              technology, and culture.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div className="text-sm font-semibold uppercase text-[#0B1223]/60 mb-4">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                "Why Clients Hire Us",
                "Experience as a Platform",
                "Resources",
                "Venture Design Lab",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#0B1223]/80 hover:text-[#245CFF] text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="text-sm font-semibold uppercase text-[#0B1223]/60 mb-4">
              Resources
            </div>
            <ul className="space-y-2">
              {["Blog", "Press", "Webinar", "Third Party"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#0B1223]/80 hover:text-[#245CFF] text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="text-sm font-semibold uppercase text-[#0B1223]/60 mb-4">
              Social / Contact
            </div>
            <ul className="space-y-2">
              {["Email", "LinkedIn", "X"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#0B1223]/80 hover:text-[#245CFF] text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E7ECF6] pt-6 mt-10 text-xs text-[#0B1223]/50 text-center">
          © 2025 InfinityBleu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
