import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
// import "../assets/slider.css";
const Aboutus = () => {
 
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows:false
  };
  return (
    <>
      <Navbar />

      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto text-[#333] font-[sans-serif] my-4">
        <div className="mt-16">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <img
                src="https://readymadeui.com/image-1.webp"
                className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-4">Customization</h3>
              <p className="text-sm">
                Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                consequat id. Dolore et sint mollit in nisi tempor culpa
                consectetur. Qui elit labore in nisi dolore tempor anim laboris
                ipsum ad ad consequat id.
              </p>
              <button
                type="button"
                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Read More
              </button>
            </div>
            <div className="max-md:order-1">
              <h3 className="text-2xl font-extrabold mb-4">Performance</h3>
              <p className="text-sm">
                Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
                consequat id. Dolore et sint mollit in nisi tempor culpa
                consectetur. Qui elit labore in nisi dolore tempor anim laboris
                ipsum ad ad consequat id.
              </p>
              <button
                type="button"
                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
              >
                Read More
              </button>
            </div>
            <div>
              <img
                src="https://readymadeui.com/contact.webp"
                className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testoe */}
      <div className=" font-[sans-serif] max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center py-10">
          <h2 className="text-3xl font-extrabold text-gray-800">
            What our happy client say
          </h2>
          <p className="text-sm mt-4 leading-relaxed text-gray-800">
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in
          </p>
        </div>
        <div className="">
          <Slider {...settings}>
            <div>
              <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                <div className="px-8">
                  <p className="text-lg font-medium text-white mb-2">
                    &ldquo;The best experience ever&ldquo;
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor nisi eget ornare ultrices. Proin laoreet
                    ultrices nunc vel dapibus.
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar of person"
                    />
                    <div>
                      <p className="text-white font-medium">Mary Johnson</p>
                      <p className="text-gray-200">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                <div className="px-8">
                  <p className="text-lg font-medium text-white mb-2">
                    &ldquo;The best experience ever&ldquo;
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor nisi eget ornare ultrices. Proin laoreet
                    ultrices nunc vel dapibus.
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar of person"
                    />
                    <div>
                      <p className="text-white font-medium">Mary Johnson</p>
                      <p className="text-gray-200">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                <div className="px-8">
                  <p className="text-lg font-medium text-white mb-2">
                    &ldquo;The best experience ever&ldquo;
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor nisi eget ornare ultrices. Proin laoreet
                    ultrices nunc vel dapibus.
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar of person"
                    />
                    <div>
                      <p className="text-white font-medium">Mary Johnson</p>
                      <p className="text-gray-200">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                <div className="px-8">
                  <p className="text-lg font-medium text-white mb-2">
                    &ldquo;The best experience ever&ldquo;
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor nisi eget ornare ultrices. Proin laoreet
                    ultrices nunc vel dapibus.
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar of person"
                    />
                    <div>
                      <p className="text-white font-medium">Mary Johnson</p>
                      <p className="text-gray-200">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                <div className="px-8">
                  <p className="text-lg font-medium text-white mb-2">
                    &ldquo;The best experience ever&ldquo;
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor nisi eget ornare ultrices. Proin laoreet
                    ultrices nunc vel dapibus.
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar of person"
                    />
                    <div>
                      <p className="text-white font-medium">Mary Johnson</p>
                      <p className="text-gray-200">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center h-64 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                <div className="px-8">
                  <p className="text-lg font-medium text-white mb-2">
                    &ldquo;The best experience ever&ldquo;
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce auctor nisi eget ornare ultrices. Proin laoreet
                    ultrices nunc vel dapibus.
                  </p>
                  <div className="mt-4 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full mr-4"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Avatar of person"
                    />
                    <div>
                      <p className="text-white font-medium">Mary Johnson</p>
                      <p className="text-gray-200">CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* End */}
      <div className="bg-gradient-to-r from-[#6626d9] via-[#a91079] to-[#e91e63] py-20 px-6 font-[sans-serif]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Join Us Today
          </h2>
          <p className="text-lg text-white mb-8">
            Experience the future of our innovative solutions. Sign up now for
            exclusive access.
          </p>
          <a className="bg-white text-[#a91079] hover:bg-[#a91079] hover:text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 hover:shadow-lg">
            Get Started
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
