import smgLogo from '../images/smg_ventures-logo.png';
import smg_buildersLogo from '../images/smg-logo.jpg';
import skyneskiLogo from '../images/skyneski-logo.png';
import pravinyaLogo from '../images/pravinya-logo.png';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#0c0c0c]">
      {/* Logo & Dropdown */}
      <div className="relative group">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src="./logo.svg" alt="SMG Logo" className="w-full h-10 object-contain" />
        </div>

        <div className="absolute left-0 mt-3 bg-[#1f2937] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 p-4 space-y-3 z-20">
          {[{ logo: skyneskiLogo, label: 'Sykneski' }, { logo: pravinyaLogo, label: 'Pravinya' }, { logo: smg_buildersLogo, label: 'SMG Builders and Constructers' }].map(({ logo, label }) => (
            <div key={label} className="flex items-center space-x-2">
              <img src={logo} alt={label} className="w-8 h-8 object-contain" />
              <span className="text-sm text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-sm">
        {[
          { name: "Careers", link: "#careers" },
          { name: "Contact", link: "#contact" },
        ].map(({ name, link }) => (
          <a
            key={name}
            href={link}
            className="flex items-center gap-1 hover:text-red-400 cursor-pointer"
          >
            {name} <span className="text-xs">▼</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
