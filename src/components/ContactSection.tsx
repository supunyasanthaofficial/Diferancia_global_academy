import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-2/3 border border-gray-300 rounded-2xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-[#1A233A] mb-4">
            Send a message
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Do you have a question? A complaint? Or need any help to choose the
            right product from AC Mudiyanse. Feel free to contact us
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-800">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-gray-800">Message</label>
              <textarea
                rows={4}
                placeholder="Send Your Message"
                className="border border-gray-400 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-center pt-4">
              <button
                type="submit"
                className="bg-[#C17900] text-white font-bold py-3 px-12  rounded-full text-lg hover:bg-[#A66800] transition-colors shadow-md"
              >
                Send a Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="border-[3px] border-[#FFB84D] rounded-xl p-6 flex items-center gap-6 shadow-sm">
            <div className="bg-[#C17900] p-4 rounded-lg text-white">
              <MapPin size={32} />
            </div>
            <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
              No.15/I/C,New Digana Road,
              <br />
              Kundasale, Kandy
            </p>
          </div>

          <div className="border-[3px] border-[#FFB84D] rounded-xl p-6 flex items-center gap-6 shadow-sm">
            <div className="bg-[#C17900] p-4 rounded-lg text-white">
              <Phone size={32} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-800">
              <p>081 2267 755</p>
              <p>077 3640 718</p>
            </div>
          </div>

          <div className="border-[3px] border-[#FFB84D] rounded-xl p-6 flex items-center gap-6 shadow-sm">
            <div className="bg-[#C17900] p-4 rounded-lg text-white">
              <Mail size={32} />
            </div>
            <p className="text-xl md:text-2xl font-bold text-gray-800 break-all">
              info@diferanciaglobal.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
