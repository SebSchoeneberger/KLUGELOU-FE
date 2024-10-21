import Button from '../Components/Button';
import img from '../assets/img/93a1be4f40ef03a51ceefde515ee444c.png';

function Cards() {
    return (
        <div className="card bg-white w-[315px] max-h-[547px] border border-black shadow-xl rounded-[34px] overflow-hidden flex flex-col">

            <figure className="w-full h-[223px]">
                <img
                    src={img}
                    alt="Amethyst"
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body flex flex-col justify-center items-start p-6 gap-3 w-full h-[324px]">

                <h2 className="font-helvetica font-bold text-2xl leading-[28px] text-black text-left">
                    Amethyst
                </h2>

                <div className="flex flex-col items-start gap-1 w-full">
                    <p className="text-sm text-black text-left">
                        Name's origin: Greek for "not drunk".
                    </p>
                    <p className="text-sm text-black text-left">
                        Crystal system: Trigonal
                    </p>
                    <p className="text-sm text-black text-left">
                        Star Sign: Pisces
                    </p>
                    <p className="text-sm text-black text-left">
                        Chakra: Crown Chakra
                    </p>
                    <p className="text-sm text-black text-left">
                        Element: Water
                    </p>
                    <p className="text-sm text-black text-left">
                        Charging: Amethyst Geode, Moonlight
                    </p>
                    <p className="text-sm text-black text-left">
                        Discharging: Running water, hematite tumbled stones
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <Button
                        text="See healing properties"
                        bgColor="bg-[#0D0C22]"
                        textColor="text-[#FFFFFF]"
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
