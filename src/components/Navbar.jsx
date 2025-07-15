import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false); // Hide navbar
      } else {
        setVisible(true); // Show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Nav links
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Skyneski", link: "/skyneski" },
    { name: "Pravinya", link: "/pravinya" },
    { name: "SMG-Buiders", link: "/smg-builders" },
    { name: "Contact", link: "/contact" }, 
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-[#0C0C0C] border-b border-[#2a2a2a] shadow-md`}
    >
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="relative group">
          <img src="/logo.svg" alt="SMG Logo" className="h-10 object-contain" />
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-sm">
          {navLinks.map(({ name, link }) => {
            // If link is "/#contact", just check if pathname is "/"
            const isActive =
              link === location.pathname ||
              (link.includes("#") && location.pathname === "/");

            return (
              <Link
                key={name}
                to={link}
                className={`flex items-center gap-1 transition-colors ${
                  isActive ? "text-[#FF5859]" : "text-[#DFE2E1] hover:text-[#FF5859]"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
