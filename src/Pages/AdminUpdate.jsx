import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchStoneById, deleteStone } from '../services/stoneAPI.js';
import Cards from '../Components/Cards.jsx';
import Button from '../Components/Button.jsx';
import DeleteModal from '../Components/Modals/DeleteModal.jsx';
import UpdateCardModal from '../Components/Modals/UpdateCardModal.jsx';
import UpdateDetailsModal from '../Components/Modals/UpdateDetailsModal.jsx';
import { uploadStoneImage } from '../services/stoneAPI.js';

function AdminUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stone, setStone] = useState(null);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [updateCardModalIsOpen, setUpdateCardModalIsOpen] = useState(false);
  const [updateDetailsModalIsOpen, setUpdateDetailsModalIsOpen] = useState(false);
  const [isInputVisible, setInputVisible] = useState(false); 


  useEffect(() => {
    fetchStoneById(id)
      .then((data) => setStone(data))
      .catch((err) => console.error('Error fetching stone details:', err));
  }, [id]);

  if (!stone) return <p>Loading...</p>;

  const handleDelete = () => {
    deleteStone(id)
      .then(() => navigate('/admin'))
      .catch((err) => console.error('Error deleting stone:', err));
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
        try {
            const uploadedImageData = await uploadStoneImage(id, file);
            if (uploadedImageData) {
              const updatedStoneData = await fetchStoneById(id);
              setStone(updatedStoneData);
            } else {
                console.error('Image upload failed.');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setInputVisible(false);
            event.target.value = null;
        }
    }
};

  const openDeleteModal = () => setDeleteModalIsOpen(true);
  const closeDeleteModal = () => setDeleteModalIsOpen(false);

  const openUpdateCardModal = () => setUpdateCardModalIsOpen(true);
  const closeUpdateCardModal = () => setUpdateCardModalIsOpen(false);

  const openUpdateDetailsModal = () => setUpdateDetailsModalIsOpen(true); 
  const closeUpdateDetailsModal = () => setUpdateDetailsModalIsOpen(false);

  return (
    <>
      <section className='w-full h-auto p-4 flex flex-col md:flex-row justify-center items-center gap-12'>
        <div className="relative">
          <label className="absolute top-2 right-2 cursor-pointer z-10 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 bg-white rounded-full p-1"
              onClick={() => setInputVisible(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {isInputVisible && (
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            )}
          </label>
          <Cards {...stone} />
        </div>
        <div className='flex flex-col gap-6'>
          <Button 
            text="Update Card" 
            bgColor="bg-[#FFDA79]" 
            textColor="text-[#0D0C22]"
            onClick={openUpdateCardModal}
          />
          <Button 
            text="Update Details" 
            bgColor="bg-[#FFDA79]" 
            textColor="text-[#0D0C22]"
            onClick={openUpdateDetailsModal}
          />
          <Button 
            text="Delete Card" 
            bgColor="bg-red-500" 
            textColor="text-[#0D0C22]"
            hoverBgColor='hover:bg-red-700'
            onClick={openDeleteModal}
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center px-4 md:px-6 xl:flex-row xl:items-start py-28 lg:px-44 gap-28 text-black">
        <div className="max-w-[350px] h-full border border-black rounded-[34px] overflow-hidden sticky top-5 flex-1">
          <img
            src={stone.imageUrl}
            alt={stone.name}
            className="w-full h-auto rounded-[34px] shadow-lg object-cover"
          />
        </div>

        <div className="flex flex-col text-left font-nunito gap-14 flex-1">
          <h1 className="text-5xl font-bold leading-9 pb-6">{stone.name}</h1>
          <div
            className="custom-description"
            dangerouslySetInnerHTML={{ __html: stone.description }}
          />
        </div>
      </section>

      <DeleteModal
        isOpen={deleteModalIsOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
        message="Are you sure you want to delete this stone?"
      />

      <UpdateCardModal
        isOpen={updateCardModalIsOpen}
        onClose={closeUpdateCardModal}
        stone={stone} 
        onUpdate={(updatedData) => setStone(updatedData)}
      />

      <UpdateDetailsModal
        isOpen={updateDetailsModalIsOpen}
        onClose={closeUpdateDetailsModal}
        stone={stone}
        onUpdate={(updatedData) => setStone((prev) => ({ ...prev, ...updatedData }))}
      />
    </>
  );
}

export default AdminUpdate;
