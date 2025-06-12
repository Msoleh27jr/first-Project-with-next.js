import React from "react";
import bikeSec from "../../public/Text-media-static_background.png";
import bikeFifth from "../../public/Text-media-static_background (1).png";
import bikeSix from "../../public/div.text-media-static_background__qGDyA.png";
import bikeSev from "../../public/Featured-bike-new_card.png";
import Image from "next/image";
import Link from "next/link";
const bikeFist = "/7838d2af982259a96f988a19c294dad5d4ce1148.png";
const bikeSecond = "/Text-media-new_background.png";

const Page = () => {
  return (
    <main className="max-w-[1900px] m-auto">
      {/* ////////// first section */}
      <section
        className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center flex-col px-5"
        style={{ backgroundImage: `url(${bikeFist})` }}
      >
        <p className="md:text-xl text-white">VELORETTI BUSINESS</p>
        <h2 className="md:text-7xl text-2xl text-white">
          Bike lease plan for employees.
        </h2>
      </section>
      {/* /////////// second section */}
      <section className="my-10 md:flex-row flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={bikeSec} alt="second image" />
        <aside>
          <h3 className="md:text-7xl text-2xl">Bike plans for employees.</h3>
          <p className="md:text-2xl text-[#141615E5]">
            Veloretti Electrics benefit both the environment and the health of{" "}
            <br />
            your employees. Oh, and they look good too. Cost-free for the <br />
            employer and outside of the WKR.
          </p>
          <button className="font-bold my-5">Discover more</button>
        </aside>
      </section>
      {/* /////////// third section */}
      <section
        className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center gap-5 flex-col px-5"
        style={{ backgroundImage: `url(${bikeSecond})` }}
      >
        <h2 className="md:text-7xl text-2xl text-white">
          Service, <br />
          maintenance and <br />
          insurance
        </h2>
        <p className="md:text-xl text-white md:w-[500px]">
          The lease includes an all-in service package. Throughout the entire 36
          months, you are fully insured against damage, theft and maintenance.
          In addition, you always have access to roadside assistance.{" "}
        </p>
      </section>
      {/* ////////// fifth section  */}
      <section className="my-10 md:flex-row flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={bikeFifth} alt="second image" />
        <aside>
          <h3 className="md:text-7xl text-2xl">Free of charge for employers</h3>
          <p className="md:text-2xl text-[#141615E5]">
            The bike plan is totally independent of the WKR and is free for you{" "}
            <br />
            as an employer. The employee pays the lease costs and you, as the{" "}
            <br />
            employer, decide whether you want to contribute to the costs.
          </p>
          <button className="font-bold my-5">Cost example</button>
        </aside>
      </section>
      {/* ///////// six section */}
      <section className="my-10 md:flex-row-reverse flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={bikeSix} alt="second image" />
        <aside className="flex flex-col items-start gap-3">
          <h3 className="md:text-7xl text-3xl">How it works</h3>
          <h2 className="text-2xl">Determine the requirements</h2>
          <p className="text-[#141615E5] md:text-xl">
            Fill in our registration form with your company details. After your{" "}
            <br />
            registration, our leasing partner will do a credit check. You will{" "}
            <br />
            hear whether your application has been approved within 24 hours.{" "}
            <br />
          </p>
          <h2 className="text-2xl">Register your company</h2>
          <p className="text-[#141615E5] md:text-xl">
            You get acces to the digital platform. Set the requirements for your{" "}
            <br />
            employees and share the registration link.
          </p>
          <h2 className="text-2xl">Ride your bike!</h2>
          <p className="text-[#141615E5] md:text-xl">
            Let's go! Your employees can choose their bikes and they'll be{" "}
            <br />
            delivered straight to their homes.
          </p>
          <h2 className="text-2xl">Administration</h2>
          <p className="text-[#141615E5] md:text-xl">
            Everything in one place. The digital platform gives you an easy{" "}
            <br />
            overview of all the information for your payroll.
          </p>
        </aside>
      </section>
      {/* ////////////// seven section */}
      <section className="flex items-center my-10 justify-evenly md:flex-row flex-col md:w-[100%] w-[90%] m-auto md:gap-0 gap-5">
        <Link href={"/1"}>
          <Image src={bikeSev} alt="bike" className="" />
        </Link>
        <Link href={"/2"}>
          <Image src={bikeSev} alt="bike" className="" />
        </Link>
      </section>
      {/* /////////////// eight section */}
      <section className="md:my-20 md:max-w-[1500px] w-[90%] m-auto flex flex-col gap-4">
        <h3 className="text-5xl text-center">Get in touch</h3>
        <input
          type="text"
          placeholder="First name"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <input
          type="text"
          placeholder="Email address"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <input
          type="text"
          placeholder="Phone number"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <input
          type="text"
          placeholder="Company name"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <input
          type="text"
          placeholder="Company Size"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <input
          type="text"
          placeholder="Number of bikes"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl px-4 outline-0"
        />
        <textarea
          placeholder="How can we help"
          className="border-1 w-[100%] py-3 rounded-[5px] border-[#979797] placeholder:text-xl h-[300px] px-4 outline-0"
        ></textarea>
        <button className="bg-[#979797] text-white py-2 rounded-2xl">
          Send the request
        </button>
      </section>
      <hr className="my-4 border-[#1416151A]" />
      {/* /////////// nine section */}
      <section className="md:my-20 md:max-w-[1500px] w-[90%] m-auto flex flex-col gap-4">
        <h3 className="text-5xl text-center">Any questions?</h3>
        <details className="border-b-1 py-2 border-[#1416151A]">
          <summary className="cursor-pointer text-xl font-bold">
            What about the paperwork?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="border-b-1 py-2 border-[#1416151A]">
          <summary className="cursor-pointer text-xl font-bold">
            How does it work with an employee who retires early?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="border-b-1 py-2 border-[#1416151A]">
          <summary className="cursor-pointer text-xl font-bold">
            What does a Veloretti Bike Plan cost for an employer?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="border-b-1 py-2 border-[#1416151A]">
          <summary className="cursor-pointer text-xl font-bold">
            How is the insurance & maintenance arranged when leasing a Veloretti
            bike?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="border-b-1 py-2 border-[#1416151A]">
          <summary className="cursor-pointer text-xl font-bold">
            What are the legal requirements for the Veloretti bicycle plan?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
      </section>
    </main>
  );
};

export default Page;
