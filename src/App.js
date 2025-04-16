import React, { useState } from 'react';
import banner from './assets/banner.jpg';
import banner_mob from './assets/banner_mob.jpg';
import logo from './assets/logo.png';
import sidebanner from './assets/about.jpg'
import video from  './assets/video.mp4'
import premium from './assets/one_two.jpeg'
import moden from './assets/five_5.jpg'
import world from './assets/susix.jpg'
import nine from './assets/nine.jpg'
import heart from './assets/eight.jpeg'
import plan1 from './assets/suone.jpg'
import plan2 from './assets/sutwo.jpg'
import plan3 from './assets/suthree.jpg'
import plan4 from './assets/sufour.jpg'
import am2 from './assets/one_three.jpeg'
import am3 from './assets/susix.jpg'
import am4 from './assets/am4.jpg'
import am5 from './assets/am5.jpg'
import am6 from './assets/am6.jpg'



function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const floorPlans = [
    { image: plan1, title: "Master Plan", description: "Overall layout of Lakshmi Nilayam" },
    { image: plan2, title: "2 BHK - 1430 Sft", description: "Compact and efficiently designed" },
    { image: plan3, title: "2 BHK - 1560 Sft", description: "Spacious layout with balcony" },
    { image: plan4, title: "3 BHK - 1790 Sft", description: "Premium family apartment" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === floorPlans.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? floorPlans.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Create form data to send
    const formElement = e.target;
    const formDataToSend = new FormData(formElement);
    
    try {
      // Send data using FormSubmit service
      const response = await fetch('https://formsubmit.co/lakshminilayam776@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        console.log('Form submission successful');
        // Store form data in sessionStorage for the thank you page
        sessionStorage.setItem('enquiryData', JSON.stringify(formData));
        
        // Redirect to thank you page on successful submission
        window.location.href = '/thank-you.html';
        
        // Reset form (won't be visible due to redirect)
        setFormData({ name: '', phone: '', email: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    const email = "lakshminilayam776@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowCopyNotification(true);
        setTimeout(() => {
          setShowCopyNotification(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };

  // Add scroll to enquiry form function
  const scrollToEnquireForm = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header Section */}
      <header className="flex justify-between items-center py-5 px-[5%] bg-white shadow-md sticky top-0 z-50">
        <div className="logo-container">
          <img src={logo} alt="Lakshmi Nilayam Logo" className="h-10" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex list-none">
            <li className="ml-8"><a href="#home" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Home</a></li>
            <li className="ml-8"><a href="#features" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Features</a></li>
            <li className="ml-8"><a href="#location" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Location</a></li>
            <li className="ml-8"><a href="#floor-plans" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Floor Plans</a></li>
            <li className="ml-8"><a href="#amenities" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Amenities</a></li>
            <li className="ml-8"><a href="#contact" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-[#EC6786]">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Banner Section */}
      <section id="home" className="bg-[#FBE3DC]">
        <div className="w-full">
          <img src={window.innerWidth < 768 ? banner_mob : banner} alt="Lakshmi Nilayam Apartments" className="w-screen shadow-md object-cover" />
        </div>
        
        {/* content section - side by side */}
        <div className="flex flex-col md:flex-row items-center justify-between px-[5%] py-16 gap-8">
          {/* Content side */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#EC6786] mb-4">Lakshmi Nilayam – Premium Living, Peacefully Designed</h1>
            <p className="mb-6 text-gray-700">Step into a world of comfort and convenience at Lakshmi Nilayam. These thoughtfully crafted 2 & 3 BHK Gated Community apartments in Guntur offer a serene, gated community lifestyle where modern design meets peaceful surroundings.</p>
            <ul className="list-none my-5 text-left">
              <li className="mb-3"><strong className="text-[#F08A9E]">Total Land Area:</strong> 1.6 Acres of scenic landscapes and open spaces</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Towers:</strong> 2 stunning high-rise towers offering panoramic views</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Floors:</strong> Ground + 5 levels with a modern architectural design</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Total Apartments:</strong> 100 spacious homes</li>
              <li className="mb-3"><strong className="text-[#F08A9E]">Apartment Sizes:</strong> Ranging from 1430 Sft to 1790 Sft</li>
            </ul>
            <a href="https://drive.google.com/file/d/114mE3lUhqYCOoucijP97lYbPm1B0hRNQ/view" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 py-3 px-6 bg-[#EC6786] text-white border-none rounded font-bold cursor-pointer transition-colors hover:bg-[#F08A9E]">Get Brochure</button>
            </a>
          </div>
          
          {/* Image side */}
          <div className="md:w-1/2">
            <img src={sidebanner} alt="Lakshmi Nilayam Interior" className="w-full rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="text-center bg-white">
        <div className="">
          <video src={video} controls className="w-full" />
          {/* Replace with actual video embed */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="flex justify-between gap-5 bg-[#FBE3DC] text-center py-16 px-[5%] flex-wrap md:flex-nowrap">
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <img src={premium} alt="Premium Location" className="w-full h-32 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">Premium Location</h3>
          <p className="text-gray-700">Lakshmi Nilayam is strategically located in Guntur, providing easy access to major roads, educational institutions, hospitals, shopping centers, and entertainment hubs.</p>
        </div>
        
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <img src={moden} alt="Modern Design" className="w-full h-32 mb-4" />
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">Modern Design</h3>
          <p className="text-gray-700">Lakshmi Nilayam is more than just a place to live—it's a place to thrive. Stylish interiors and quality brands not only make your home aesthetic, but also comfort.</p>
        </div>
        
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <img src={world} alt="World-Class Amenities" className="w-full h-32 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">World-Class Amenities</h3>
          <p className="text-gray-700">Indulge in beautifully landscaped gardens, a state-of-the-art clubhouse, and secure play areas, all designed to elevate your living experience.</p>
        </div>
        
        <div className="flex-1 p-5 bg-white rounded-lg shadow-md min-w-[100%] md:min-w-0 mb-5 md:mb-0">
          <img src={nine} alt="Reimagined High Rise Living" className="w-full h-32 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3 text-[#EC6786]">Reimagined High Rise Living</h3>
          <p className="text-gray-700">Step into spacious 2 & 3 BHK flats (1430-1790 sq. ft.) with modern interiors, abundant natural light, and premium modular designs, offering a perfect blend of luxury and comfort.</p>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="bg-white py-16 px-[5%]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image side - appears first on mobile, second on desktop */}
          <div className="md:w-1/2 md:order-2">
            <img src={heart} alt="Lakshmi Nilayam Location" className="w-full rounded-lg shadow-md" />
          </div>
          
          {/* Content side */}
          <div className="md:w-1/2 md:order-1 text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-2">At the Heart of Guntur</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-8">In the midst of Serenity, Close to Pulse of Amravati</h3>
            
            <p className="mb-5 text-gray-700">Guntur, a vibrant city in Andhra Pradesh, is gaining attention as a prime real estate destination. The city's unique blend of tradition and modernity creates an appealing environment for both residents and investors. The demand for residential and commercial properties is on the rise, making Guntur an attractive option for investment.</p>
            
            <p className="mb-8 text-gray-700">We Madhu infra's Presenting Lakshmi Nilayam, a high-rise gated community 2 & 3 Bhk apartments in Guntur that offers premium luxury living, With more than 100 luxury 2 & 3 Bhk flats, developed across 1.6 acres. Enjoy access to a state-of-the-art clubhouse for relaxation and socializing. Conveniently located with easy access to the capital of Andhra Pradesh - Amravati in just 45 minutes drive, our community offers the perfect blend of comfort and connectivity.</p>
            
            <button 
              onClick={scrollToEnquireForm} 
              className="py-3 px-6 bg-[#EC6786] text-white border-none rounded font-bold cursor-pointer transition-colors hover:bg-[#F08A9E]"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* Comfort and Connectivity Section */}
      <section className="flex flex-col lg:flex-row gap-10 items-center bg-[#FBE3DC] py-16 px-[5%]">
        <div className="flex-[1.2]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-4">Harmony of Comfort and Connectivity</h2>
          <p className="mb-8 text-gray-700">Step into a community where daily convenience and green landscapes coexist in perfect balance.</p>
          
          <div className="flex flex-wrap gap-5 mt-8">
            <div className="text-center basis-[calc(33.33%-20px)] md:basis-[calc(20%-20px)]">
              <img src="https://via.placeholder.com/80" alt="Schools" className="w-15 h-15 mx-auto mb-3" />
              <h4 className="font-medium text-[#EC6786]">Schools</h4>
            </div>
            <div className="text-center basis-[calc(33.33%-20px)] md:basis-[calc(20%-20px)]">
              <img src="https://via.placeholder.com/80" alt="Colleges" className="w-15 h-15 mx-auto mb-3" />
              <h4 className="font-medium text-[#EC6786]">Colleges</h4>
            </div>
            <div className="text-center basis-[calc(33.33%-20px)] md:basis-[calc(20%-20px)]">
              <img src="https://via.placeholder.com/80" alt="Hospitals" className="w-15 h-15 mx-auto mb-3" />
              <h4 className="font-medium text-[#EC6786]">Hospitals</h4>
            </div>
            <div className="text-center basis-[calc(33.33%-20px)] md:basis-[calc(20%-20px)]">
              <img src="https://via.placeholder.com/80" alt="Shopping Malls" className="w-15 h-15 mx-auto mb-3" />
              <h4 className="font-medium text-[#EC6786]">Shopping Malls</h4>
            </div>
            <div className="text-center basis-[calc(33.33%-20px)] md:basis-[calc(20%-20px)]">
              <img src="https://via.placeholder.com/80" alt="Major Landmarks" className="w-15 h-15 mx-auto mb-3" />
              <h4 className="font-medium text-[#EC6786]">Major Landmarks</h4>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <img src="https://via.placeholder.com/500x400" alt="Comfortable Living" className="w-full rounded-lg shadow-md" />
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floor-plans" className="text-center bg-white py-16 ">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-8">Master Plan and Floor Plan</h2>
        
        <div className="">
          {/* Slider container */}
          <div className="relative">
            {/* Main image container */}
            <div className="overflow-hidden rounded-lg">
              <div className="relative h-[70vh] max-h-[700px]">
                {floorPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform ${
                      index === currentSlide ? "opacity-100 translate-x-0" : 
                      index < currentSlide ? "opacity-0 -translate-x-full" : 
                      "opacity-0 translate-x-full"
                    }`}
                  >
                    <img 
                      src={plan.image} 
                      alt={plan.title} 
                      className="w-full h-full object-contain bg-white" 
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#EC6786] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
              onClick={prevSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC6786] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
              onClick={nextSlide}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Caption */}
          {/* <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-[#EC6786] text-xl">{floorPlans[currentSlide].title}</h3>
            <p className="text-gray-700">{floorPlans[currentSlide].description}</p>
          </div>
           */}
          {/* Thumbnail navigation */}
          <div className="flex gap-3 justify-center mb-4">
            {floorPlans.map((plan, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-[#EC6786] scale-125" : "bg-[#F5B5C2]"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Button controls */}
          {/* <div className="flex justify-center gap-4 mt-5 flex-wrap">
            <button 
              className={`py-2.5 px-5 border-none rounded cursor-pointer transition-all ${
                currentSlide === 1 ? "bg-[#EC6786] text-white" : "bg-[#F5B5C2] text-gray-800"
              }`}
              onClick={() => goToSlide(1)}
            >
              2 BHK - 1430 Sft
            </button>
            <button 
              className={`py-2.5 px-5 border-none rounded cursor-pointer transition-all ${
                currentSlide === 2 ? "bg-[#EC6786] text-white" : "bg-[#F5B5C2] text-gray-800"
              }`}
              onClick={() => goToSlide(2)}
            >
              2 BHK - 1560 Sft
            </button>
            <button 
              className={`py-2.5 px-5 border-none rounded cursor-pointer transition-all ${
                currentSlide === 3 ? "bg-[#EC6786] text-white" : "bg-[#F5B5C2] text-gray-800"
              }`}
              onClick={() => goToSlide(3)}
            >
              3 BHK - 1790 Sft
            </button>
          </div> */}
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="text-center bg-[#FBE3DC] py-16 px-[5%]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-8">World Class Amenities</h2>
        <div className="max-w-6xl mx-auto">
          {/* Grid layout for amenities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am6} alt="Swimming Pool" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Swimming Pool</h3>
                <p className="text-gray-600 text-sm">Enjoy a refreshing swim in our well-maintained pool</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am5} alt="Fitness Center" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Fitness Center</h3>
                <p className="text-gray-600 text-sm">State-of-the-art equipment for your workout routine</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am4} alt="Children's Play Area" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Children's Play Area</h3>
                <p className="text-gray-600 text-sm">Safe and fun environment for your kids</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am2} alt="Landscaped Gardens" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Landscaped Gardens</h3>
                <p className="text-gray-600 text-sm">Beautiful green spaces to relax and unwind</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={am3} alt="Clubhouse" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#EC6786]">Clubhouse</h3>
                <p className="text-gray-600 text-sm">Modern clubhouse for community gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquire Form Section (previously Contact Form Section) */}
      <section id="contact" className="text-center bg-white py-16 px-[5%]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#EC6786] mb-8">Enquire Now</h2>
        <form 
          className="max-w-lg mx-auto text-left" 
          onSubmit={handleSubmit}
          action="https://formsubmit.co/lakshminilayam776@gmail.com" 
          method="POST"
        >
          {/* FormSubmit configuration */}
          <input type="hidden" name="_subject" value="New enquiry from Lakshmi Nilayam website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={window.location.origin + "/thank-you.html"} />
          
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 font-bold">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
              className="w-full p-3 border border-gray-300 rounded text-base"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="phone" className="block mb-2 font-bold">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
              className="w-full p-3 border border-gray-300 rounded text-base"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-bold">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
              className="w-full p-3 border border-gray-300 rounded text-base"
            />
          </div>
          
          {/* Error message display */}
          {submitError && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded border border-red-200">
              {submitError}
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full py-3 bg-[#EC6786] text-white border-none rounded text-base font-bold cursor-pointer transition-colors hover:bg-[#F08A9E] disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Enquire Now'}
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#EC6786]/50 text-white py-16 px-[5%] pt-16 pb-5">
        <div className="flex flex-col lg:flex-row justify-between mb-10 gap-8">
          <div className="flex-1">
            <img src={logo} alt="Lakshmi Nilayam Logo" className="h-10" />
            <p className="mt-3 mb-2">Premium Living, Peacefully Designed</p>
            <p className="italic text-white/90 mt-4">
              "Where dreams come to life, and every day feels like a celebration."
            </p>
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-medium mb-4">Contact Information</h4>
            <div className="mb-4">
              <p className="font-medium mb-1">Location:</p>
              <p className="mb-1">Your Dream home Awaits at</p>
              <p className="font-bold mb-1">Lakshmi Nilayam</p>
              <p className="mb-2">D.No 272 & 273, Logos Public School Lane,</p>
              <p className="mb-2">Syamalanagar Extension, Guntur – 522006</p>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-1">Call Now:</p>
              <p className="mb-1">
                <a href="tel:+919440996805" className="text-white hover:text-gray-200 transition-colors">
                  Phone: +91 94409 96805
                </a>
              </p>
            </div>
            <div className="relative mb-1">
              <p className="font-medium mb-1">Email:</p>
              <button 
                onClick={copyEmailToClipboard} 
                className="text-white hover:text-gray-200 transition-colors cursor-pointer bg-transparent border-none p-0 font-normal text-left"
              >
                info@lakshminilaym.com
              </button>
              {showCopyNotification && (
                <div className="absolute -right-20 -top-1 bg-white text-[#EC6786] text-xs py-1 px-2 rounded shadow-md">
                  Copied!
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="list-none">
              <li className="mb-2.5"><a href="#home" className="text-white no-underline transition-colors hover:text-gray-300">Home</a></li>
              <li className="mb-2.5"><a href="#features" className="text-white no-underline transition-colors hover:text-gray-300">Features</a></li>
              <li className="mb-2.5"><a href="#location" className="text-white no-underline transition-colors hover:text-gray-300">Location</a></li>
              <li className="mb-2.5"><a href="#floor-plans" className="text-white no-underline transition-colors hover:text-gray-300">Floor Plans</a></li>
              <li className="mb-2.5"><a href="#amenities" className="text-white no-underline transition-colors hover:text-gray-300">Amenities</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-5 border-t border-white border-opacity-20">
          <p>&copy; 2023 Lakshmi Nilayam. All Rights Reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919440996805?text=I'm%20interested%20in%20Lakshmi%20Nilayam%20apartments" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 animate-bounce"
      >
        <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512" 
            className="w-8 h-8 text-white"
            fill="currentColor"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}

export default App;
