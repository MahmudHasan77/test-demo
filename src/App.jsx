import "./App.css";
import { MdOutlineLogin } from "react-icons/md";
import { FaCircleArrowDown } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";
import { LiaPencilAltSolid } from "react-icons/lia";
function App() {
  const headingText = "Complete Digital Solutions for Your Business";
  const [isTextShow, setTextShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextShow(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const [navIndex, setIndex] = useState(0);
  const navigation = [
    "home",
    "services",
    "Products",
    "Digital Marketing",
    "Web Hosting",
    "About",
  ];

  const secondNav = [
    "Domain",
    "Hosting",
    "Web Application",
    "Mobile Application",
    "CRM/POS",
    "Digital Marketing",
    "UI/UX",
    "Tech Consultency",
  ];
  const [isShow, setShow] = useState(false);
  return (
    <div className="min-h-screen appBg">
      <header className="w-full flex justify-between items-center py-2 px-5  sticky top-0 z-50 shadow heading">
        <div>
          <img
            src="/web logo1 1 1-BaR6oSzZ.svg"
            className="h-10 p-1 cursor-pointer"
          />
        </div>
        {/* desktop navigation */}
        <div className="gap-5 hidden md:flex">
          {navigation.map((nav, i) => {
            return (
              <div
                key={i}
                className=" font-roboto capitalize font-semibold text-sm flex items-center  gap-1 cursor-pointer hover:text-orange-500"
              >
                <h1> {nav}</h1>
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
            );
          })}
        </div>
        <div className="border  justify-between items-center gap-2 rounded-lg bg-black/90 text-white py-2 px-2.5 font-semibold text-sm hidden md:flex">
          <MdOutlineLogin className="" />
          <button>My Account</button>
        </div>
        <div className="inline md:hidden">
          <GiHamburgerMenu
            onClick={() => setShow(!isShow)}
            className="text-xl cursor-pointer"
          />
        </div>
      </header>
      {/* small navigation */}
      <div
        className={`bg-white px-5 md:hidden shadow-lg pb-3 duration-500 ${
          isShow ? "-translate-y-0 h-60" : "-translate-y-60 h-0"
        }`}
      >
        {navigation.map((nav, i) => {
          return (
            <h1
              key={i}
              className=" border-b border-gray-200 cursor-pointer hover:text-orange-500 py-1 capitalize text-sm font-semibold"
            >
              {nav}
            </h1>
          );
        })}
        <div className="border  justify-center items-center gap-2 rounded-lg bg-black/90 text-white py-2 px-2.5 font-semibold text-sm flex">
          <MdOutlineLogin className="" />
          <button>My Account</button>
        </div>
      </div>

      {/* home section */}
      <div className="">
        <div className="flex justify-center gap-20 my-5 md:hidden">
          <img
            src="/mern-icon-CjCtNjI2.png"
            className=" smallHeadImg1 md:mx-5"
          />
          <img
            src="/marketing-icon-GGn7V-3z.png"
            className=" smallHeadImg2 md:mx-5"
          />
        </div>

        <div className="mx-auto w-full flex justify-around max-w-2xl md:pt-10 items-center gap-7">
          <img
            src="/mern-icon-CjCtNjI2.png"
            className="hidden md:inline smallHeadImg1 md:mx-5"
          />
          <img
            src="/fire-symbol.png"
            className="smallHeadIcon w-5 rotate-45 translate-y-5"
          />
          <h1 className="smallHead md:text-lg text-center">
            Looking for Your One Stop Solution?{" "}
          </h1>
          <img
            src="/fire-symbol.png"
            className=" smallHeadIcon w-5 rotate-45 translate-y-5"
          />
          <img
            src="/marketing-icon-GGn7V-3z.png"
            className="hidden md:inline smallHeadImg2 md:mx-5"
          />
        </div>

        {/* text */}
        <div className="flex justify-around items-center  px-2  my-5 max-w-5xl mx-auto">
          <div className="textIcon hidden md:inline">
            <img src="wordpress-icon-D-Dxmhu4.png" className="w-25" />
          </div>
          <div className="mx-auto text-center  md:w-xl p-7  w-full">
            {headingText.split("").map((char, i) => (
              <span
                key={i}
                className={`
              
              inline-block transform transition-all duration-500  font-bold text-2xl md:text-4xl
              ${
                isTextShow
                  ? "opacity-100 translate-y-5 headLindeStyle"
                  : "opacity-0 -translate-y-30"
              }
            `}
                style={{
                  transitionDelay: `${i * 0.2}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <div className="flex justify-end">
              <img src="download.png" className="laravelIcon" />
            </div>
          </div>
          <div className="textIcon hidden md:inline">
            <img src="pos-icon-DXorZRXL.png" className="w-13" />
          </div>
        </div>

        {/* buttons */}
        <div className="max-w-5xl mx-auto px-5 flex justify-center items-center flex-wrap gap-3 font-semibold">
          <button className=" px-2 py-1.5 text-sm font-mono rounded-md bg-blue-950 text-white hover:bg-white hover:text-black border shadow border-zinc-300 duration-300">
            Web Application
          </button>
          <button className="border border-zinc-300 px-2 py-1.5 text-sm font-mono rounded-md bg-white hover:bg-blue-950 hover:text-white duration-300">
            Mobile Application
          </button>
          <button className="border border-zinc-300 px-2 py-1.5 text-sm font-mono rounded-md bg-white hover:bg-blue-950 hover:text-white duration-300">
            API Integration
          </button>
          <button className="border border-zinc-300 px-2 py-1.5 text-sm font-mono rounded-md bg-white hover:bg-blue-950 hover:text-white duration-300">
            Digital Marketing
          </button>
          <button className="border border-zinc-300 px-2 py-1.5 text-sm font-mono rounded-md bg-white hover:bg-blue-950 hover:text-white duration-300">
            UI/UX
          </button>
          <button className="border border-zinc-300 px-2 py-1.5 text-sm font-mono rounded-md bg-white hover:bg-blue-950 hover:text-white duration-300">
            Domain Hosting
          </button>
          <button className="border border-zinc-300 px-2 py-1.5 text-sm font-mono rounded-md bg-white hover:bg-blue-950 hover:text-white duration-300">
            Tech Consultency
          </button>
        </div>

        {/* second buttons */}
        <div className="flex flex-col gap-8 md:gap-20 py-15 justify-center items-center md:flex-row ">
          <img src="/download (2).png" className="w-10 flutterIcon" />
          <div className="flex gap-5">
            <div className="flex justify-center items-center border py-1.5 bg-black rounded-md gap-2 w-40 hover:bg-white group duration-300 h-11">
              <span className="bg-blue-500 p-1 text-white rounded-md text-sm">
                <IoCall />
              </span>
              <button className="font-semibold text-sm  text-white group-hover:text-black duration-300">
                Book an intro call
              </button>
            </div>
            <div className="flex justify-center items-center border py-1.5 bg-white hover:bg-black hover:text-white duration-300 rounded-md gap-2 w-40 h-11">
              <button className="font-semibold text-sm ">
                Explore Our Work
              </button>
            </div>
          </div>
          <img src="/download (1).png" className="w-10 figmaIcon" />
        </div>

        {/* fatoorah */}

        <div className="flex justify-center gap-5">
          <img
            src="/vision2030-icon-BgE2tkS_.png"
            className="w-[77px] h-[52px]"
          />
          <img
            src="/fatoora-icon-CyJubSfb.png"
            className="w-[172px] h-[40px]"
          />
        </div>

        {/* circle button */}
        <div className="relative w-25 ml-20 my-3">
          <div class="circle-text ">
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-80,0
           a80,80 0 1,1 160,0
           a80,80 0 1,1 -160,0"
                />
              </defs>

              <text>
                <textPath href="#circlePath" startOffset="0%">
                  • Scroll down • Scroll down • Scroll down • Scroll down •
                </textPath>
              </text>
            </svg>
          </div>
          <IoArrowDown className="text-2xl! rounded-full p-1 bg-blue-200 border border-blue-300 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
        </div>

        <div className=" w-[95%] mb-2 min-h-90 footerDiv mx-auto rounded-2xl">
          <div className="flex justify-around border-b border-zinc-600 py-5 flex-wrap gap-3">
            {secondNav.map((nav, i) => {
              return (
                <h1
                  onClick={() => setIndex(i)}
                  key={i}
                  className={` hover:text-white font-semibold text-xs md:text-sm cursor-pointer ${
                    navIndex === i ? " border-b text-white" : "text-white/80"
                  } `}
                >
                  {nav}
                </h1>
              );
            })}
          </div>
          <div className="w-80 mx-auto my-7">
            <h1 className="text-white font-bold text-center my-3">
              Find Your Perfect Domain?
            </h1>
            <h1 className="text-white text-xs text-center">
              Discover, buy, and register your unique web address using our
              powerful search or get creative with our AI Generator.
            </h1>
          </div>
          <div className=" flex flex-col md:flex-row justify-center items-center  min-w-100 mx-auto my-7 gap-5">
            <div>
              <input
                type="text "
                placeholder="Type the domain name or a descriptive phrase..."
                className=" border border-zinc-700 rounded-l outline-none text-white text-xs py-2 px-2 w-50 md:w-55"
              />
              <button className="p-2 text-xs bg-blue-500 text-white rounded-r-md border border-zinc-700">
                Search Domain
              </button>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <span>
                <LiaPencilAltSolid className="penIcon text-white p-2 text-4xl rounded-full" />
              </span>
              <h1 className="text-white">Generate with AI</h1>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            <div className="h-22 rounded text-center w-33 text-white border border-zinc-800  bg-black">
              <h1 className="text-blue-500 font-bold text-xl">.com</h1>
              <h1 className=" line-through text-white/70 text-xs mb-2">
                USD $2.99/yr
              </h1>
              <h1 className="text-white/80 text-sm">
                USD <span className="font-bold">$17.99/yr</span>
              </h1>
            </div>
            <div className="h-22 rounded text-center w-33 text-white border border-zinc-800  bg-black">
              <h1 className="text-blue-500 font-bold text-xl">.online</h1>
              <h1 className=" line-through text-white/70 text-xs mb-2">
                USD $2.99/yr
              </h1>
              <h1 className="text-white/80 text-sm">
                USD <span className="font-bold ">$17.99/yr</span>
              </h1>
            </div>

            <div className="h-22 rounded text-center w-33 text-white border border-zinc-800  bg-black">
              <h1 className="text-blue-500 font-bold text-xl">.shop</h1>
              <h1 className=" line-through text-white/70 text-xs mb-2">
                USD $2.99/yr
              </h1>
              <h1 className="text-white/80 text-sm">
                USD <span className="font-bold ">$17.99/yr</span>
              </h1>
            </div>

            <div className="h-22 rounded text-center w-33 text-white border border-zinc-800  bg-black">
              <h1 className="text-blue-500 font-bold text-xl">.net</h1>
              <h1 className=" line-through text-white/70 text-xs mb-2">
                USD $2.99/yr
              </h1>
              <h1 className="text-white/80 text-sm">
                USD <span className="font-bold ">$17.99/yr</span>
              </h1>
            </div>

            <div className="h-22 rounded text-center w-33 text-white border border-zinc-800  bg-black">
              <h1 className="text-blue-500 font-bold text-xl">.pro</h1>
              <h1 className=" line-through text-white/70 text-xs mb-2">
                USD $2.99/yr
              </h1>
              <h1 className="text-white/80 text-sm">
                USD <span className="font-bold ">$17.99/yr</span>
              </h1>
            </div>
          </div>
          <h1 className="text-white text-center font-bold text-sm py-10 px-5">
            Free WHOIS Privacy Protection is included with every eligible domain
            registration.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
