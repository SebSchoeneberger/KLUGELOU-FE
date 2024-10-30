import Button from "./Button";
import { useLocation, Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import CreateModal from "./Modals/CreateModal";
import { createStone } from "../services/stoneAPI";

function AdminNavbar() {
    const location = useLocation();
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleCreateNew = async (formData) => {
        const createdStone = await createStone(formData);

        if (createdStone && createdStone._id) {
            setCreateModalIsOpen(false);
            navigate(`/admin/update/${createdStone._id}`);
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

    const toggleDropdown = () => setMenuOpen((prev) => !prev);

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
        <section className="w-full h-20 flex justify-between items-center px-10">
            <div className="flex flex-1 justify-start items-center gap-6">
                <h1 className="font-nunito text-4xl font-bold text-customBlack">Admin Panel</h1>
                
                {location.pathname !== '/admin' && (
                    <Link to="/admin">
                        {/* Show button on screens larger than 1024px */}
                        <div className="hidden lg:block">
                            <Button
                                text="Back to Admin Library"
                                bgColor="bg-[#FFDA79]"
                                textColor="text-[#0D0C22]"
                            />
                        </div>
                        {/* Show SVG icon on screens 1024px or smaller */}
                        <div className="flex flex-row bg-[#FFDA79] text-customBlack justify-center items-center px-[6px] py-[8px] gap-[10px] border border-[#0D0C22] rounded-full lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3"
                                />
                            </svg>
                        </div>
                    </Link>
                )}
            </div>

            {/* Buttons for larger screens */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
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
                <Link to='/admin/profile' className="hover: flex flex-row bg-[#FFDA79] text-customBlack justify-center items-center px-[8px] py-[8px] gap-[10px] border border-[#0D0C22] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>
            </div>

            {/* Dropdown toggle for smaller screens */}
            <div className="lg:hidden flex justify-end flex-1">
                <button onClick={toggleDropdown}>
                    <div className="space-y-2">
                        <span className="block w-8 h-0.5 bg-black"></span>
                        <span className="block w-8 h-0.5 bg-black"></span>
                        <span className="block w-8 h-0.5 bg-black"></span>
                    </div>
                </button>
            </div>

            {/* Dropdown menu for smaller screens */}
            {menuOpen && (
                <div ref={dropdownRef} className="absolute top-16 right-4 bg-[#F8F7F4] p-4 rounded-lg shadow-lg z-10 lg:hidden">
                    <button onClick={openCreateModal} className="block w-full text-left font-helvetica font-bold text-sm text-[#6750A4] mb-4">
                        Add new gemstone
                    </button>
                    <Link to='/admin/profile' className="block w-full text-left font-helvetica font-bold text-sm text-[#6750A4] mb-4">
                      Profile
                  </Link>
                    <button onClick={handleLogout} className="block w-full text-left font-helvetica font-bold text-sm text-[#6750A4]">
                        Logout
                    </button>
                </div>
            )}
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
