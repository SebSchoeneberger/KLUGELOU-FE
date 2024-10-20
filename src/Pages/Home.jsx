import Button from "../Components/Button";
import Carousel from "../Components/Carousel";

function Home() {
    return ( 
        <>
            <section className="bg-[#F8F7F4] flex flex-col items-center relative h-auto pt-[109px] md:h-[540px]">
                <div className="w-full max-w-[1264px] px-4 md:px-0">
                    <h1 className="font-inria text-[#0D0C22] text-center text-[72px] leading-[40px] mb-2 md:text-[72px] md:leading-[76px]">
                        The world’s destination for gemstone’s lovers
                    </h1>
                    <p className="font-helvetica text-[#0D0C22] text-center text-[16px] leading-[24px] mb-[24px] md:text-[19.84px] md:leading-[36px] md:mb-[48px]">
                        Get our free ebook about Gemstones right now
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[24px]">
                        <label className="input flex items-center gap-2 box-border w-full max-w-[300px] h-[48px] bg-white border border-black rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email Address" />
                        </label>
                        <Button text="Send me the free Ebook" bgColor="#0D0C22" />
                    </div>
                </div>
            </section>

            <section>
                <Carousel />
            </section>
        </>
    );
}

export default Home;
