import Button from "./Button";

function Navbar() {
    return (
        <nav className="bg-[#F8F7F4] grid grid-cols-3 items-center p-4 h-28 relative">

           <div className="flex justify-start">
                <a className="font-helvetica font-bold text-[#0D0C22] text-base p-10">
                    ISOLOGO
                </a>
           </div>


            <div className="flex flex-col justify-center">
                <h1 className="font-helvetica font-medium text-2xl text-[#0D0C22] leading-[48px] text-center">
                    The Tumbled Stone Guide by
                </h1>
                <h2 className="font-inria font-normal text-[21.14px] leading-[25px] text-[#000000] text-right pr-36 tracking-[6px]">
                    KLUGELOU
                </h2>
            </div>


            <div className="flex items-center gap-4 justify-end">
                <a className="font-helvetica font-bold text-[13.89px] text-[#6750A4]" href="">
                    Go to Gemstone Library
                </a>
                <Button text="KLUGELOU Store" bgColor="bg-[#FFDA79]" textColor="text-[#0D0C22]" hoverBgColor = 'hover:bg-[#0D0C22]' hoverTextColor = 'hover:text-[#FFFFFF]'  />
            </div>
        </nav>
    );
}

export default Navbar;
