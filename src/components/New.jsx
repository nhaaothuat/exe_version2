import React, { useEffect } from "react";
import Banner from "./Banner";
// import Feature from "./Feature";
import ContactForm from "./ContactForm";
import News from "./News";
import Testimonial from "./Testimonial";
// import FAQ from "./FAQ";
// import FAQ2 from "./FAQ2";

const New = () => {
  useEffect(() => {
    
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0";
      script.async = true;
      script.onload = () => window.FB.XFBML.parse();
      document.body.appendChild(script);
    }
  }, []);
  return (
    <>
      <Banner />
      {/* <FAQ /> Explain Service, Not FAQ */}
      {/* <Feature /> */}
      {/* <FAQ2 /> */}
      <ContactForm />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-3 mx-2 ">
        
        <div className="h-32 rounded-lg bg-gray-200"></div>
        <div
          className="fb-page md:w-full "
          data-href="https://www.facebook.com/profile.php?id=61561393622147"
          data-tabs="timeline"
          data-width="500"
          data-height="200"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61561393622147"
            className="fb-xfbml-parse-ignore"
          ></blockquote>
        </div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
     <Testimonial />
      <News />
    </>
  );
};

export default New;
