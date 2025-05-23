import React from "react";
import Button from "../Components/Button";
import Carousel from "../Components/Carousel";
import GemstoneLibrary from "../Components/GemstoneLibrary";

function Home() {
  return (
    <>
      <section className="bg-[#F8F7F4] flex flex-col items-center relative h-auto pt-[109px] md:h-[540px]">
        <div className="w-full max-w-[1264px] px-4 md:px-0">
          <h1 className="font-inria text-[#0D0C22] text-center text-5xl md:text-6xl lg:text-7xl leading-[40px] mb-6 md:leading-[64px] lg:leading-[76px] sm:leading-[64px] max-[639px]:leading-[64px]">
            Das Reiseziel für Edelsteinliebhaber aus aller Welt
          </h1>
          <p className="nunito text-[#0D0C22] text-center text-base leading-[24px] mb-[24px] md:text-[19.84px] md:leading-[36px] md:mb-[48px]">
            Melden Sie sich an, um Ihren kostenlosen{" "}
            <b>7-tägigen E-Mail-Kurs</b> über heilende Edelsteine an.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] md:gap-[24px] mb-6">
            <label className="input flex items-center gap-2 box-border w-full max-w-[300px] h-[48px] bg-white border border-black rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="E-Mail-Adresse"
              />
            </label>
            <Button text="Ich möchte mitmachen!" bgColor="#0D0C22" />
          </div>
        </div>
      </section>

      <Carousel />
      <GemstoneLibrary />
    </>
  );
}

export default Home;
