import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStoneById } from '../services/stoneAPI.js'; // Make sure to create this function
import GemstoneLibrary from '../Components/GemstoneLibrary.jsx';

function StoneDetails() {
  const { id } = useParams(); // Get the stone ID from the URL
  const [stone, setStone] = useState(null);

  useEffect(() => {
    fetchStoneById(id)
      .then((data) => {
        setStone(data);
      })
      .catch((err) => {
        console.error('Error fetching stone details:', err);
      });
  }, [id]);

  if (!stone) {
    return <p>Loading...</p>; // Show loading state
  }

  return (
   <>
        <section className="flex flex-col justify-center items-center px-4 md:px-6 xl:flex-row xl:items-start py-28 lg:px-44 gap-28 text-black">
          <div className="max-w-[350px] h-full border border-black rounded-[34px]">
            <img
              src={stone.imageUrl}
              alt={stone.name}
              className="w-full h-auto rounded-[34px] shadow-lg object-cover"
            />
          </div>
    
          <div className="flex flex-col text-left font-nunito gap-14">
            <div>
              <h1 className="text-5xl font-bold leading-9 pb-6">{stone.name}</h1>
              <p className="text-base font-normal leading-6">{stone.description}</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-9 pb-6">
                Unlock the potential of {stone.name}
              </h1>
              {Array.isArray(stone.healingPotential) ? (
                stone.healingPotential.map((potential, index) => (
                  <p
                    key={index}
                    className="text-base font-normal leading-6 mb-4"
                  >
                    {/* Add margin-bottom for spacing */}
                    {potential}
                  </p>
                ))
              ) : (
                <p className="text-base font-normal leading-6">
                  {stone.healingPotential}
                </p>
              )}
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-9 pb-6">
                How to use {stone.name} in Your Life
              </h1>
              {Array.isArray(stone.howToUse) ? (
                <ul className="l</h1>ist-disc pl-5">
                  {/* Use unordered list with disc bullets */}
                  {stone.howToUse.map((howTo, index) => (
                    <li key={index} className="text-base font-normal leading-6 mb-4">
                      {howTo}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base font-normal leading-6">
                  {stone.howToUse}
                </p>
              )}
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-9 pb-6">
                Embrace Balance and Protection
              </h1>
              {Array.isArray(stone.otherInfo) ? (
                stone.otherInfo.map((info, index) => (
                  <p
                    key={index}
                    className="text-base font-normal leading-6 mb-4"
                  >
                    {/* Add margin-bottom for spacing */}
                    {info}
                  </p>
                ))
              ) : (
                <p className="text-base font-normal leading-6">
                  {stone.otherInfo}
                </p>
              )}
            </div>
          </div>
        </section>
    
        <GemstoneLibrary backgroundClass='bg-[#F8F7F4]' />
   </>
  );
}

export default StoneDetails;
