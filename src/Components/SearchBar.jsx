import { useState, useEffect } from "react";

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
  const [showSecondSet, setShowSecondSet] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  // Update isMobile based on screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

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
          placeholder="Suche"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>

      {/* Conditional Rendering for Select Filters on Mobile */}
      <div className="mt-4 flex flex-row flex-wrap gap-3 items-center">
        {isMobile ? (
          showSecondSet ? (
            // Second Set of Selects
            <>
              {/* Left Arrow Button to Toggle to First Set */}
              <button
                onClick={() => setShowSecondSet(false)}
                className="w-8 h-8 flex justify-center items-center rounded-full border border-black text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <select
                name="Chakra Types"
                value={selectedChakraType}
                onChange={(e) => setSelectedChakraType(e.target.value)}
                className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
              >
                <option value="">Alle Chakra-Typen</option>
                <option value="root">Wurzelchakra</option>
                <option value="heart">Herzchakra</option>
                <option value="solar-plexus">Solarplexuschakra</option>
                <option value="third-eye">Stirnchakra</option>
                <option value="crown">Kronenchakra</option>
                <option value="sacral">Sakralchakra</option>
                <option value="throat">Halschakra</option>
                <option value="all-chakras">Alle Chakren</option>
              </select>

              <select
                name="Elements"
                value={selectedElement}
                onChange={(e) => setSelectedElement(e.target.value)}
                className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
              >
                <option value="">Alle Elemente</option>
                <option value="water">Wasser</option>
                <option value="air">Luft</option>
                <option value="earth">Erde</option>
                <option value="fire">Feuer</option>
              </select>
            </>
          ) : (
            // First Set of Selects
            <>
              <select
                name="Crystal Systems"
                value={selectedCrystalSystem}
                onChange={(e) => setSelectedCrystalSystem(e.target.value)}
                className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
              >
                <option value="">Alle Kristallsysteme</option>
                <option value="trigonal">Trigonal</option>
                <option value="monoclinic">Monoklin</option>
                <option value="hexagonal">Hexagonal</option>
                <option value="cubic">Kubisch</option>
                <option value="amorphous">Amorph</option>
                <option value="rhombic">Rhombisch</option>
                <option value="triclinic">Triklin</option>
                <option value="tetragonal">Tetragonal</option>
              </select>

              <select
                name="Zodiac Signs"
                value={selectedZodiacSign}
                onChange={(e) => setSelectedZodiacSign(e.target.value)}
                className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
              >
                <option value="">Alle Sternzeichen</option>
                <option value="libra">Waage</option>
                <option value="capricorn">Steinbock</option>
                <option value="virgo">Jungfrau</option>
                <option value="scorpio">Skorpion</option>
                <option value="cancer">Krebs</option>
                <option value="aquarius">Wassermann</option>
                <option value="aries">Widder</option>
                <option value="taurus">Stier</option>
                <option value="pisces">Fische</option>
                <option value="gemini">Zwilling</option>
                <option value="sagittarius">Schütze</option>
                <option value="leo">Löwe</option>
              </select>

              {/* Right Arrow Button to Toggle to Second Set */}
              <button
                onClick={() => setShowSecondSet(true)}
                className="w-8 h-8 flex justify-center items-center rounded-full border border-black text-bl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </>
          )
        ) : (
          // All Selects Displayed on Larger Screens
          <>
        <select
          name="Crystal Systems"
          value={selectedCrystalSystem}
          onChange={(e) => setSelectedCrystalSystem(e.target.value)}
          className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
        >
          <option value="">Alle Kristallsysteme</option>
          <option value="trigonal">Trigonal</option>
          <option value="monoclinic">Monoklin</option>
          <option value="hexagonal">Hexagonal</option>
          <option value="cubic">Kubisch</option>
          <option value="amorphous">Amorph</option>
          <option value="rhombic">Rhombisch</option>
          <option value="triclinic">Triklin</option>
          <option value="tetragonal">Tetragonal</option>
        </select>

        <select
          name="Zodiac Signs"
          value={selectedZodiacSign}
          onChange={(e) => setSelectedZodiacSign(e.target.value)}
          className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
        >
          <option value="">Alle Sternzeichen</option>
          <option value="libra">Waage</option>
          <option value="capricorn">Steinbock</option>
          <option value="virgo">Jungfrau</option>
          <option value="scorpio">Skorpion</option>
          <option value="cancer">Krebs</option>
          <option value="aquarius">Wassermann</option>
          <option value="aries">Widder</option>
          <option value="taurus">Stier</option>
          <option value="pisces">Fische</option>
          <option value="gemini">Zwilling</option>
          <option value="sagittarius">Schütze</option>
          <option value="leo">Löwe</option>
        </select>

        <select
          name="Chakra Types"
          value={selectedChakraType}
          onChange={(e) => setSelectedChakraType(e.target.value)}
          className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
        >
          <option value="">Alle Chakra-Typen</option>
          <option value="root">Wurzelchakra</option>
          <option value="heart">Herzchakra</option>
          <option value="solar-plexus">Solarplexuschakra</option>
          <option value="third-eye">Stirnchakra</option>
          <option value="crown">Kronenchakra</option>
          <option value="sacral">Sakralchakra</option>
          <option value="throat">Halschakra</option>
          <option value="all-chakras">Alle Chakren</option>
        </select>

        <select
          name="Elements"
          value={selectedElement}
          onChange={(e) => setSelectedElement(e.target.value)}
          className="bg-transparent nunito font-bold max-w-full text-sm text-customBlack rounded-md"
        >
          <option value="">Alle Elemente</option>
          <option value="water">Wasser</option>
          <option value="air">Luft</option>
          <option value="earth">Erde</option>
          <option value="fire">Feuer</option>
        </select>
          </>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
