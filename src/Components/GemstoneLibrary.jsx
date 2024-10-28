import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Cards from './Cards';
import Pagination from './Pagination';
import { fetchStones } from '../services/stoneAPI.js'; // Adjust the import path based on your structure

const GemstoneLibrary = ({ backgroundClass = 'bg-white', title = "Explore the amazing world of gemstones" }) => {
    const [stones, setStones] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [selectedCrystalSystem, setSelectedCrystalSystem] = useState("");
    const [selectedZodiacSign, setSelectedZodiacSign] = useState("");
    const [selectedChakraType, setSelectedChakraType] = useState("");
    const [selectedElement, setSelectedElement] = useState("");
    const cardsPerPage = 12;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchStones();
                setStones(res);
            } catch (err) {
                console.error('Error fetching stones:', err);
            }
        };
        fetchData();
    }, []);

    // Filter stones based on search text and selected filters
    const filteredStones = stones.filter(stone => {
        const matchesSearch = stone.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesCrystalSystem = selectedCrystalSystem ? stone.crystalSystem.toLowerCase() === selectedCrystalSystem.toLowerCase() : true;
        const matchesZodiacSign = selectedZodiacSign ? stone.starSign.toLowerCase() === selectedZodiacSign.toLowerCase() : true;
        const matchesChakraType = selectedChakraType ? stone.chakra.toLowerCase() === selectedChakraType.toLowerCase() : true;
        const matchesElement = selectedElement ? stone.element.toLowerCase() === selectedElement.toLowerCase() : true;

        return matchesSearch && matchesCrystalSystem && matchesZodiacSign && matchesChakraType && matchesElement;
    });

    const indexOfLastStone = currentPage * cardsPerPage;
    const indexOfFirstStone = indexOfLastStone - cardsPerPage;
    const currentStones = filteredStones.slice(indexOfFirstStone, indexOfLastStone);
    const totalPages = Math.ceil(filteredStones.length / cardsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
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

            <section className="grid justify-items-center items-center grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-14">
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
                    <p>No stones found.</p>
                )}
            </section>

            <section className="flex justify-center items-center mt-4 py-28">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </section>
        </>
    );
};

export default GemstoneLibrary;
