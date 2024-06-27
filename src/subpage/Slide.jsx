
import Slider from "react-slick";

const Slide = () => {
     const settings = {
          dots: false, // Enables pagination dots
          infinite: true, // Enables continuous looping
          slidesToShow: 4, // Number of slides visible at once (adjust as needed)
          slidesToScroll: 2, // Number of slides to scroll per swipe (adjust as needed)
          autoplay: true, // Enables automatic slide transition
         speed: 3000, // Transition duration in milliseconds
        autoplaySpeed: 3000, // Interval between automatic transitions
          arrows: false,
          cssEase: "linear", // Transition easing function (explore other options)
          responsive: [
            // Optional responsiveness settings (adjust breakpoints and settings as needed)
            {
              breakpoint: 768, // Applies settings for screens narrower than 768px
              settings: {
                slidesToShow: 2, // Adjust number of slides based on screen size
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 576, // Applies settings for screens narrower than 576px
              settings: {
                slidesToShow: 1, // Adjust number of slides based on screen size
                slidesToScroll: 1,
              },
            },
          ],
        };
      
        // Assuming you have an array of image objects or URLs
        const imageData = [
          {
            src: "https://readymadeui.com/google-logo.svg",
            alt: "google-logo",
          },
          {
            src: "https://readymadeui.com/facebook-logo.svg",
            alt: "facebook-logo",
          },
          {
            src: "https://readymadeui.com/linkedin-logo.svg",
            alt: "linkedin-logo",
          },
          {
            src: "https://readymadeui.com/pinterest-logo.svg",
            alt: "pinterest-logo",
          },
          // Add more image objects as needed
        ];
  return (
    
    <div className=" items-center mb-9 gap-3 ">
     <Slider {...settings}>
       {imageData.map((image) => (
         <div key={image.src} className="">
           <img src={image.src} className="w-28 h-28 " alt={image.alt} />
         </div>
       ))}
     </Slider>
     </div>

  )
}

export default Slide
