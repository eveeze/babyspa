"use client";
import React from "react";
import { motion } from "framer-motion";
import mergeClasses from "@/lib/twMerge";
const links = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Layanan", href: "/layanan" },
  { name: "Harga", href: "/harga" },
  { name: "Testimoni", href: "/testimoni" },
  { name: "Kontak", href: "/kontak" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-center mt-4">
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={mergeClasses(
          "flex space-x-4 p-2 bg-white rounded-full shadow-lg border-2 border-black"
        )}
      >
        {links.map((link) => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-black font-semibold cursor-pointer"
          >
            <a href={link.href}>{link.name}</a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
