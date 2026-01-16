import React, { useState, useEffect, type JSX } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./ui/Button";

interface MenuItem {
  name: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items?: MenuItem[];
}

interface MenuData {
  sections: MenuSection[];
}

const menuData: Record<string, MenuData> = {
  "Why Hire Us": {
    sections: [
      {
        title: "USE CASES",
        items: [
          { name: "Sustainable Buildings" },
          { name: "Healthy Buildings" },
          { name: "Digital buildings" },
        ],
      },
      {
        title: "SECTORS",
        items: [
          { name: "Retails" },
          { name: "Finance as a service" },
          { name: "Technology as aservice" },
          { name: "Energy as a service" },
          { name: "ESG as a service" },
          { name: "Government/NGO" },
        ],
      },
    ],
  },
  Platform: {
    sections: [
      {
        title: "INFINITEBLEU PLATFORM",
        items: [
          { name: "Total experience API" },
          { name: "HEMS Modules" },
          { name: "Digital Twin" },
          { name: "OmniXperience" },
          { name: "TerraOne" },
        ],
      },
      {
        title: "THIRD-PARTY PLATFORM",
        items: [
          { name: "TPASS" },
          { name: "e-mobility" },
          { name: "VirtualGas Plan" },
        ],
      },
    ],
  },
  "Venture Design lab": {
    sections: [
      {
        title: "",
        items: [
          { name: "Overview" },
          { name: "Collaborations" },
          { name: "Innovation Approach" },
        ],
      },
      {
        title: "",
        items: [
          { name: "Case-studies" },
          { name: "Framework" },
          { name: "Contact" },
        ],
      },
    ],
  },
  Resources: {
    sections: [
      {
        title: "",
        items: [
          { name: "Blog" },
          { name: "Market Trend" },
          { name: "Webinar" },
          { name: "Third Party Articles" },
          { name: "Press Release" },
        ],
      },
      {
        title: "",
        items: [
          { name: "ESG+ CSR +SGS" },
          { name: "Efficiency to zero" },
          { name: "(Re)Finance the Future" },
        ],
      },
      {
        title: "",
        items: [
          { name: "Our thinking" },
          { name: "Mission" },
          { name: "Mission" },
          { name: "Goal" },
          { name: "Value" },
          { name: "Vision" },
          { name: "Career" },
          { name: "Philosophy" },
        ],
      },
    ],
  },
  "Why Us": {
    sections: [
      {
        title: "",
        items: [
          { name: "About Us" },
          { name: "Impact" },
          { name: "NewsRoom" },
          { name: "Careers" },
        ],
      },
    ],
  },
};

const DropdownContent: React.FC<{
  data: MenuData;
  isVisible: boolean;
  menuName?: string;
}> = ({ data, isVisible, menuName }) => {
  const sectionCount = data.sections.length;
  const gridCols =
    sectionCount === 1
      ? "md:grid-cols-2"
      : sectionCount === 2
      ? "md:grid-cols-2 lg:grid-cols-4"
      : sectionCount === 3
      ? "md:grid-cols-3 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-4";

  const showResourcesHeading = menuName === "Resources";

  return (
    <div
      className={`fixed left-0 right-0 top-16 z-30 w-full bg-white border-b border-gray-200 rounded-bl-full shadow-lg transition-all duration-300 ease-out px-16${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {showResourcesHeading && (
          <div className="max-w-3xl">
            <h2 className="mb-6 text-gray-900 text-left">RESOURCES</h2>
          </div>
        )}
        <div className={`grid grid-cols-1 ${gridCols} gap-x-10 gap-y-8`}>
          {data.sections.map((section, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 60}ms` : "0ms" }}
            >
              {section.title && section.title !== "RESOURCES" && (
                <h3 className="text-xs text-gray-500 mb-4 tracking-wide uppercase font-normal">
                  {section.title}
                </h3>
              )}
              <div className="space-y-3">
                {section.items?.map((item, itemIdx) => (
                  <a key={itemIdx} href="#" className="block group">
                    <div className="text-sm font-normal text-gray-700 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200">
                      {item.name}
                    </div>
                    {item.description && (
                      <div className="text-xs text-gray-500 mt-1 leading-relaxed font-normal">
                        {item.description}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-168px)] p-4">
          {Object.keys(menuData).map((menu) => (
            <div key={menu} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() =>
                  setExpandedMenu(expandedMenu === menu ? null : menu)
                }
                className="w-full flex items-center justify-between py-3 px-2 text-left text-gray-800 font-normal hover:bg-gray-50 transition-colors rounded-lg"
              >
                <span className="text-sm">{menu}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedMenu === menu ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedMenu === menu
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 pb-3 space-y-4">
                  {menuData[menu].sections.map((section, idx) => (
                    <div key={idx}>
                      {section.title && (
                        <div className="text-xs font-normal text-gray-500 mb-2 uppercase tracking-wide">
                          {section.title}
                        </div>
                      )}
                      <div className="space-y-2">
                        {section.items?.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href="#"
                            className="block py-1 text-xs text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all font-normal"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
          <Button className="w-full text-black hover:text-white transition-colors duration-300">
            Let's Talk
          </Button>
        </div>
      </div>
    </>
  );
};

export default function Navbar(): JSX.Element {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isHoveringContent, setIsHoveringContent] = useState(false);

  const currentDropdown = hoveredDropdown || activeDropdown;

  const handleMouseEnter = (menu: string) => setHoveredDropdown(menu);

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isHoveringContent) setHoveredDropdown(null);
    }, 100);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-16 w-auto object-contain"
              />

              <div className="hidden lg:flex items-center space-x-1">
                {Object.keys(menuData).map((menu) => (
                  <div
                    key={menu}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === menu ? null : menu)
                      }
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-normal transition-colors duration-200 ${
                        currentDropdown === menu
                          ? "text-gray-900"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {menu}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          currentDropdown === menu ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="text-black hover:text-white transition-colors duration-300 hidden! md:flex">
                Let's Talk
              </Button>

              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors "
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {currentDropdown && (
          <div
            onMouseEnter={() => setIsHoveringContent(true)}
            onMouseLeave={() => {
              setIsHoveringContent(false);
              setHoveredDropdown(null);
            }}
          >
            <DropdownContent
              data={menuData[currentDropdown]}
              isVisible={true}
              menuName={currentDropdown}
            />
          </div>
        )}
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
