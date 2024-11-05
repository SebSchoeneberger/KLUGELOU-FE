import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import ReactPaginate from "react-paginate";
import { fetchStones } from "../services/stoneAPI.js";

const GemstoneLibrary = ({
  backgroundClass = "bg-white",
  title = "Entdecke die faszinierende Welt der Edelsteine",
}) => {
  const [stones, setStones] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedCrystalSystem, setSelectedCrystalSystem] = useState("");
  const [selectedZodiacSign, setSelectedZodiacSign] = useState("");
  const [selectedChakraType, setSelectedChakraType] = useState("");
  const [selectedElement, setSelectedElement] = useState("");
  const [cardsPerPage, setCardsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchStones();
        setStones(res);
      } catch (err) {
        console.error("Error fetching stones:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setCardsPerPage(3);
      } else if (width <= 768) {
        setCardsPerPage(6);
      } else if (width <= 1024) {
        setCardsPerPage(9);
      } else {
        setCardsPerPage(12);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const scrollToGemstoneLibrary = () => {
    const section = document.getElementById('gemstone-library');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter stones based on search text and selected filters
  const filteredStones = stones.filter((stone) => {
    const matchesSearch = stone.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCrystalSystem = selectedCrystalSystem
      ? stone.crystalSystem.toLowerCase() === selectedCrystalSystem.toLowerCase()
      : true;
    const matchesZodiacSign = selectedZodiacSign
      ? stone.starSign.toLowerCase() === selectedZodiacSign.toLowerCase()
      : true;
    const matchesChakraType = selectedChakraType
      ? stone.chakra.toLowerCase() === selectedChakraType.toLowerCase()
      : true;
    const matchesElement = selectedElement
      ? stone.element.toLowerCase() === selectedElement.toLowerCase()
      : true;

    return (
      matchesSearch &&
      matchesCrystalSystem &&
      matchesZodiacSign &&
      matchesChakraType &&
      matchesElement
    );
  });

  // Calculate the current stones to display
  const offset = currentPage * cardsPerPage;
  const currentStones = filteredStones.slice(offset, offset + cardsPerPage);
  const pageCount = Math.ceil(filteredStones.length / cardsPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    scrollToGemstoneLibrary();
  };

  return (
    <>
      <section className={`flex flex-col items-center justify-center pb-24 ${backgroundClass}`}>
        <h1 id="gemstone-library" className="font-nunito text-4xl font-medium text-customBlack text-center pt-24 pb-20">
          {title}
        </h1>

        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          selectedCrystalSystem={selectedCrystalSystem}
          setSelectedCrystalSystem={setSelectedCrystalSystem}
          selectedZodiacSign={selectedZodiacSign}
          setSelectedZodiacSign={setSelectedZodiacSign}
          selectedChakraType={selectedChakraType}
          setSelectedChakraType={setSelectedChakraType}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />
      </section>

      <section className="max-w-screen-2xl mx-auto">
        <div className="grid justify-items-center items-center grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14">
          {currentStones.length > 0 ? (
            currentStones.map((stone) => (
              <Cards
                key={stone._id}
                _id={stone._id}
                name={stone.name}
                imageUrl={stone.imageUrl}
                namesOrigin={stone.namesOrigin}
                crystalSystem={stone.crystalSystem}
                starSign={stone.starSign}
                chakra={stone.chakra}
                element={stone.element}
                charging={stone.charging}
                discharging={stone.discharging}
              />
            ))
          ) : (
            <p>Keine Steine gefunden.</p>
          )}
        </div>
      </section>

      <section className="flex justify-center items-center mt-4 py-28">
        <ReactPaginate
          previousLabel={
            <button className={`w-8 h-8 flex justify-center items-center rounded-full border ${currentPage === 0 ? "bg-gray-300 border-gray-300" : "bg-transparent border border-black"}`} disabled={currentPage === 0}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          }
          nextLabel={
            <button className={`w-8 h-8 flex justify-center items-center rounded-full border ${currentPage === pageCount - 1 ? "bg-gray-300 border-gray-300" : "bg-transparent border border-black"}`} disabled={currentPage === pageCount - 1}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          }
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex gap-2 text-black"}
          activeClassName={"bg-[#A46C07] text-white rounded-full"}
          pageLinkClassName={"w-8 h-8 flex justify-center items-center rounded-full border bg-transparent border-black hover:bg-gray-200"}
          breakClassName={"w-8 h-8 flex justify-center items-center border rounded-full bg-transparent border-black"}
        />
      </section>
    </>
  );
};

export default GemstoneLibrary;
