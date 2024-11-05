import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToGemstoneLibrary = (e) => {
    e.preventDefault();
    const section = document.getElementById('gemstone-library');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <nav className="bg-[#F8F7F4] relative w-full h-full">
      <div className="grid grid-cols-3 items-center p-4 h-full mx-auto relative">
        <div className="hidden lg:flex justify-start">
          <a className="nunito font-bold text-customBlack text-base p-10">
            <img
              src="https://cdn.shopify.com/s/files/1/0890/9170/3131/files/Klugelou_Icono_Logo_Marron.png?v=1730638190&width=100"
              alt="Logo"
              className="h-14"
            />
          </a>
        </div>

        <Link
          to="/"
          className="flex flex-col justify-center lg:justify-self-center justify-self-start col-span-2 lg:col-span-1"
        >
          <h1 className="nunito font-medium text-lg lg:text-[18px] xl:text-[24px] leading-[24px] lg:leading-[32px] xl:leading-[48px] text-customBlack text-left lg:text-center">
            Die Edelstein-Bibliothek von
          </h1>
          <h2 className="font-inria font-normal text-sm lg:text-[16px] xl:text-[24px] leading-[14px] lg:leading-[18px] xl:leading-[24px] text-[#000000] lg:text-right text-left tracking-[3px] lg:tracking-[4px] xl:tracking-[6px]">
            KLUGELOU
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-4 justify-end col-span-1">
          <Link
            className="nunito font-bold text-base leading-[16px] text-[#A46C07]"
            onClick={scrollToGemstoneLibrary}
            to='/'
          >
            Edelstein ansehen
          </Link>
          <Button
            text="Zum KLUGELOU-Shop"
            bgColor="bg-[#C9C628]"
            textColor="text-[#0D0C22]"
            hoverBgColor="hover:bg-[#0D0C22]"
            hoverTextColor="hover:text-[#FFFFFF]"
          />
        </div>

        <div className="md:hidden flex justify-end col-span-1">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
              <span className="block w-8 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 right-4 bg-[#F8F7F4] p-4 rounded-lg shadow-lg z-10 md:hidden">
            <Link
              className="block nunito font-bold text-sm text-[#6750A4] mb-4"
              to="/#gemstone-library"
            >
              Go to Gemstone Library
            </Link>
            <Button
              text="KLUGELOU Store"
              bgColor="bg-[#C9C628]"
              textColor="text-[#0D0C22]"
              hoverBgColor="hover:bg-[#0D0C22]"
              hoverTextColor="hover:text-[#FFFFFF]"
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
