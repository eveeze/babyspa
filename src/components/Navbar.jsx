"use client";
import React from "react";
import { motion } from "framer-motion";
import mergeClasses from "@/lib/twMerge";
import Link from "next/link";

const links = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Layanan", href: "/layanan" },
  { name: "Harga", href: "/harga" },
  { name: "Testimoni", href: "/testimoni" },
  { name: "Kontak", href: "/kontak" },
  { name: "Blog", href: "/blog" },
];

const bounceTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

const Navbar = () => {
  return (
    <nav className="flex justify-center mt-6">
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={mergeClasses(
          "flex space-x-6 px-6 py-3 bg-secondary rounded-full shadow-xl border-2 border-primary"
        )}
      >
        {links.map((link) => (
          <motion.li
            key={link.name}
            whileHover={{
              y: -3,
              boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", // Menghapus scale dari hover effect
            }}
            whileTap={{ scale: 0.95 }}
            transition={bounceTransition}
            className="px-3 py-1 text-primary font-semibold cursor-pointer hover:bg-quaternary hover:text-secondary rounded-full transition-colors duration-300"
          >
            <Link href={link.href}>{link.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
