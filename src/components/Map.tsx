const Map: React.FC = () => {
  return (
    <section className=" py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Find Us On Map</h2>
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.663793772702!2d80.67633027473669!3d7.279042113923075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367be19d02d7d%3A0xfa67bb9a7082d197!2sEVER%20EFFICIENT%20Business%20Management!5e0!3m2!1sen!2slk!4v1772179375329!5m2!1sen!2slk"
            className="w-full h-full border-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          ;
        </div>
      </div>
    </section>
  );
};
export default Map;
