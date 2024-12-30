'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    title: '100+ Customers Served',
    description: 'We have helped more than 100+ web3 startups & founders...'
  },
  {
    title: '150+ Products Built',
    description: 'By launching 150+ Products in the NFT, DeFi, gaming, infra and other web3 segments across different EVM & Rust-based chains...'
  },
  {
    title: '$100M+ Revenue Generated',
    description: 'Which have led them to raise & generate over $100M in funding & revenue.'
  }
]

export default function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black bg-opacity-80 border-purple-500/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

