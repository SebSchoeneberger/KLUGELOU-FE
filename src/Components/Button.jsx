import clsx from 'clsx';

function Button({ 
    text, 
    bgColor = 'bg-[#0D0C22]', 
    textColor = 'text-[#FFFFFF]', 
    hoverBgColor = 'hover:bg-[#FFDA79]', 
    hoverTextColor = 'hover:text-[#0D0C22]' 
}) {
    return ( 
        <button 
            className={clsx(
                "btn flex flex-row justify-center items-center px-[7px] py-[10px] gap-[10px] w-[230px] h-[48px] border border-[#0D0C22] rounded-full",
                bgColor,
                textColor,
                hoverBgColor,  // Hover background color
                hoverTextColor, // Hover text color
                "hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            )}
        >
            {text}
        </button>
    );
}

export default Button;
