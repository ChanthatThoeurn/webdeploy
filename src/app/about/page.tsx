'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { rm } from "fs";

export default function AboutUs() {
  // Team Members
  const teamMembers = [
    { name: "Lor Vengroth", image: "/team/vengroth.jpg" },
    { name: "Thouern Chanthat", image: "/team/chanthat.jpg" },
    { name: "Lut Lina", image: "/team/lina.jpg" },
    { name: "Bo Vibol", image: "/team/vibol.jpg" },
    { name: "Reakk", image: "/team/reakk.jpg" },
    { name: "En Sokhim", image: "/team/sokhim.jpg" },
    { name: "Suern Bomnorng", image: "/team/bomnorng.jpg" },
    { name: "Heang Minea", image: "/team/minea.jpg" },
  ];

  return (
    <main className="w-full h-fit bg-white dark:bg-[#0b1a2f] flex flex-col items-center justify-center">

      {/* Hero Section */}
      <article className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src="/hotel-beach-pool-resort.jpg"
          alt="Hotel"
          fill
          className="object-cover brightness-75"
          priority
        />

        <motion.div
          className="absolute inset-0 flex items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-xl px-10 text-white">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to my Botum Hotel
            </h1>
            <p className="text-lg opacity-90">
              Experience comfort, elegance, and exceptional service.
            </p>
          </div>
        </motion.div>
      </article>

      {/* Content Section */}
      <section className="w-full h-fit my-14 xl:px-35 sm:px-3">
        <motion.div
          className="w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-black mb-4">About Our Team</h1>
          <p className="w-full max-w-[800px] px-4 mx-auto text-center text-[17px] text-black leading-relaxed">
            At Camp Booking, we’re passionate about simplifying travel planning.
            Our platform empowers millions to book accommodations and unique
            experiences worldwide.
          </p>
        </motion.div>

        {/* Who We Are */}
        <article className="w-full flex flex-col my-20 justify-start xl:h-[25rem] xl:flex-row md:justify-between sm:h-fit gap-10">
          <motion.div
            className="h-full flex flex-col justify-center xl:w-[50%] sm:w-full"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl mb-4 font-bold text-black">Who are we?</h3>
            <p className="text-[17px] text-black xl:w-[80%] sm:w-full">
              We are first-year IT students at ISTAD building a modern hotel
              booking website as our final project.
            </p>
          </motion.div>

          <motion.div
            className="relative xl:w-1/2 md:w-full h-[25rem] rounded-2xl overflow-hidden"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/sala.jpg"
              alt="Scenic"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </article>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h3 className="text-4xl font-bold text-black mb-4">Our Vision & Mission</h3>

          <h4 className="text-3xl text-black mb-2">Our Vision</h4>
          <p className="text-[17px] text-black">
            To create a seamless and modern hotel booking experience for
            everyone.
          </p>

          <h4 className="text-3xl text-black mb-2 mt-6">Our Mission</h4>

          <ul className="space-y-2">
            <li className="text-[17px] text-black">
              Apply IT knowledge to build a practical web application.
            </li>
            <li className="text-[17px] text-black">
              Showcase teamwork and innovation using Next.js.
            </li>
            <li className="text-[17px] text-black">
              Deliver a project that reflects real-world problem-solving.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Team Section */}
      <div className="w-full bg-white text-black py-20 px-4">

        {/* Lecturer */}
        <motion.div
          className="max-w-xl mx-auto text-center mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-black/40 p-8 rounded-2xl shadow-lg">
            <motion.div
              className="flex justify-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/cher.jpg"
                width={150}
                height={150}
                alt="Lecturer"
                className="rounded-full border-4 border-blue-500 object-cover"
              />
            </motion.div>

            <h2 className="text-2xl font-bold mb-2">Ing Davan</h2>
            <p className="text-blue-400 font-semibold mb-4">LECTURER / WEB-DESIGN</p>
            <p className="text-gray-300 leading-relaxed">
              Inspires the next generation of designers through web design.
            </p>
          </div>
        </motion.div>

        {/* Team Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold">Our Team</h2>
          <p className="text-gray-400 mt-2">The people behind your adventures</p>
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow-md text-center bg-white hover:shadow-xl transition cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >

              {/* FIXED IMAGE */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-400 font-semibold mt-1">Team Member</p>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </main>
  );
}
