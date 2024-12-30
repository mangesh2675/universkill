'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="bg-black bg-opacity-50 fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-25_200633-removebg-preview-snIgv527u3xwBUVTPkV2jEf8Vr5T4e.png"
              alt="UniverSkill Logo"
              width={120}
              height={120}
              className="w-auto h-16"
            />
          </Link>
        </motion.div>
        <nav>
          <motion.ul 
            className="flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li><Link href="#services" className="hover:text-red-500 transition">Services</Link></li>
            <li><Link href="#process" className="hover:text-red-500 transition">Process</Link></li>
            <li><Link href="#testimonials" className="hover:text-red-500 transition">Testimonials</Link></li>
            <li><Link href="#contact" className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition">Contact</Link></li>
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

