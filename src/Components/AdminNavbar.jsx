import Button from "./Button";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
    const location = useLocation();
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log('Add new gemstone button clicked');
      };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return ( 
        <>
        <section className='w-full h-20 flex justify-between items-center px-10'>
           <div className="flex gap-6">
                <h1 className='font-nunito text-4xl font-bold text-customBlack'>Admin Panel</h1>
                    {location.pathname !== '/admin' && 
                        <Link to="/admin">
                            <Button
                            text="Back to Admin Library"
                            bgColor="bg-[#FFDA79]" 
                            textColor="text-[#0D0C22]" 
                            onClick={handleButtonClick}
                            />
                        </Link>
                    }
           </div>

            <div className="flex  gap-4">
              <Button
                text="Add new gemstone"
                bgColor="bg-[#FFDA79]" 
                textColor="text-[#0D0C22]" 
                onClick={handleButtonClick}
              />
              <Button
                text="Logout"
                onClick={handleLogout}
              />
            </div>
        </section>
        </>
     );
}

export default AdminNavbar;