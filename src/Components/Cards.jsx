import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';

function Cards({_id, name, imageUrl, namesOrigin, crystalSystem, starSign, chakra, element, charging, discharging }) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/stone/${_id}`);
    }

    return (
        <div className="card bg-white w-[315px] max-h-[547px] border border-black shadow-xl rounded-[34px] overflow-hidden flex flex-col">

            <figure className="w-full h-[223px]">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body flex flex-col justify-center items-start p-6 gap-3 w-full h-[324px]">
                <h2 className="font-helvetica font-bold text-2xl leading-[28px] text-black text-left">
                    {name}
                </h2>

                <div className="flex flex-col items-start gap-1 w-full">
                    <p className="text-sm text-black text-left">
                        Name's origin: {namesOrigin}.
                    </p>
                    <p className="text-sm text-black text-left">
                        Crystal system: {crystalSystem}
                    </p>
                    <p className="text-sm text-black text-left">
                        Star Sign: {starSign}
                    </p>
                    <p className="text-sm text-black text-left">
                        Chakra: {chakra}
                    </p>
                    <p className="text-sm text-black text-left">
                        Element: {element}
                    </p>
                    <p className="text-sm text-black text-left">
                        Charging: {charging}
                    </p>
                    <p className="text-sm text-black text-left">
                        Discharging: {discharging}
                    </p>
                </div>

                <div className="w-full flex justify-center">
                    <Button
                        text="See healing properties"
                        bgColor="bg-[#0D0C22]"
                        textColor="text-[#FFFFFF]"
                        onClick={handleButtonClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
