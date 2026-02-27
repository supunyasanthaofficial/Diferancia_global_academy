import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const ApplyNow: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#0a1128] py-16 px-4 flex justify-center items-center font-sans">
      <div className="w-full max-w-2xl bg-[#0f172a] p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800">
        <div className="flex items-center justify-center mb-10">
          <div className="grow h-px bg-gray-600"></div>
          <h2 className="px-6 text-white text-3xl font-bold tracking-wide">
            Apply Now
          </h2>
          <div className="grow h-px bg-gray-600"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium ml-1">First Name</label>
              <input
                required
                type="text"
                className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium ml-1">Last Name</label>
              <input
                required
                type="text"
                className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium ml-1">NIC No</label>
              <input
                required
                type="text"
                className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-white font-medium ml-1">
                Phone Number{" "}
                <span className="text-xs text-gray-400">(WhatsApp)</span>
              </label>
              <input
                required
                type="tel"
                className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium ml-1">Address</label>
            <input
              required
              type="text"
              className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium ml-1">Course</label>
            <div className="relative">
              <select
                required
                className="w-full bg-white rounded-xl py-3 px-4 outline-none appearance-none focus:ring-2 focus:ring-orange-500 transition-all"
              >
                <option value="">Select a course</option>
                <option value="hospitality">Hospitality Management</option>
                <option value="cookery">IT</option>
                <option value="bakery">Bakery & Pastry</option>
              </select>
              {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black font-bold">
                V
              </div> */}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-white font-medium ml-1">Special Notes</label>
            <textarea
              rows={4}
              className="bg-white rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="submit"
              className="bg-[#e68a00] hover:bg-[#ff9900] text-white text-xl font-bold py-3 px-16 rounded-xl transition-all shadow-lg active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white p-10 rounded-3xl w-full max-w-sm flex flex-col items-center text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="text-green-500 mb-6">
              <CheckCircle2 size={100} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Submission Successful
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#059669] hover:bg-[#047857] text-white font-bold py-3 px-12 rounded-2xl transition-all w-full text-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyNow;
