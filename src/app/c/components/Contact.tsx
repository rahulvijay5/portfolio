import React from "react";
import Link from "next/link";
import { ArrowUpRight, LucideArrowUpRight } from "lucide-react";
import { socialHandles } from "@/lib/constants";

// I know this is bad way of doing it, but i am in hurry right now, so bear it up.

export function ContactPage({ purpose }: { purpose: "t" | "c" }) {
  if (purpose == "c") {
    // for create page contact section.
    return (
      <div
        className="h-screen bg-white dark:bg-gradient-to-bl dark:from-gray-800 dark:to-gray-900 text-gray-900  dark:text-gray-100 transition-colors duration-300 font-serif flex items-center justify-center md:snap-start"
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
                  {Object.entries(socialHandles).map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      className="block text-xl font-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                    >
                      {social.name}
                    </Link>
                  ))}
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
              or visit the
              <Link
                href="/t"
                className="text-xl hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-colors duration-200 flex"
              >
                Other Side <ArrowUpRight className="w-3 h-3" />
              </Link>
              then?
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // for tech page contact section.
    return (
      <div
        className="h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 font-serif flex items-center justify-center md:snap-start"
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
                <div className="grid grid-cols-2 items-center gap-2 justify-center">
                  {Object.entries(socialHandles).map(([name, social]) => (
                    <Link
                      key={name}
                      href={social.url}
                      className={`block text-xl font-light ${
                        name == "Email" ? "hidden" : ""
                      } hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300`}
                    >
                      {social.name}
                    </Link>
                  ))}
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
              or visit the
              <Link
                href="/c"
                className="text-xl hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-colors duration-200 flex"
              >
                Other Side <ArrowUpRight className="w-3 h-3" />
              </Link>
              then?
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
