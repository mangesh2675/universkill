'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-serif font-bold mb-6 text-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          From Learning to Leading in the Digital Age
        </motion.h1>
        <motion.p 
          className="text-10l mb-8 max-w-2xl mx-auto text-grey-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empower your journey with UniverSkill. We provide cutting-edge solutions to help you master the digital landscape and lead in your industry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-purple-700 hover:bg-purple-800 text-white">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

