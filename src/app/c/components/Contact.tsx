// "use client"

// import React, { useState } from 'react'
// import { Mail, MapPin, Globe, Twitter, Instagram, Send } from 'lucide-react'

// const ContactPage: React.FC = () => {
//   const [message, setMessage] = useState('')

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log('Message submitted:', message)
//     setMessage('')
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl md:text-5xl font-bold mb-8 relative inline-block">
//           Contact
//           <span className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-50"></span>
//         </h1>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
//               <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//               <ul className="space-y-4">
//                 <li className="flex items-center space-x-3">
//                   <MapPin className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
//                   <span>123 Travel Street, Adventure City, 12345</span>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <Mail className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
//                   <a href="mailto:hello@travelportfolio.com" className="hover:underline">hello@travelportfolio.com</a>
//                 </li>
//                 <li className="flex items-center space-x-3">
//                   <Globe className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
//                   <a href="https://www.travelportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.travelportfolio.com</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
//               <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
//               <div className="flex space-x-4">
//                 <a href="https://twitter.com/travelportfolio" target="_blank" rel="noopener noreferrer" className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300">
//                   <Twitter className="w-6 h-6" />
//                 </a>
//                 <a href="https://instagram.com/travelportfolio" target="_blank" rel="noopener noreferrer" className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors duration-300">
//                   <Instagram className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
//               <h2 className="text-2xl font-semibold mb-4">Latest from the Blog</h2>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="/blog/post-1" className="hover:underline">10 Must-Visit Hidden Gems in India</a>
//                 </li>
//                 <li>
//                   <a href="/blog/post-2" className="hover:underline">A Foodie's Guide to Street Food in Mumbai</a>
//                 </li>
//                 <li>
//                   <a href="/blog/post-3" className="hover:underline">Trekking the Himalayas: A Beginner's Guide</a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-1">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-1">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block mb-1">Message</label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-300 flex items-center space-x-2"
//               >
//                 <span>Send Message</span>
//                 <Send className="w-4 h-4" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactPage

import React from "react";
import Link from "next/link";
import { ArrowUpRight, LucideArrowUpRight } from "lucide-react";


// I know this is bad way of doing it, but i am in hurry right now, so bear it up.

export function ContactPage({ purpose }: { purpose: "t" | "c" }) {
  if (purpose == "c") {
    return (
      <div
        className="h-screen bg-white dark:bg-gradient-to-bl dark:from-gray-800 dark:to-gray-900 text-gray-900  dark:text-gray-100 transition-colors duration-300 font-serif flex items-center justify-center snap-start"
        id="contact"
      >
        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 md:mb-16 tracking-tight">
            Let&apos;s
            <br />
            <span className="transform -rotate-2 text-indigo-600 dark:text-indigo-400 flex">
              Connect <ArrowUpRight className="" />
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <Link
                  href="mailto:rahulviijay@gmail.com"
                  className="text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  rahulviijay@gmail.com
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <Link
                  href="tel:+919252993555"
                  className="text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  +91 9252993555
                </Link>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-lg font-semibold mb-2">Location</h2>
                <p className="text-xl font-light">
                  Kekri,
                  <br />
                  Rajasthan, India
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Socials</h2>
                <div className="space-y-2">
                  <Link
                    href="https://twitter.com/travelportfolio"
                    className="block text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://instagram.com/travelportfolio"
                    className="block text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-10">
            <p className="text-lg md:mb-2">
              You really got upto here? Surprising!
            </p>
            <div className="flex text-lg gap-2 items-end">
              Why not you see some of
              <Link
                href="/blog"
                className="text-xl hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-colors duration-200 flex"
              >
                My Blogs <ArrowUpRight className="w-3 h-3" />
              </Link>
              then?
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif flex items-center justify-center snap-start"
        id="contact"
      >
        <div className="container mx-auto px-4 py-4 md:py-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 md:mb-16 tracking-tight">
            Let&apos;s
            <br />
            <span className="transform -rotate-2 text-indigo-600 dark:text-indigo-400 flex">
              Connect <ArrowUpRight className="" />
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <Link
                  href="mailto:rahulviijay@gmail.com"
                  className="text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  rahulviijay@gmail.com
                </Link>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                <Link
                  href="tel:+919252993555"
                  className="text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  +91 9252993555
                </Link>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-lg font-semibold mb-2">Location</h2>
                <p className="text-xl font-light">
                  Kekri,
                  <br />
                  Rajasthan, India
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Socials</h2>
                <div className="space-y-2">
                  <Link
                    href="https://twitter.com/travelportfolio"
                    className="block text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://instagram.com/travelportfolio"
                    className="block text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-10">
            <p className="text-lg md:mb-2">
              You really got upto here? Surprising!
            </p>
            <div className="flex text-lg gap-2 items-end">
              Why not you see some of
              <Link
                href="/blog"
                className="text-xl hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-colors duration-200 flex"
              >
                My Blogs <ArrowUpRight className="w-3 h-3" />
              </Link>
              then?
            </div>
            {/* <h2 className="text-xl font-semibold mb-4">Latest from the Blog</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/blog/post-1" className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                10 Must-Visit Hidden Gems in India
              </Link>
            </li>
            <li>
              <Link href="/blog/post-2" className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                A Foodie's Guide to Street Food in Mumbai
              </Link>
            </li>
            <li>
              <Link href="/blog/post-3" className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                Trekking the Himalayas: A Beginner's Guide
              </Link>
            </li>
          </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
