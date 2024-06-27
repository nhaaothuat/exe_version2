import React from "react";

const ContactForm = () => {
  // return (

  //   <section className="bg-[#7AA2E3]">
  //     <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  //       <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
  //         <div className="lg:col-span-2 lg:py-12">
            
  //         <div ><iframe width="400" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=FPT%20University%20Quy%20Nhon%20AI%20C+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
       
  //         </div>

  //         {/* <div className="rounded-lg bg-green p-8 shadow-lg lg:col-span-3 lg:p-12">
  //           <form action="#" className="space-y-4">
  //             <div>
  //               <label className="sr-only" htmlFor="name">
  //                 Name
  //               </label>
  //               <input
  //                 className="w-full rounded-lg border-gray-200 p-3 text-sm"
  //                 placeholder="Name"
  //                 type="text"
  //                 id="name"
  //               />
  //             </div>

  //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  //               <div>
  //                 <label className="sr-only" htmlFor="email">
  //                   Email
  //                 </label>
  //                 <input
  //                   className="w-full rounded-lg border-gray-200 p-3 text-sm"
  //                   placeholder="Email address"
  //                   type="email"
  //                   id="email"
  //                 />
  //               </div>

  //               <div>
  //                 <label className="sr-only" htmlFor="phone">
  //                   Phone
  //                 </label>
  //                 <input
  //                   className="w-full rounded-lg border-gray-200 p-3 text-sm"
  //                   placeholder="Phone Number"
  //                   type="tel"
  //                   id="phone"
  //                 />
  //               </div>
  //             </div>

  //             <div>
  //               <label className="sr-only" htmlFor="message">
  //                 Message
  //               </label>

  //               <textarea
  //                 className="w-full rounded-lg border-gray-200 p-3 text-sm"
  //                 placeholder="Message"
  //                 rows="8"
  //                 id="message"
  //               ></textarea>
  //             </div>

  //             <div className="mt-4">
  //               <button
  //                 type="submit"
  //                 className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
  //               >
  //                 Send Enquiry
  //               </button>
  //             </div>
  //           </form>
  //         </div> */}
           
  //           <div className="relative py-3 sm:max-w-xl sm:mx-auto">
  //               <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
  //               <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
  //                   <div className="text-center pb-6">
  //                       <h1 className="text-3xl">Contact Us!</h1>
  //                       <p className="text-gray-300">
  //                           Fill up the form below to send us a message.
  //                       </p>
  //                   </div>
  //                   <form>
  //                       <input
  //                           className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                           type="text"
  //                           placeholder="Name"
  //                           name="name"
  //                       />
  //                       <input
  //                           className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                           type="email"
  //                           placeholder="Email"
  //                           name="email"
  //                       />
  //                       <input
  //                           className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                           type="text"
  //                           placeholder="Subject"
  //                           name="_subject"
  //                       />
  //                       <textarea
  //                           className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //                           placeholder="Type your message here..."
  //                           name="message"
  //                           style={{ height: '121px' }}
  //                       ></textarea>
  //                       <div className="flex justify-between">
  //                           <input
  //                               className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  //                               type="submit"
  //                               value="Send ➤"
  //                           />
                            
  //                       </div>
  //                   </form>
  //               </div>
  //           </div>
  //       </div>
  //       </div>
      
  //   </section>
  // );
 
  
  return (
    <section className="bg-[#7AA2E3]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
              <div className=" overflow-hidden">
                <iframe
                  width="500"
                  height="500"
                  
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=FPT%20University%20Quy%20Nhon%20AI%20C+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
          </div>

          <div className="relative py-3 sm:max-w-xl sm:mx-auto lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
              <div className="text-center pb-6">
                <h1 className="text-3xl">Contact Us!</h1>
                <p className="text-gray-300">
                  Fill up the form below to send us a message.
                </p>
              </div>
              <form>
                <div className="mb-4">
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                  />
                </div>
                <div className="mb-4">
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="sr-only" htmlFor="subject">Subject</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                    id="subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type your message here..."
                    name="message"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send ➤
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default ContactForm;
