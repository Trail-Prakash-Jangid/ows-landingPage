import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainmodel1 from "../images/mainmodel1.jpg";
import mainmodel2 from "../images/mainmodel2.jpg";
import mainmodel3 from "../images/mainmodel3.jpg";
import customimage from "../images/customimage.jpg";
import product1 from "../images/shirt.jpg";
import product2 from "../images/hoodie.jpg";
import product3 from "../images/blazer.jpg";
import product4 from "../images/jeans.jpg";

const LandingPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const form = useRef();
    const sliderRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x3c85gg', 'template_cj7ux7x', form.current, '53txsFgzX0GJJzdAm')
            .then(() => alert('Message sent!'))
            .catch(() => alert('Error sending message.'));
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const navLinks = ["Home", "About", "Custom Design", "Products", "Contact"];

    return (
        <div className="bg-white text-gray-800">
            {/* Header */}
            <header className="flex items-center justify-between bg-stone-50 py-6 px-4 sm:px-6 md:px-10 shadow-sm relative">
                <h1 className="text-2xl font-bold">StyleHaus</h1>
                <nav className="hidden md:flex space-x-6 items-center">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-emerald-500 cursor-pointer">{link}</a>
                    ))}
                </nav>
                <button className='block md:hidden text-2xl text-gray-700 ml-4' onClick={() => setIsOpen(!isOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
                {isOpen && (
                    <div className='absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 lg:hidden z-50'>
                        <ul className='flex flex-col space-y-4'>
                            {navLinks.map((link) => (
                                <a key={link} href={`#${link.toLowerCase().replace(" ", "")}`} className="hover:text-emerald-500">{link}</a>
                            ))}
                        </ul>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <Slider ref={sliderRef} {...sliderSettings}>
                    {[mainmodel1, mainmodel2, mainmodel3].map((img, index) => (
                        <div key={index}>
                            <div
                                className="relative h-[90vh] lg:h-screen flex items-center justify-center md:justify-between bg-no-repeat bg-cover"
                                style={{ backgroundImage: `url(${img})`, backgroundPosition: "50% center" }}
                            >
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 flex flex-col justify-center md:flex-row md:items-center h-full">
                                    <div className="w-full md:w-1/2 text-left text-white">
                                        <p className="text-sm tracking-wider mb-2 uppercase">New Trend 2025</p>
                                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                            Wear Your <span className="text-emerald-300">Story</span>
                                        </h1>
                                        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-md">
                                            Explore timeless fashion or design your own look with our custom wears.
                                        </p>
                                        <button className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">
                                            Shop Now →
                                        </button>
                                    </div>
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* Products */}
            <section className="px-8 py-16 mt-5 bg-gray-50">
                <h3 className="text-2xl font-sans font-bold text-center">Our Top Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-6 max-w-10xl mx-auto">
                    {[{ img: product1, name: 'Shirt', price: '$49.99' }, { img: product2, name: 'Hoodie', price: '$59.99' }, { img: product3, name: 'Blazer', price: '$69.99' }, { img: product4, name: 'Jeans', price: '$79.99' }]
                        .map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
                                <img src={item.img} alt={item.name} className="w-full h-75 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-emerald-500 font-bold mt-2">{item.price}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* Reviews */}
            <section id="reviews" className="px-8 py-16 bg-gray-50">
                <h3 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[{ name: "Aarav M.", stars: 5, message: "Absolutely loved the quality and fit. Definitely ordering again!" },
                    { name: "Sneha K.", stars: 4, message: "Custom design process was smooth. Delivery was fast too." },
                    { name: "Rohit P.", stars: 5, message: "StyleHaus nailed my vision! Got so many compliments." }]
                        .map((review, i) => (
                            <div key={i} className="bg-white p-6 rounded shadow-md border border-gray-200">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-semibold mr-3">{review.name[0]}</div>
                                    <div>
                                        <h4 className="font-semibold">{review.name}</h4>
                                        <div className="text-yellow-400">{"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}</div>
                                    </div>
                                </div>
                                <p className="text-gray-600">{review.message}</p>
                            </div>
                        ))}
                </div>
            </section>

            {/* Custom Design */}
            <section id="custom" className="bg-[#e8f3f9] px-8 py-5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h3 className="text-4xl font-bold text-emerald-600 mb-4">Design Your Own Outfit</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Turn your imagination into wearable art. With StyleHaus, custom design is simple, personal, and professional.
                        </p>
                        <ul className="mb-6 space-y-3 text-gray-800">
                            <li>✅ Upload your design or idea</li>
                            <li>🎨 Choose fabric, color, and details</li>
                            <li>🧵 Our tailors craft it to perfection</li>
                            <li>📦 Delivered to your doorstep</li>
                        </ul>
                        <button className="px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition">
                            Start Designing
                        </button>
                    </div>
                    <div className="md:w-1/2 md:pl-12 flex justify-center">
                        <img src={customimage} alt="Custom Design" className="w-full h-auto max-w-full rounded-xl shadow-lg" />
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-gradient-to-r from-green-50 to-cyan-50 px-6 md:px-16 py-20 mt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-4xl font-extrabold text-emerald-600 mb-4 tracking-tight">About <span className="text-cyan-500">StyleHaus</span></h3>
                    <p className="text-lg text-gray-700 mb-6 font-medium">At <span className="text-emerald-500 font-semibold">StyleHaus</span>, fashion isn’t just clothing — it's a statement.</p>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed">Born from a passion for individuality and design, we help you create timeless fashion that speaks to who you are.</p>
                    <p className="text-base text-gray-600 leading-relaxed">With top-tier materials, ethical practices, and a commitment to creativity, <span className="text-cyan-500 font-semibold">StyleHaus</span> is where your story becomes your style.</p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="px-8 py-16">
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl">
                    <input type="text" name='name' placeholder="Name" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    <input type="tel" name='mobileno' placeholder="Mobile no." className="w-full border border-gray-300 px-4 py-2 rounded" />
                    <input type="email" name='email' placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    <textarea name='message' rows="4" placeholder="Message" className="w-full border border-gray-300 px-4 py-2 rounded" />
                    <button type="submit" className="px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600">Send Message</button>
                </form>
            </section>

            <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
                © 2025 StyleHaus. All rights reserved.
            </footer>
        </div>
    );
}

export default LandingPage