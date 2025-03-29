import React from 'react'
import { Facebook, Twitter, Linkedin } from "lucide-react";
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">YourBrand</h2>
                    <p className="text-sm text-gray-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition">
                        <Linkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer