import img from '../assets/img/Fluorite_1.png';
import img2 from '../assets/img/Cherry_Agate_1.png';
import img3 from '../assets/img/Amethyst_1.png';
import img4 from '../assets/img/Opalite_1.png';
import img5 from '../assets/img/Dragon_Blood_1.png';
import img6 from '../assets/img/Red_Jasper_1.png';

function Carousel() {
    return (
        <section className="w-full h-auto bg-[#F8F7F4] flex justify-center items-center py-10">
            <div className="carousel carousel-center flex space-x-6 max-w-[1920px] overflow-x-auto scrollbar-hide px-4">
                <div className="carousel-item flex-shrink-0">
                    <div className="w-[220px] h-[300px] bg-white border border-black rounded-[20px] flex items-center justify-center">
                        <img src={img} alt="Fluorite" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
                <div className="carousel-item flex-shrink-0">
                    <div className="w-[220px] h-[300px] bg-white border border-black rounded-[20px] flex items-center justify-center">
                        <img src={img2} alt="Cherry Agate" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
                <div className="carousel-item flex-shrink-0">
                    <div className="w-[220px] h-[300px] bg-white border border-black rounded-[20px] flex items-center justify-center">
                        <img src={img3} alt="Amethyst" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
                <div className="carousel-item flex-shrink-0">
                    <div className="w-[220px] h-[300px] bg-white border border-black rounded-[20px] flex items-center justify-center">
                        <img src={img4} alt="Opalite" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
                <div className="carousel-item flex-shrink-0">
                    <div className="w-[220px] h-[300px] bg-white border border-black rounded-[20px] flex items-center justify-center">
                        <img src={img5} alt="Dragon Blood" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
                <div className="carousel-item flex-shrink-0">
                    <div className="w-[220px] h-[300px] bg-white border border-black rounded-[20px] flex items-center justify-center">
                        <img src={img6} alt="Red Jasper" className="w-full h-full object-cover rounded-[20px]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
