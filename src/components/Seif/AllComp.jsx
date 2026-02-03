import { useState } from "react";
import { FaPlay, FaArrowRight, FaMobileAlt, FaTabletAlt, FaTv, FaLaptop, FaGamepad, FaVrCardboard,} from "react-icons/fa";

import container from "../../assets/Container.png";
import containerOne from "../../assets/Container (1).png";
import containerTOw from "../../assets/Container (2).png";
import containerThree from "../../assets/Container (3).png";
import containerFour from "../../assets/Container (4).png";

const AllComp = () => {
  const movies = [
    { img: container, h: "Action" },
    { img: containerOne, h: "Adventure" },
    { img: containerTOw, h: "Comedy" },
    { img: containerThree, h: "Drama" },
    { img: containerFour, h: "Horror" },
  ];

  const faqs = [
    { id: 1, question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
    { id: 2, question: "How much does StreamVibe cost?", answer: "Pricing depends on your subscription plan." },
    { id: 3, question: "What content is available on StreamVibe?", answer: "You can watch movies, TV shows, and more." },
    { id: 4, question: "How can I watch StreamVibe?", answer: "You can watch it on mobile, web, and TV apps." },
    { id: 5, question: "How do I sign up for StreamVibe?", answer: "Visit our website and click on sign up." },
    { id: 6, question: "What is the StreamVibe free trial?", answer: "We offer a 7-day free trial for all new users." },
    { id: 7, question: "How do I contact StreamVibe customer support?", answer: "You can reach us through email or chat support." },
    { id: 8, question: "What are the StreamVibe payment methods?", answer: "We accept credit cards, PayPal, and more." },
  ];
  const [openId, setOpenId] = useState(1);
  const toggleFAQ = (id) => setOpenId(openId === id ? null : id);

  const devices = [
    { name: "Smartphones", description: "StreamVibe works great on Android & iOS smartphones.", icon: <FaMobileAlt size={32} className="text-red-500" /> },
    { name: "Tablet", description: "Optimized experience for iOS and Android tablets.", icon: <FaTabletAlt size={32} className="text-red-500" /> },
    { name: "Smart TV", description: "Watch StreamVibe on all major Smart TV brands.", icon: <FaTv size={32} className="text-red-500" /> },
    { name: "Laptops", description: "Stream directly on your Windows or Mac laptops.", icon: <FaLaptop size={32} className="text-red-500" /> },
    { name: "Gaming Consoles", description: "Available on Xbox and PlayStation consoles.", icon: <FaGamepad size={32} className="text-red-500" /> },
    { name: "VR Headsets", description: "Immersive viewing on VR headsets.", icon: <FaVrCardboard size={32} className="text-red-500" /> },
  ];

  const plans = [
    { name: "Basic Plan", description: "Enjoy an extensive library of movies and shows.", monthlyPrice: 9.99, yearlyPrice: 99.99 },
    { name: "Standard Plan", description: "Access to more content including new releases.", monthlyPrice: 12.99, yearlyPrice: 129.99 },
    { name: "Premium Plan", description: "All new releases + offline viewing.", monthlyPrice: 14.99, yearlyPrice: 149.99 },
  ];
  
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="text-white pt-[10%]"> 

      <section
  className="relative container mx-auto py-12 px-4 text-center 
             bg-[url('/src/assets/SubContainer.png')] bg-center bg-cover bg-no-repeat h-[50vh] flex items-center justify-center">
  <div className="max-w-2xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      The Best Streaming Experience
    </h1>
    <p className="text-gray-400 mb-6 text-sm sm:text-base">
      StreamVibe is the best streaming experience for watching your favorite
      movies and shows on demand, anytime, anywhere. Create your own watchlists
      and enjoy unlimited entertainment.
    </p>
    <button className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 mx-auto">
      <FaPlay /> Start Watching Now
    </button>
  </div>
      </section>

      <section className="container mx-auto py-16 px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Explore our wide variety of categories
            </h2>
            <p className="text-gray-400 mb-12 text-sm sm:text-base">
            Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 cursor-pointer ">
            {movies.map((movie, i) => (
              <div key={i}
                className="bg-[#333333] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform w-full">
                <img src={movie.img} alt={movie.h} className="w-full h-40 object-cover sm:h-48 md:h-56"/>
                
                <div className="p-4 flex justify-between items-center">
                <h6 className="text-sm sm:text-base font-medium">{movie.h}</h6>
                  <FaArrowRight className="text-gray-400" />
                </div>
              </div>
           ))}
        </div>
      </section>


      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 mb-6">
          Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions.
        </p>
        <button className="bg-red-600 px-4 py-2 rounded mb-6">Ask a Question</button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-red-800 p-5">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-800 px-3 py-1 rounded">
                    {faq.id.toString().padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold">{faq.question}</h3>
                </div>
                <span className="text-2xl">{openId === faq.id ? "-" : "+"}</span>
              </div>
              {openId === faq.id && (
                <p className="text-gray-400 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">We Provide you streaming experience across various devices.</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere, across all devices.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, i) => (
            <div key={i} className="bg-gradient-to-r from-neutral-950 to-red-950/10 p-6 rounded-2xl">
              <div className="mb-4">{device.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{device.name}</h3>
              <p className="text-gray-400 text-sm">{device.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Choose the plan that's right for you</h2>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences.
            </p>
          </div>
          <div className="inline-flex border border-neutral-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 text-sm font-medium ${
                billing === "monthly"
                  ? "bg-neutral-800 text-white"
                  : "text-gray-400 hover:bg-neutral-800/50"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 text-sm font-medium ${
                billing === "yearly"
                  ? "bg-neutral-800 text-white"
                  : "text-gray-400 hover:bg-neutral-800/50"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className="bg-neutral-800 p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <p className="text-2xl font-bold mb-6">
                  ${billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  <span className="text-sm text-gray-400">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="flex-1 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800">
                  Start Free Trial
                </button>
                <button className="flex-1 py-2 bg-red-600 rounded-lg hover:bg-red-700">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-16 px-6 max-w-7xl mx-auto">
        <div className="relative border-2 border-gray-800  bg-[url('/src/assets/pic1.png')] bg-center bg-cover bg-no-repeat h-[25vh] rounded-2xl overflow-hidden free-trial">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-10">
            <div>
              <h2 className="text-3xl font-bold">Start your free trial today!</h2>
              <p className="text-gray-400 mt-2 max-w-lg">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of StreamVibe.
              </p>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg">
              Start a Free Trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllComp;
