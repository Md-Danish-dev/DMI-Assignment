import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [subText, setSubText] = useState("");
  const fullSubText = "From brand kit to launch-ready content, websites & apps — powered by AI.";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setSubText(fullSubText.slice(0, index));
      index++;
      if (index > fullSubText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-start px-6 py-20 text-center bg-white min-h-screen w-full overflow-hidden">
      {/* DMI badge and animated dots */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-6"
      >
        <div className="bg-[#e30613] text-white font-bold px-5 py-2 rounded-full text-lg shadow-md text-xl">
          DMI
        </div>
        <div className="flex gap-2 mt-3">
          <motion.span className="w-2 h-2 rounded-full bg-[#e30613]" animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}></motion.span>
          <motion.span className="w-2 h-2 rounded-full bg-[#e30613]" animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}></motion.span>
          <motion.span className="w-2 h-2 rounded-full bg-[#e30613]" animate={{ y: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}></motion.span>
        </div>
      </motion.div>

      {/* Headline + Subheadline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center w-full px-2"
      >
        <h1 className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Design Made
        </h1>
        <h1 className="text-[#e30613] font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Intelligent
        </h1>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 min-h-[3rem]">
          {subText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-[#e30613] hover:scale-105 hover:bg-red-700 transform transition duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-md">
            Try the Demo
          </button>
          <button className="bg-white hover:scale-105 hover:bg-gray-100 transform transition duration-300 text-gray-800 border border-gray-300 px-6 py-3 rounded-xl font-medium shadow-sm">
            Join Waitlist
          </button>
        </div>
      </motion.div>
    </section>
  );
}
