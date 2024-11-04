import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStoneById } from '../services/stoneAPI.js';
import GemstoneLibrary from '../Components/GemstoneLibrary.jsx';

function StoneDetails() {
  const { id } = useParams();
  const [stone, setStone] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    fetchStoneById(id)
      .then((data) => {
        setStone(data);
      })
      .catch((err) => {
        console.error('Error fetching stone details:', err);
      });
  }, [id]);

  if (!stone) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center px-4 md:px-6 xl:flex-row xl:items-start py-28 lg:px-44 gap-28 text-black">
        <div className="max-w-[350px] h-full border border-black rounded-[34px] overflow-hidden xl:sticky top-5">
          <img
            src={stone.imageUrl}
            alt={stone.name}
            className="w-full h-auto rounded-[34px] shadow-lg object-cover"
          />
        </div>

        <div className="flex flex-col text-left font-nunito">
          <h1 className="text-5xl font-bold leading-9 pb-6">{stone.name}</h1>
          <div
            className="custom-description"
            dangerouslySetInnerHTML={{ __html: stone.description }}
          />
        </div>
      </section>

      <GemstoneLibrary backgroundClass='bg-[#F8F7F4]' />
    </>
  );
}

export default StoneDetails;
