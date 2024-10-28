import Button from "./Button";
import { useLocation, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import CreateModal from "./Modals/CreateModal";
import { createStone } from "../services/stoneAPI";

function AdminNavbar() {
    const location = useLocation();
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);


    
    const handleCreateNew = async (formData) => {
        const createdStone = await createStone(formData); // Await the result from createStone
    
        if (createdStone && createdStone._id) {
            setCreateModalIsOpen(false);
            navigate(`/admin/update/${createdStone._id}`); // Navigate to update page with the new ID
        } else {
            console.error('Failed to create stone');
        }
    };
    
    
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    
    const openCreateModal = () => setCreateModalIsOpen(true);
    const closeCreateModal = () => setCreateModalIsOpen(false);

    return ( 
        <>
        <section className='w-full h-20 flex justify-between items-center px-10'>
           <div className="flex justify-center items-center gap-6">
                <h1 className='font-nunito text-4xl font-bold text-customBlack'>Admin Panel</h1>
                    {location.pathname !== '/admin' && 
                        <Link to="/admin">
                            <Button
                            text="Back to Admin Library"
                            bgColor="bg-[#FFDA79]" 
                            textColor="text-[#0D0C22]" 
                            />
                        </Link>
                    }
           </div>

            <div className="flex justify-center items-center  gap-4">
              <Button
                text="Add new gemstone"
                bgColor="bg-[#FFDA79]" 
                textColor="text-[#0D0C22]" 
                onClick={openCreateModal}
              />
              <Button
                text="Logout"
                onClick={handleLogout}
              />
            </div>
        </section>

        <CreateModal
        isOpen={createModalIsOpen}
        onClose={closeCreateModal}
        onCreate={handleCreateNew}
      />
        </>
     );
}

export default AdminNavbar;