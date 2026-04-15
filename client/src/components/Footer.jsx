import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    return (
        <footer className="bg-light text-black py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-16">

                <div className="lg:col-span-3 space-y-6">
                    <a href="/" className="block">
                        <img src={assets.logo} alt="Logo" />
                    </a>
                    <p className="text-sm md:text-base">We provide reliable and affordable car rental services tailored to your needs. Whether you're planning a trip, business travel, or daily commute, our wide range of vehicles ensures comfort, safety, and convenience every time you drive with us.</p>

                </div>

                <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
                    {/* Quick Links */}
                    <div>
                        <h3 className="font-medium text-sm mb-4 md:mb-6">Quick Links</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-black/90">
                            <li><a href="#" className="hover:text-blue-500">Home</a></li>
                            <li><a href="#" className="hover:text-blue-500">Browse Cars</a></li>
                            <li><a href="#" className="hover:text-blue-500">List Your Cars</a></li>
                            <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-medium text-sm mb-4 md:mb-6">Resources</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-black/90">
                            <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-500">Term of Services</a></li>
                            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-500">Insurance</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-medium text-sm mb-4 md:mb-6">Contact</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm text-black/90">
                            <li><a href="#" className="hover:text-blue-500">1234 Luxury Cars</a></li>
                            <li><a href="#" className="hover:text-blue-500">Buddhanagar, KTM, Nepal</a></li>
                            <li className="flex items-center gap-2">
                                <a href="#" className="hover:text-blue-500">rental@gmail.com</a>
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-800 border border-borderColor text-white">MailUs</span>
                            </li>
                            <li><a href="#" className="hover:text-blue-500">+977, 9823196848</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-6 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-black/90 text-xs sm:text-sm order-2 md:order-1">&copy; {new Date().getFullYear()} Chandan Kushwaha. All rights reserved.</p>
                <div className="flex gap-5 md:gap-6 order-1 md:order-2">
                    {/* Facebook */}
                    <a href="#" className="text-black">
                        <img src={assets.facebook_logo} alt="" />
                    </a>
                    {/* Twitter */}
                    <a href="#" className="text-black">
                        <img src={assets.twitter_logo} alt="" />
                    </a>
                    {/* Instagram */}
                    <a href="#" className="text-black">
                        <img src={assets.instagram_logo} alt="" />
                    </a>
                    {/* Gmail */}
                    <a href="#" className="text-black">
                        <img src={assets.gmail_logo} alt="" />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer
