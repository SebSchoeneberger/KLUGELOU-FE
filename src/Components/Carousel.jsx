import img from "../assets/img/Fluorite_1.png";
import img2 from "../assets/img/Cherry_Agate_1.png";
import img3 from "../assets/img/Amethyst_1.png";
import img4 from "../assets/img/Opalite_1.png";
import img5 from "../assets/img/Dragon_Blood_1.png";
import img6 from "../assets/img/Red_Jasper_1.png";

const Carousel = () => {
  return (
    <div
      className="w-full overflow-hidden relative mx-auto bg-[#F8F7F4] pb-10"
      style={{ "--tiles": 18 }}
    >
      <div
        className="flex animate-slideX space-x-6 w-max"
        style={{ animation: "slideX 45s linear infinite" }}
      >
        {/* Carousel Items */}
        {[
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703870/Dragon_Blood_fshwjh.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Fluorite_htf8ao.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Red_Jasper_kpy5to.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703864/Amethyst_from_Klugelou_sqkjpr.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703860/Opalite_from_Klugelou_lm5pbg.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703858/Cherry_Agate_1_dvsqhj.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703870/Dragon_Blood_fshwjh.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Fluorite_htf8ao.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Red_Jasper_kpy5to.png",
        ].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[220px] h-[300px]">
            <img
              className="w-full h-full object-contain rounded-[20px] border border-black"
              src={src}
              alt={src.split("/").pop().split(".")[0]}
            />
          </div>
        ))}
        {/* Duplicate items for infinite scrolling */}
        {[
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703870/Dragon_Blood_fshwjh.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Fluorite_htf8ao.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Red_Jasper_kpy5to.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703864/Amethyst_from_Klugelou_sqkjpr.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703860/Opalite_from_Klugelou_lm5pbg.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703858/Cherry_Agate_1_dvsqhj.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703870/Dragon_Blood_fshwjh.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Fluorite_htf8ao.png",
          "https://res.cloudinary.com/dwaoomiat/image/upload/v1730703865/Red_Jasper_kpy5to.png",
        ].map((src, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-[220px] h-[300px]"
            aria-hidden="true"
          >
            <img
              className="w-full h-full object-contain rounded-[20px] border border-black"
              src={src}
              alt={src.split("/").pop().split(".")[0]}
            />
          </div>
        ))}
      </div>
      <style>{`
          @keyframes slideX {
            0% {
              transform: translateX(calc(-1 * (8rem + 1.5rem) * 9));
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
    </div>
  );
};

export default Carousel;
