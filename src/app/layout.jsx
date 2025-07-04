import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from "../../public/Frame (1).svg";
import accaunt from "../../public/Account-Wrap.png";
import language from "../../public/Language-Wrap.png";
import cart from "../../public/Cart-Wrap.png";
import Link from "next/link";
import social from '../../public/Footer_social.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="md:max-w-[1900px] w-[90%] m-auto flex md:justify-between justify-center items-center">
          <div className="flex items-center md:gap-10 gap-5 md:flex-row flex-col md:my-0 my-5">
            <Image src={logo} alt="hello" className="w-[220px]" />
            <ul className="flex gap-5 text-xl">
              <Link href={"/"}>
                <li>Home</li>
              </Link>
              <Link href={"product"}>
                <li>Product</li>
              </Link>
              <Link href={"cities"}>
                <li>Cities</li>
              </Link>
              <Link href={"aboutUs"}>
                <li>About Us</li>
              </Link>
            </ul>
          </div>
          <div className="md:flex items-center hidden">
            <Image src={language} className="w-[70px]" alt="language" />
            <Image src={accaunt} className="w-[70px]" alt="accaunt" />
            <Image src={cart} className="w-[70px]" alt="cart" />
          </div>
        </header>
        {children}
        <footer className="max-w-[1920px] m-auto">
          <div className="bg-[#414141] md:h-[150px] md:flex-row flex-col flex items-center justify-center md:gap-20 gap-4 md:py-0 py-5">
            <p className="text-[17px] text-white md:text-start text-center">
              Ready to take the Electric Ivy or Ace for a spin? Electric test
              rides are now available in <br /> Amsterdam, Amstelveen, Abcoude, Bussum,
              Den Haag, Nijmegen, Weesp, Wormerveer, <br /> Berlin, Hamburg and Munich.
              Schedule your test ride now and we'll see you there.
            </p>
            <button className="bg-white px-8 py-3 rounded-xl">BOOK NOW</button>
          </div>
          <section className="bg-black py-10 pb-20 flex md:justify-evenly items-start flex-wrap md:gap-0 gap-5 justify-between px-10 md:px-0">
            <div>
              <h2 className="text-white text-3xl">Explorer</h2>
              <ul className="text-[#FFFFFF99] text-[16px] my-3 flex flex-col gap-2">
                <li>Electric bikes</li>
                <li>City bikes</li>
                <li>Kids' bikes</li>
                <li>Accessories</li>
                <li>Outlet</li>
                <li>Business</li>
                <li>Insurance Electric</li>
                <li>Size guide</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-3xl">About</h2>
              <ul className="text-[#FFFFFF99] text-[16px] my-3 flex flex-col gap-2">
                <li>About us</li>
                <li>Journal</li>
                <li>Reviews</li>
                <li>Press</li>
                <li>Jobs</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-3xl">Help</h2>
              <ul className="text-[#FFFFFF99] text-[16px] my-3 flex flex-col gap-2">
                <li>Contact</li>
                <li>FAQ</li>
                <li>Delivery</li>
                <li>Assembly & manuals</li>
                <li>Payment options</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl text-white">Join the ride.</h2>
              <p className="text-[19px] text-[#FFFFFF99]">Sign up for our newsletter.</p>
              <div className="md:xw-[400px] w-[100%] flex justify-between border-1 border-white rounded-2xl">
                <input type="text" placeholder="Enter your email address here" className="placeholder:text-[#FFFFFF99] w-[100%] text-[#FFFFFF99] outline-0 px-4"/>
                <button className="bg-white px-5 py-2 rounded-2xl">Subscribe</button>
              </div>
              <h2 className="text-[#FFFFFF99]">By signing up, I agree to the privacy policy of Veloretti.</h2>
              <Image src={social} alt="social"/>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
