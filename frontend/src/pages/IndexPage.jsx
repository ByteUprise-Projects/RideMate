import React from "react";

const IndexPage = () => {
  return (
    <div className="relative">
   

      {/* Hero Section */}
      <div className="relative bg-blue-50 py-16">
        <h1 className="text-center text-4xl font-bold">YOUR RIDE, YOUR WAY</h1>
        <p className="text-center text-lg mt-4">
          Quick, Reliable, and Affordable – Get Moving with Just a Tap.
        </p>
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Download</button>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <input
            type="text"
            placeholder="Enter Your Location"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter Your Location"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="date"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="time"
            className="border border-gray-300 p-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
        </div>
      </div>

      {/* Driver Section */}
      <div className="bg-blue-500 text-white py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Drive with Us and Earn on Your Schedule</h2>
          <p className="mt-4">Set your hours, be your own boss.</p>
          <button className="bg-yellow-500 text-black px-6 py-2 mt-8 rounded">Sign Up</button>
          <p className="mt-4">
            Have questions? Visit our Driver FAQs or contact us for more information.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Get to Know Us</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Welcome to [Your Company Name], where we’re redefining the way people move. Our
            goal is simple: to connect riders with reliable drivers at the tap of a button,
            making transportation safe, affordable, and convenient.
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Know More</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Meet Our Team</button>
        </div>
      </div>

      {/* Review Section */}
      <div className="py-16 px-6 bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Share Your Experience</h2>
          <p className="mt-4">Your feedback helps us improve!</p>
          <textarea
            placeholder="Share your experience with us"
            className="border border-gray-300 p-4 w-full mt-8 rounded"
          ></textarea>
          <div className="text-center mt-4">
            <button className="bg-black text-white px-6 py-2 rounded">Submit</button>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-4 rounded shadow-md w-1/3"
            >
              <p className="font-bold">Review Title</p>
              <p>Review body</p>
              <p className="text-sm text-gray-600 mt-2">Reviewer Name, Date</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Connect with Our Support Team</h2>
          <p className="mt-4">Have a question or need support? We’re just a message away.</p>
        </div>
        <div className="flex justify-between mt-8">
          <div>
            <p>companymail@gmail.com</p>
            <p>9876543210</p>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border border-gray-300 p-2 w-full mb-4 rounded"
            />
            <textarea
              placeholder="Enter Your Message"
              className="border border-gray-300 p-4 w-full rounded"
            ></textarea>
            <div className="text-center mt-4">
              <button className="bg-black text-white px-6 py-2 rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default IndexPage;
