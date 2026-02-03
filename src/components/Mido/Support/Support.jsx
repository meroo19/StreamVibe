import React, { useState } from "react";
import pic2 from "../../../assets/pic3.png";

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);

  const qus = [
    { question: "What is StreamVibe?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How much does StreamVibe cost?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What content is available on StreamVibe?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How can I watch StreamVibe?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How do I sign up for StreamVibe?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What is the StreamVibe free trial?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How do I contact StreamVibe customer support?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "What are the StreamVibe payment methods?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container text-white flex flex-col md:flex-row md:mx-auto gap-10 mt-20 justify-center items-center">
        
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Welcome to our support page!</h2>
          <p className="text-gray-400">
            We're here to help you with any problems you may be having with our product.
          </p>
          <img 
            src={pic2}
            alt="Support illustration" 
            className="rounded-lg shadow-md w-full max-w-md"
          />
        </div>

        <div className="md:w-1/2 bg-[#0F0F0F] p-6 rounded-xl border-2 border-gray-800 shadow-lg w-full">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full bg-[#1E1E1E] px-3 py-2 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full bg-[#1E1E1E] px-3 py-2 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#1E1E1E] px-3 py-2 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full bg-[#1E1E1E] px-3 py-2 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message"
                className="w-full bg-[#1E1E1E] px-3 py-2 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                  I agree with{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red-500 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-[#E50000] hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>

      <div className="container text-white flex flex-col md:flex-row px-6 py-12 gap-8 mt-12 justify-between items-center text-white">
        <div className="max-w-xl text-left">
          <p className="text-2xl font-semibold mb-2">Frequently Asked Questions</p>
          <span className="text-gray-400 text-sm">
            Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
          </span>
        </div>
        <div>
          <button className="bg-[#E50000] hover:bg-red-700 text-white font-medium py-2 px-5 rounded-md transition">
            Ask a Question
          </button>
        </div>
      </div>

      <div className="container text-white mt-10 flex items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-20 max-w-screen-lg w-full">
          {qus.map((faq, index) => (
            <div key={index} className="border-b border-red-900 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-md text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="flex-1 text-lg font-medium">{faq.question}</span>
                <span className="text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 ml-14 text-gray-400 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <section className="relative text-white py-16 px-6 max-w-7xl mx-auto mb-5">
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
    </>
  );
}
