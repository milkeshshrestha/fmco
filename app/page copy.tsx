// pages/index.tsx
"use client";

// import { motion } from "framer-motion";
// import FlipLink from "@/components/ui/text-flip";
// import HorizontalScrollCarousel from "@/components/ui/horizontalCard";
// import directorEmployeeList from "@/public/json/directorsEmployees.json";
// import { Mail, Phone } from "lucide-react";
// import downloadList from "@/public/json/downloads.json";
// import usefullinks from "@/public/json/usefulLinks.json";

export default function Home() {
  return (
    <div className="">
      {/* <section id="home">
        <div className="h-screen flex items-center  bg-linear-to-br from-gray-700 to-slate-800">
          <div className="flex justify-center items-center">
            <motion.img
              src="/images/amc.png"
              alt="investment image"
              className="sm:flex hidden w-4/12 h-auto "
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { duration: 0.5, type: "spring", stiffness: 70 },
                opacity: { duration: 3 },
              }}
            />
            <div className=" mx-5  sm:w-6/12 sm:text-right sm:justify-self-end">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { duration: 0.5, type: "spring", stiffness: 70 },
                  opacity: { duration: 3 },
                }}
              >
                <div className=" text-white xl:text-4xl md:text-3xl  sm:text-2xl sm:block hidden text-4xl font-bold ">
                  <FlipLink href="#">Fund Management Company Ltd.</FlipLink>
                </div>
                <h1 className=" text-white block  sm:hidden text-4xl font-bold ">
                  Fund Management Company Ltd.
                </h1>
                <div className="h-0.5 w-full mt-3 rounded sm:bg-linear-to-r sm:from-transparent sm:to-blue-500  bg-linear-to-r from-blue-500 to-transparent"></div>
              </motion.div>
              <br></br>
              <div className=" ">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    x: {
                      delay: 0.3,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 70,
                    },
                    opacity: { delay: 0.3, duration: 2 },
                  }}
                  className=""
                >
                  <p className="text-slate-400 text-sm ">Estd: 2010</p>
                  <p className="text-slate-400 leading-relaxed ">
                    A public limited company has been established as a
                    subsidiary of Agricultural Development Bank Ltd. (a "A"
                    class licenced institution from Nepal Rastra Bank)
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vmo">
        <div className="flex items-center justify-center bg-white ">
          <div
            className="w-full h-screen flex sm:flex-row flex-col justify-center bg-neutral-50 sm:relative pt-10"
            style={{
              backgroundImage: "url('/images/worldmap.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                y: {
                  delay: 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 30,
                },
                opacity: { delay: 0.2, duration: 1 },
              }}
              className="sm:mt-0 mt-5 bg-white shadow-2xl rounded-xl sm:h-3/6 px-3 sm:w-4/12 sm:-rotate-3 sm:absolute sm:left-20 sm:top-24 flex flex-col text-center justify-center items-center "
            >
              <p className="text-2xl font-bold bg-linear-to-r from-[#F0465F] to-[#F05C46] inline-block text-transparent bg-clip-text ">
                Vision
              </p>
              <div className="h-0.5 w-9/12 bg-linear-to-r from-transparent via-slate-500 to-tranparent"></div>
              <p className="pt-5">
                " To be the most trusted and innovative investment partner,
                empowering individuals and businesses to achieve financial
                growth and stability through sustainable and strategic
                investments "
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                y: {
                  delay: 0.4,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 30,
                },
                opacity: { delay: 0.4, duration: 1 },
              }}
              className="sm:mt-0 mt-5 bg-white shadow-2xl rounded-xl sm:h-3/6 px-3 sm:w-5/12 sm:rotate-12 sm:absolute sm:right-20 sm:top-40 flex flex-col text-center justify-center items-center "
            >
              <p className="text-2xl font-bold ">Mission</p>
              <div className="h-0.5 w-9/12 shadow-lg bg-linear-to-r from-transparent  via-red-500 to-tranparent "></div>
              <p className="pt-5">
                " Our mission is to deliver superior investment solutions by
                leveraging expert insights, advanced technology, and a
                commitment to ethical practices. We aim to build long-term value
                for our clients, employees, and stakeholders by fostering a
                culture of excellence, innovation, and responsible investing. "
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="management">
        <div className="bg-neutral-800">
          <div className="">
            <div className="bg-neutral-800">
              <div className="flex  items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                  Board of Directors and core team
                </span>
              </div>
              <HorizontalScrollCarousel cards={directorEmployeeList} />
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="sm:flex h-[90vh] sm:flex-row gap-5 p-5  justify-center  text-white bg-linear-to-br from-slate-900  to-slate-800 ">
          <div className="sm:w-4/12 bg-slate-800 rounded-lg p-5 ">
            <div className="text-white text-2xl">Read about us</div>
            <hr className="h-px "></hr>
            <div className="pt-5 text-gray-300">
              {downloadList.map((downloadItem) => (
                <div
                  key={downloadItem.url}
                  className="text-sm p-2 hover:font-bold hover:text-gray-200 "
                >
                  <a href={downloadItem.url} target="_blank">
                    {downloadItem.fileName}
                  </a>
                  <hr className="opacity-20"></hr>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:w-3/12 bg-slate-800 rounded-lg p-5  ">
            <div className="text-white text-2xl">Let's talk</div>
            <hr></hr>
            <div className="text-sm">
              <div className="pt-5 text-sm text-gray-300">
                Meet us at 5th floor of Ratnapark Branch of Agricultural
                Development Bank Nepal, Ratnapark, Kathmandu Nepal
              </div>
              <span>
                <Phone className="text-[#09b9cd] text-sm inline-block " />{" "}
                <span className="text-[#ffda00c9]">9851-222-222</span>
              </span>
              <p>
                <Mail className="text-[#09b9cd] text-sm inline-block" />{" "}
                <span className="text-[#ffda00c9]">fmcl@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="sm:w-4/12 bg-slate-800 rounded-lg p-5 ">
            <div className="text-white text 2xl">
              <div className="text-white text-2xl">Useful links</div>
              <hr></hr>
              <div className="pt-5  ">
                {usefullinks.map((link) => (
                  <div
                    key={link.url}
                    className="text-sm p-2 hover:font-bold hover:text-gray-200 "
                  >
                    <a
                      className="text-sm text-gray-300 hover:text-gray-200"
                      href={link.url}
                      target="_blank"
                    >
                      {link.linkName}
                    </a>
                    <hr className="opacity-20"></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
