

export default function FAQ() {
  return (
    <section className="bg-[#6AD4DD]">
      <div className="mx-22 max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-15 lg:px-8 ">
        <div className="mx-auto max-w-3xl text-center ">
          <h2 className="text-3xl font-bold sm:text-4xl " >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
            doloribus impedit.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className=" h-64 overflow-hidden sm:h-80 lg:h-full mb-3">
            <video
              autoPlay
              loop
              muted
              className="inset-0 h-full w-full object-cover "
            >
              <source
                src="https://cdn.pixabay.com/video/2021/05/03/73007-545277076_large.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="lg:py-16 " data-aos="flip-up">
            <article className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum explicabo quidem voluptatum voluptas illo accusantium
                ipsam quis, vel mollitia? Vel provident culpa dignissimos
                possimus, perferendis consectetur odit accusantium dolorem amet
                voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                molestias tempora distinctio voluptates sint! Itaque quasi
                corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
