import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col text-[#594E4E] font-body">
      <Navbar />

      <section className="flex-grow bg-[#f8f8f8] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📞 Contact Us</h2>
          <p className="mb-8 text-gray-600">
            Have any questions, feedback, or business inquiries? We'd love to hear from you. Just drop us a message below.
          </p>

          <form className="grid md:grid-cols-2 gap-4 text-left bg-white p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-md md:col-span-2"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-[#594E4E] text-white px-6 py-3 rounded-md hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
