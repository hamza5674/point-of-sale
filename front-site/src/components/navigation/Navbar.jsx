import React, { useState } from 'react';
// import logo from '../../images/Logo.png'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [ismenu, setIsmenu] = useState(false);
    const [ismenu1, setIsmenu1] = useState(false);
    const submit = () => {
        setIsmenu(!ismenu);
        // setIsOpen(!isOpen);
    }

    const submit1 = () => {
        setIsmenu1(!ismenu1);
        // setIsOpen(!isOpen);
    }

    return (
        <nav className="">
            <div className=" px-10">
                <div className="flex justify-between items-center py-4 ">
                    <div className='me-auto'>
                        <a href="#" className=" ">
                            {/* <img src={logo} alt="" className='h-12 ' /> */}
                            E-Shop
                            
                        </a>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className=" focus:outline-none">
                            {isOpen ? (
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.293 6.293L12 11.586 6.707 6.293 5.293 7.707 12 14.414l6.707-6.707-1.414-1.414z" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-auto mx-auto">
                        <div className="">
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8 active:border-b-2 active:border-[#d19e66] active:text-[#d19e66]">
                                Home
                            </a>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0  ">
                                <div className=''>

                                    <button
                                        id="dropdownDefaultButton"
                                        data-dropdown-toggle="dropdown"
                                        className="mr-8 text-center inline-flex items-center mt-4 lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66]  active:border-b-2 active:border-[#d19e66] active:text-[#d19e66]"
                                        type="button"
                                        onClick={submit}

                                    >
                                        Men
                                        <svg
                                            className="w-2.5 h-2.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    {
                                        ismenu && (<div
                                            id="dropdown"
                                            className="z-10 text-[#3f3f3f] absolute bg-white "

                                        >
                                            <ul
                                                className="py-2 text-[#3f3f3f]"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Casual Shirts
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Tee Shirts & Polos
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className=" block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Men Pants
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className=" block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Jackets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Jackets
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        )}
                                </div>
                            </a>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0  ">
                                <div className=''>

                                    <button
                                        id="dropdownDefaultButton1"
                                        data-dropdown-toggle="dropdown"
                                        className="mr-8 text-center inline-flex items-center mt-4 lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66]  active:border-b-2 active:border-[#d19e66] active:text-[#d19e66]"
                                        type="button"
                                        onClick={submit1}
                                    >
                                        Women
                                        <svg
                                            className="w-2.5 h-2.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 10 6"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="m1 1 4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                    {/* Dropdown menu */}
                                    {
                                        ismenu1 && (<div
                                            id="dropdown"
                                            className="z-10 text-[#3f3f3f] absolute bg-white "

                                        >
                                            <ul
                                                className="py-2 text-[#3f3f3f]"
                                                aria-labelledby="dropdownDefaultButton1"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Sweaters
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Scarfs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className=" block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Trousers & Pants
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className=" block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Jackets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                    >
                                                        Tops
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        )}
                                </div>
                            </a>



                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8 active:border-b-2 active:border-[#d19e66] active:text-[#d19e66]">
                                About
                            </a>
                            <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8 active:border-b-2 active:border-[#d19e66] active:text-[#d19e66]">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className='ms-auto'>
                        <ul className='flex  items-center gap-4'>
                        <li className='border-l-2 ps-3 text-lg text-[#d19e66]'>
                                <a href=""><FaUser /></a>
                                
                            </li>
                            <li className='border-l-2 ps-3 text-lg text-[#d19e66]'>                               
                                <a href="" ><FaShoppingCart /></a>                            
                            </li>
                            <li className='border-l-2 ps-3 text-lg text-[#d19e66]'>
                                <a href=""> <FaSearch /></a>
                           
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`${isOpen ? '' : 'hidden'} lg:hidden`}>
                    <div className="text-sm">
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8  active:text-[#d19e66]">
                            Home
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8  active:text-[#d19e66]">
                            <div className=''>

                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className=" text-center inline-flex items-center  "
                                    type="button"
                                    onClick={submit}

                                >
                                    Dilawer
                                    <svg
                                        className="w-2.5 h-2.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                {
                                    ismenu && (<div
                                        id="dropdown"
                                        className="z-10  absolute "

                                    >
                                        <ul
                                            className="py-2 text-xs text-[#3f3f3f] "
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] hover:text-[#d19e66]"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    )}
                            </div>
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8  active:text-[#d19e66]">
                            <div className=''>

                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className=" text-center inline-flex items-center  "
                                    type="button"
                                    onClick={submit1}

                                >
                                    Dilawer
                                    <svg
                                        className="w-2.5 h-2.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                {
                                    ismenu1 && (<div
                                        id="dropdown"
                                        className="z-10  absolute "

                                    >
                                        <ul
                                            className="py-2 text-xs text-[#3f3f3f] "
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] hover:text-[#d19e66]"
                                                >
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                >
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                >
                                                    Earnings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-2 py-2 text-[#3f3f3f] font-medium hover:text-[#d19e66]"
                                                >
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    )}
                            </div>
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8  active:text-[#d19e66]">
                            About
                        </a>
                        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-[#3f3f3f] font-semibold hover:text-[#d19e66] mr-8  active:text-[#d19e66]">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;