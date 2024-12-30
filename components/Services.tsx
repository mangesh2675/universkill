'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Palette, Globe, Zap, ShoppingCart, Share2, Megaphone, Search, PenTool } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { title: 'Web Development', description: 'Create responsive, high-performance web applications', icon: Globe },
  { title: 'UI/UX Design', description: 'Design intuitive and aesthetically pleasing interfaces', icon: Palette },
  { title: 'App Development', description: 'Build powerful mobile applications for iOS and Android', icon: Zap },
  { title: 'Custom Software', description: 'Develop tailor-made software solutions for your business', icon: Code },
  { title: 'E-commerce Website Creation', description: 'Build robust and scalable online stores', icon: ShoppingCart },
  { title: 'Social Media Management', description: 'Improve engagement and handle social media accounts', icon: Share2 },
  { title: 'Marketing', description: 'Create content and manage marketing campaigns', icon: Megaphone },
  { title: 'SEO', description: 'Optimize your website for search engines', icon: Search },
  { title: 'Designing for Existing Websites or Apps', description: 'Enhance and redesign your current digital products', icon: PenTool },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#001F3F] bg-opacity-30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black bg-opacity-50 border-blue-700 hover:border-red-500 transition-colors duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-purple-500 mb-4" />
                  <CardTitle className="text-purple-400">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

