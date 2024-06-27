
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
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

      <div className="font-[sans-serif] text-[#333]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-sm text-gray-500">
              Change your plant according your needs
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
            <div className="border rounded-md p-6">
              <h3 className="text-2xl font-semibold mb-1">Starter</h3>
              <p className="text-sm text-gray-500">
                For Individuals and Small Teams
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">
                  $10 <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-1">Include</h4>
                <p className="text-sm text-gray-500">
                  Everything you get in this plan
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    50 Page Unlock
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    10 GB Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    6 Team Members
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-2xl font-semibold mb-1 flex items-center">
                Professional{" "}
                <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-md ml-3">
                  Best Deal
                </span>
              </h3>
              <p className="text-sm text-gray-500">
                For Individuals and Largest Teams
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">
                  $20 <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-1">Include</h4>
                <p className="text-sm text-gray-500">
                  Everything you get in this plan
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    100 Page Unlock
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    20 GB Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    8 Team Members
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Buy now
                </button>
              </div>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-2xl font-semibold mb-1">Business</h3>
              <p className="text-sm text-gray-500">
                For Multiples and Largest Teams
              </p>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold">
                  $100 <sub className="text-gray-400 text-xs">per month</sub>
                </h3>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-1">Include</h4>
                <p className="text-sm text-gray-500">
                  Everything you get in this plan
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    300 Page Unlock
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    100 GB Storage
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    100 Team Members
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited Book Mark
                  </li>
                  <li className="flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      className="mr-3 fill-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        data-original="#000000"
                      />
                    </svg>
                    Unlimited basic feature
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full mt-6 px-2 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto font-[sans-serif] text-[#333] mt-5 mb-10">
        
        <div className=" mt-12">
          <table className="w-full border border-collapse min-w-[980px]">
            <thead>
              <tr>
                <th className="p-4 text-left border max-w-[150px]">
                  <h3 className="font-bold text-base whitespace-nowrap">Compare Plans</h3>
                  <p className="text-xs text-gray-400 font-medium mt-2">Choose your workspace plan according to your organisational plan</p>
                </th>
                <th className="p-4 text-center border whitespace-nowrap max-w-[150px]">
                  <h3 className="font-bold text-2xl">Free <span className="text-xs text-gray-400">/Lifetime</span></h3>
                  <button type="button" className="w-full mt-4 px-4 py-2.5 text-xs font-bold bg-[#333] hover:bg-[#444] text-white">Choose Plan</button>
                </th>
                <th className="p-4 text-center border whitespace-nowrap max-w-[150px]">
                  <h3 className="font-bold text-2xl">$25 <span className="text-xs text-gray-400">/Month</span></h3>
                  <button type="button" className="w-full mt-4 px-4 py-2.5 text-xs font-bold bg-[#333] hover:bg-[#444] text-white">Choose Plan</button>
                </th>
                <th className="p-4 text-center border whitespace-nowrap max-w-[150px]">
                  <h3 className="font-bold text-2xl">$40 <span className="text-xs text-gray-400">/Month</span></h3>
                  <button type="button" className="w-full mt-4 px-4 py-2.5 text-xs font-bold bg-[#333] hover:bg-[#444] text-white">Choose Plan</button>
                </th>
              </tr>
            </thead>
            <tbody className="border text-sm">
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Number of Users
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  20 Pages
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  600 Pages
                  <p className="text-xs text-gray-400 font-medium mt-1">Pages Add-ons on Demand</p>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  Unlimited
                  <p className="text-xs text-gray-400 font-medium mt-1">Pages Add-ons on Demand</p>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Users Per Page
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  5 Pages
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  50 Pages
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  Unlimited
                  <p className="text-xs text-gray-400 font-medium mt-1">Pages Add-ons on Demand</p>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Includes essential features to get started
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  More advanced features for increased productivity
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Designing & Development
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Customizable options to meet your specific needs
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Secure data storage
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Email Support
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  24/7 customer support
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border max-w-[150px]">
                  Analytics and reporting
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" className="fill-red-500 inline" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
                <td className="px-4 py-3 text-center border max-w-[150px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="fill-green-500 inline" viewBox="0 0 24 24">
                    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
