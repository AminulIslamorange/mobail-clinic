import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="w-full bg-white">
            <div className="px-8 py-12 mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
                    <div className="col-span-3">
                        <a href="#_" className="text-xl font-black leading-none text-gray-900 select-none logo">RepairPlus</a>
                        <p className="my-4 text-xs leading-normal text-gray-500">
                            Beautifully hand-crafted components to help you build amazing pages.
                        </p>
                    </div>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Features</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Integrations</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Documentation</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">FAQs</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Pricing</Link>
                    </nav>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">About</p>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Our Story</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Company</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Privacy</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Blog</Link>
                    </nav>
                    <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Advertising</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Press</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Email</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Partners</Link>
                        <Link to="/" className="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Jobs</Link>
                    </nav>
                    <div className="col-span-3">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">SUBSCRIBE TO OUR NEWSLETTER</p>
                        <form action="#" className="mb-2">
                            <div className="relative flex items-center overflow-hidden border border-gray-200 rounded-lg">
                                <input className="w-full px-3 py-2 text-base leading-normal transition duration-150 ease-in-out bg-white appearance-none focus:outline-none" type="email" placeholder="Enter your email" />
                                <button className="px-3 py-2  text-sm font-medium text-center text-white no-underline bg-green-600 border-2 border-green-600" type="submit">Subscribe</button>
                            </div>
                        </form>
                        <p className="text-xs leading-normal text-gray-500">Get the latest updates and news about our service.</p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
                    <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright 2023 Tails. All Rights Reserved.</p>
                    <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
                        <a href="#_" className="text-sm text-gray-600 transition hover:text-primary">Terms</a>
                        <a href="#_" className="text-sm text-gray-600 transition hover:text-primary">Privacy</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;