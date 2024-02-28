import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 px-5 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4 hover:text-[#d19e66]">E-Shop</h3>
                    <p>
                        An ecommerce shop is an online platform where users can buy and sell products or services, facilitating transactions over the internet.</p>
                    <ul className='flex gap-3 text-[18px]'>
                        <li className='mt-2 hover:text-[#d19e66]'><a href="#"><FaFacebookF /></a></li>
                        <li className='mt-2 hover:text-[#d19e66]'> <a href="#"><FaInstagram /></a></li>
                        <li className='mt-2 hover:text-[#d19e66]'><a href="#"><FaTwitter /></a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4 hover:text-[#d19e66]">OUR SHOP</h3>
                    <ul>
                        <li className='mt-2 hover:text-[#d19e66]'>
                            <a href="">About Us</a>
                        </li>
                        <li className='mt-2 hover:text-[#d19e66]'>
                            <a href="">Contact Us</a>
                        </li>
                        <li className='mt-2 hover:text-[#d19e66] '>
                            <a href="">Read Our Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4 hover:text-[#d19e66]">COLLECTIONS</h3>
                    <ul>
                        <li className='mt-2 hover:text-[#d19e66]'>
                            <a href="">Men's Jackets</a>
                        </li>
                        <li className='mt-2 hover:text-[#d19e66]'>
                            <a href="">Women's clothes</a>
                        </li>
                        <li className='mt-2 hover:text-[#d19e66] '>
                            <a href="">Men's shirts</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3 className="text-xl font-semibold mb-4 hover:text-[#d19e66]  ">Contact Us</h3>
                    <ul className=''>
                        <li className=' flex gap-3 mt-3'>
                            <span className=' '><IoLocationOutline /></span>
                            <span className='text-sm '>Addresss: City of Rahim Yar Khan</span>
                        </li>
                        <li className=' flex gap-3 mt-3'>
                            <span className=''><IoIosMail /></span>
                            <span className='text-sm'>Email: chamza199@gmail.com</span>
                        </li>
                        <li className=' flex gap-3 mt-3'>
                            <span className=' '><FaPhone /></span>
                            <span className='text-sm'>Phone: +923006705674</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
