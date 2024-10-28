import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStoneById } from '../services/stoneAPI.js';
import Cards from '../Components/Cards.jsx';
import Button from '../Components/Button.jsx';
import { deleteStone } from '../services/stoneAPI.js';
import { getToken } from '../../utils/tokenUtils.js';
import DeleteModal from '../Components/Modals/DeleteModal.jsx';

function AdminUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stone, setStone] = useState(null);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

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
    return <p>Loading...</p>;
  }

  const handleDelete = () => {
    console.log('Deleting stone:', id);
    deleteStone(id)
    .then((data) => {
        console.log('Stone deleted:', data);
        navigate('/admin');
    })
    .catch((err) => {
        console.error('Error deleting stone:', err);
    });
};

const openDeleteModal = () => setDeleteModalIsOpen(true);
const closeDeleteModal = () => setDeleteModalIsOpen(false);

  return (
  <>

    <section className='w- full h-auto m-5 flex justify-center items-center gap-12'>
        <Cards {...stone} />
     <div className='flex flex-col gap-6'>
            <Button                 
                text="Update Card" 
                bgColor="bg-[#FFDA79]" 
                textColor="text-[#0D0C22]" />
            <Button                 
                text="Update Details Page" 
                bgColor="bg-[#FFDA79]" 
                textColor="text-[#0D0C22]" />
            <Button                 
                text="Delete Card" 
                bgColor="bg-red-500" 
                textColor="text-[#0D0C22]"
                hoverBgColor='hover:bg-red-700'
                onClick={openDeleteModal} />
     </div>
    </section>


  {/* Details Page */}
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
            <ul className="list-disc pl-5">

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

    <DeleteModal
        isOpen={deleteModalIsOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete} // Call handleDelete on confirm
        message="Are you sure you want to delete this stone?"
      />

  </>
  );
}

export default AdminUpdate;
