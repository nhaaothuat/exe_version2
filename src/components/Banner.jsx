



const Banner = () => {
 
  return (
  
    <div className="  font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto">
      <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
        <div className="max-md:order-1 max-md:text-center">
          <p className="mt-4 text-sm font-bold text-blue-600">
            <span className="rotate-90 inline-block mr-2 mb-2" >|</span> ALL IN
            ONE MEETING SCHEDULER
          </p>
          <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]" >
            Schedule meetings effortlessly
          </h2>
          <p className="mt-4 text-base text-gray-500 leading-relaxed" >
            Embark on a gastronomic journey with our curated dishes, delivered
            promptly to your doorstep. Elevate your dining experience today.
          </p>
          <div className="bg-white mt-10 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] overflow-hidden">
            <input
              type="email"
              placeholder="Search Something..."
              className="w-full font-bold outline-none bg-white pl-4 text-sm"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-bold text-sm rounded-full px-5 py-2.5"
            >
              Search
            </button>
          </div>
          <div className="flex items-center mt-10">
            <input
              id="checkbox3"
              type="checkbox"
              className="hidden peer"
              
            />
           
          </div>
        </div>
        <div className="md:h-[450px] p-2  ">
          <img
            src="https://readymadeui.com/image-1.webp"
            className="w-full h-full object-contain shadow-[0_2px_22px_-10px_rgba(93,96,127,0.2)] "
            alt="Dining Experience"
            
          />
        </div>
      </div>
      
      {/* <Slide /> */}
      <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
        <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
        <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
        <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
      </div>
    </div>
  );
};

export default Banner;
