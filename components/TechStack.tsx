'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const techStack = [
  {
    name: 'Bitcoin',
    url: 'https://bitcoin.org',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G9cnlWXpInIoaiy4Y7FD67SpJ2FD7K.png'
  },
  {
    name: 'Ethereum',
    url: 'https://ethereum.org',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4pGdWDpRskKPgzX7IuXy49bvmbPyMI.png'
  },
  {
    name: 'Solana',
    url: 'https://solana.com',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gMPrMAkqXxyxRNpgyNxqdEwAIO49xo.png'
  },
  {
    name: 'React',
    url: 'https://react.dev',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R8oVnjorQT9o10zFK3cpqHis3cMoLw.png'
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PYFopaxq8sr96cWbESwij7g3wAWxFz.png'
  },
  {
    name: 'Python',
    url: 'https://python.org',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-37SMU9n5JOvx6quMLdbbrFIOSrl6LQ.png'
  },
  {
    name: 'Angular',
    url: 'https://angular.io',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T8BQRqcbbQoQo2EubEUx2tbwyySfQ5.png'
  },
  {
    name: 'Vue.js',
    url: 'https://vuejs.org',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CaOfDbpzh9iTVr40VSpDE0QHlfSgcq.png'
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i380ppgcIACe1MOu6yHIfxV2LlMQKo.png'
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com',
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lHW2FXKktZGm8Git8NRVi0piuaBeGj.png'
  }
]

export default function TechStack() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Tech Stack
        </motion.h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex justify-center"
              >
                <Link 
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-24 h-24 relative bg-black bg-opacity-50 rounded-lg p-4 backdrop-blur-sm">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      width={96}
                      height={96}
                      className="object-contain filter group-hover:brightness-125 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-blue-400 whitespace-nowrap">{tech.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

