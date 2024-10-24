function SearchBar({
    searchText,
    setSearchText,
    selectedCrystalSystem,
    setSelectedCrystalSystem,
    selectedZodiacSign,
    setSelectedZodiacSign,
    selectedChakraType,
    setSelectedChakraType,
    selectedElement,
    setSelectedElement,
}) {
    return (
        <section className="flex flex-col items-center w-full">

            <label className="input flex items-center gap-2 w-full max-w-[575px] h-[48px] bg-white border border-black rounded-full px-4">
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
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
                <input
                    type="text"
                    className="grow outline-none bg-transparent text-sm font-nunito"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} 
                />
            </label>


            <div className="mt-4 flex flex-row flex-wrap gap-3">
                <select
                    name="Crystal Systems"
                    value={selectedCrystalSystem}
                    onChange={(e) => setSelectedCrystalSystem(e.target.value)}
                    className="bg-transparent font-helvetica font-bold text-sm text-customBlack rounded-md"
                >
                    <option value="">All Crystal Systems</option>
                    <option value="trigonal">Trigonal</option>
                    <option value="monoclinic">Monoclinic</option>
                    <option value="hexagonal">Hexagonal</option>
                    <option value="cubic">Cubic</option>
                    <option value="amorphous">Amorphous</option>
                    <option value="rhombic">Rhombic</option>
                    <option value="triclinic">Triclinic</option>
                    <option value="tetragonal">Tetragonal</option>
                </select>

                <select
                    name="Zodiac Signs"
                    value={selectedZodiacSign}
                    onChange={(e) => setSelectedZodiacSign(e.target.value)}
                    className="bg-transparent font-helvetica font-bold text-sm text-customBlack rounded-md"
                >
                    <option value="">All Zodiac Signs</option>
                    <option value="libra">Libra</option>
                    <option value="capricorn">Capricorn</option>
                    <option value="virgo">Virgo</option>
                    <option value="scorpio">Scorpio</option>
                    <option value="cancer">Cancer</option>
                    <option value="aquarius">Aquarius</option>
                    <option value="aries">Aries</option>
                    <option value="taurus">Taurus</option>
                    <option value="pisces">Pisces</option>
                    <option value="gemini">Gemini</option>
                    <option value="sagittarius">Sagittarius</option>
                    <option value="leo">Leo</option>
                </select>

                <select
                    name="Chakra Types"
                    value={selectedChakraType}
                    onChange={(e) => setSelectedChakraType(e.target.value)}
                    className="bg-transparent font-helvetica font-bold max-w-[135px] text-sm text-customBlack rounded-md"
                >
                    <option value="">All Chakra Types</option>
                    <option value="root">Root Chakra</option>
                    <option value="heart">Heart Chakra</option>
                    <option value="solar-plexus">Solar Plexus Chakra</option>
                    <option value="third-eye">Third Eye Chakra</option>
                    <option value="crown">Crown Chakra</option>
                    <option value="sacral">Sacral Chakra</option>
                    <option value="throat">Throat Chakra</option>
                    <option value="all-chakras">All Chakras</option>
                </select>

                <select
                    name="Elements"
                    value={selectedElement}
                    onChange={(e) => setSelectedElement(e.target.value)}
                    className="bg-transparent font-helvetica font-bold text-sm text-customBlack rounded-md"
                >
                    <option value="">All Elements</option>
                    <option value="water">Water</option>
                    <option value="air">Air</option>
                    <option value="earth">Earth</option>
                    <option value="fire">Fire</option>
                </select>
            </div>
        </section>
    );
}

export default SearchBar;
