'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

const steps = [
  { title: 'Requirements Gathering', description: 'We start by understanding your vision and capturing all your requirements.' },
  { title: 'Research & Planning', description: 'We analyze market trends and create a detailed project plan.' },
  { title: 'Design & Prototyping', description: 'Our creative team brings your vision to life with initial designs and prototypes.' },
  { title: 'Development & Testing', description: 'We build a robust solution and perform rigorous testing.' },
  { title: 'Deployment & Support', description: 'We ensure a smooth launch and provide ongoing support and maintenance.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black bg-opacity-50 border-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-500">
                    <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-4">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

