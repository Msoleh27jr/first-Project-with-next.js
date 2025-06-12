import React from "react";
import secImg1 from "../../../public/Image-Wrapper.png";
import secImg2 from "../../../public/Text-media-new_custom-Media.png";
import thirdImg1 from "../../../public/span (1).png";
import fifthImg1 from "../../../public/Span (2).png";
import fifthImg3 from "../../../public/Span (3).png";
import fifthImg2 from "../../../public/Video_wrapper.png";
import thirdImg2 from "../../../public/span.png";
import Image from "next/image";
const bikeFirst = "/449ed33759ac77707654c6f5837d4b4dca7add43.png";

const Cities = () => {
  return (
    <main>
      {/* /////////// first section */}
      <section
        className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center flex-col px-10"
        style={{ backgroundImage: `url(${bikeFirst})` }}
      >
        <p className="md:text-2xl text-white">VELORETTI</p>
        <h2 className="md:text-9xl text-2xl text-white">City bikes</h2>
        <p className="md:text-2xl text-white">Forever Forward .</p>
      </section>
      {/* //////////// second section */}
      <section className="my-10">
        <h3 className="text-center text-7xl">Forever Forward.</h3>
        <div className="relative flex items-center justify-evenly my-10 md:flex-row flex-col">
          <Image src={secImg2} alt="first image" />
          <Image src={secImg1} alt="first image" />
          <div className="p-10 md:w-[400px] border-1 rounded-[5px] border-[#1416151A] absolute bg-white bottom-[-100px]">
            <h2 className="text-xl text-[#14161566]">
              Our women's bicycles are for everyone who likes to combine style
              with performance. In this range, available are the Café Racer and
              the Robyn, both frames with a lower tube, making it easy to step
              through.
            </h2>
          </div>
        </div>
      </section>
      {/* //////////////// third section */}
      <section className="mt-30 mb-10 md:bg-[#B6B6B6] md:h-[700px] md:gap-0 gap-5 md:w-[100%] m-auto w-[90%] flex items-center justify-evenly md:flex-row flex-col">
        <Image src={thirdImg1} alt="bike" />
        <Image src={thirdImg2} alt="bike" />
        <Image src={thirdImg1} alt="bike" />
      </section>
      {/* ///////////////// fifth section */}
      <section className="my-10 md:max-w-[1700px] w-[90%] md:gap-0 gap-5 m-auto flex items-start relative md:h-[1200px] md:flex-row flex-col">
        <Image src={fifthImg1} alt="bike" />
        <div className="border-1 md:w-[500px] border-[#14161566] p-10">
          <h2 className="text-2xl text-[#14161566]">
            Whether you like it easy or fast, we got both. Our men's range of
            bicycles combine modern clean design with great quality, so they're
            perfect for your daily city commute. Our men citybikes are the
            Caféracer, Caféchaser and the Berlin, but feel free to opt for a
            women's bike for that easy hop-on- hop-off Amsterdam style.
          </h2>
        </div>
        <Image
          className="absolute bottom-0 left-[200px] hidden md:block"
          src={fifthImg2}
          alt="image"
        />
        <Image src={fifthImg3} alt="image" />
      </section>
      {/* ////////////// sixth section */}
      <h2 className="md:text-8xl text-7xl my-10 text-center">
        City bikes for <br />
        everyone.
      </h2>
    </main>
  );
};

export default Cities;
