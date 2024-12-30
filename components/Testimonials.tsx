'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'John Doe', role: 'CEO, TechCorp', content: 'UniverSkill has transformed our digital presence. Their expertise and dedication are unmatched.' },
  { name: 'Jane Smith', role: 'Founder, StartupX', content: 'Working with UniverSkill was a game-changer for our startup. They delivered beyond our expectations.' },
  { name: 'Alex Johnson', role: 'CTO, InnovateCo', content: 'The team at UniverSkill is incredibly skilled and professional. They turned our vision into reality.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#001F3F] bg-opacity-30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black bg-opacity-50 border-blue-700 hover:border-red-500 transition-colors duration-300">
                <CardContent className="pt-6">
                  <p className="mb-4 text-white">{testimonial.content}</p>
                </CardContent>
                <CardFooter className="flex items-center">
                  <Avatar className="mr-4">
                    <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-red-500">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

