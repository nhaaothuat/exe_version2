import React from "react";
import Slider from "react-slick";
import '../assets/slider.css';
const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
  };

  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif] ">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 items-center justify-center flex">
          Latest Blog Posts
        </h2>
        <div className="" >
          <Slider {...settings} >
            <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
              <img
                src="https://readymadeui.com/cardImg.webp"
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-gray-600 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore...
                </p>
                <a className="mt-4 inline-block text-blue-600 text-sm hover:underline">
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
              <img
                src="https://readymadeui.com/cardImg.webp"
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-gray-600 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore...
                </p>
                <a
                  href="javascript:void(0);"
                  className="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
              <img
                src="https://readymadeui.com/cardImg.webp"
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-gray-600 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore...
                </p>
                <a
                  href="javascript:void(0);"
                  className="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://readymadeui.com/cardImg.webp"
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-gray-600 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore...
                </p>
                <a
                  href="javascript:void(0);"
                  className="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg ">
              <img
                src="https://readymadeui.com/cardImg.webp"
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-gray-600 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore...
                </p>
                <a
                  href="javascript:void(0);"
                  className="mt-4 inline-block text-blue-600 text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* <div>
              <h3>6</h3>
            </div> */}

            
          </Slider>
        </div>
      </div>
    </div>
  );

};

export default News;
