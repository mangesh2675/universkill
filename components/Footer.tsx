'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-serif font-bold mb-4">UniverSkill</h3>
            <p className="mb-4">Empowering your digital journey</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-red-500"><Facebook /></Link>
              <Link href="#" className="hover:text-red-500"><Twitter /></Link>
              <Link href="#" className="hover:text-red-500"><Instagram /></Link>
              <Link href="#" className="hover:text-red-500"><Linkedin /></Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500">Web Development</Link></li>
              <li><Link href="#" className="hover:text-red-500">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-red-500">App Development</Link></li>
              <li><Link href="#" className="hover:text-red-500">Custom Software</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-500">About Us</Link></li>
              <li><Link href="#" className="hover:text-red-500">Careers</Link></li>
              <li><Link href="#" className="hover:text-red-500">Blog</Link></li>
              <li><Link href="#" className="hover:text-red-500">Contact</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Tech Street</p>
            <p>San Francisco, CA 94107</p>
            <p>Email: info@universkill.com</p>
            <p>Phone: (123) 456-7890</p>
          </motion.div>
        </div>
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 UniverSkill. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

