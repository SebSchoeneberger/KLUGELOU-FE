import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#F8F7F4] relative w-full h-[109px]">
            <div className="grid grid-cols-3 items-center p-4 h-full mx-auto relative">
                {/* ISOLOGO - Visible on larger screens */}
                <div className="hidden lg:flex justify-start">
                    <a className="font-helvetica font-bold text-customBlack text-base p-10">
                        ISOLOGO
                    </a>
                </div>

                {/* Title Section */}
                <Link to='/' className="flex flex-col justify-center lg:justify-self-center justify-self-start col-span-2 lg:col-span-1">
                    {/* "The Tumbled Stone Guide by" Title */}
                    <h1 className="font-helvetica font-medium text-lg lg:text-[17.86px] xl:text-[24px] leading-[24px] lg:leading-[32px] xl:leading-[48px] text-customBlack text-left lg:text-center">
                        The Tumbled Stone Guide by
                    </h1>
                    {/* "KLUGELOU" Subtitle */}
                    <h2 className="font-inria font-normal text-sm lg:text-[14px] xl:text-[21.14px] leading-[13px] lg:leading-[17px] xl:leading-[25px] text-[#000000] lg:text-right text-left tracking-[3px] lg:tracking-[4px] xl:tracking-[6px] uppercase">
                        KLUGELOU
                    </h2>
                </Link>

                {/* Regular Link and Button - Visible from medium screens and up */}
                <div className="hidden md:flex items-center gap-4 justify-end col-span-1">
                <Link 
        className="font-helvetica font-bold text-[13.89px] leading-[14px] text-[#6750A4]" 
        to="/#gemstone-library" // Link to the home page and specific section
    >
        Go to Gemstone Library
    </Link>
                    <Button 
                        text="KLUGELOU Store" 
                        bgColor="bg-[#FFDA79]" 
                        textColor="text-[#0D0C22]" 
                        hoverBgColor="hover:bg-[#0D0C22]" 
                        hoverTextColor="hover:text-[#FFFFFF]"  
                    />
                </div>

                {/* Hamburger Menu - Visible only on mobile */}
                <div className="md:hidden flex justify-end col-span-1">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="space-y-2">
                            <span className="block w-8 h-0.5 bg-black"></span>
                            <span className="block w-8 h-0.5 bg-black"></span>
                            <span className="block w-8 h-0.5 bg-black"></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-16 right-4 bg-[#F8F7F4] p-4 rounded-lg shadow-lg z-10 md:hidden">
                        <a className="block font-helvetica font-bold text-sm text-[#6750A4] mb-4" href="">
                            Go to Gemstone Library
                        </a>
                        <Button 
                            text="KLUGELOU Store" 
                            bgColor="bg-[#FFDA79]" 
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
