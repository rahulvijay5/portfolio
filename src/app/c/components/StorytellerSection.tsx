import {
  Bike,
  BookOpen,
  Compass,
  Feather,
  MapPin,
  Mountain,
  Train,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const StorytellerSection: React.FC = () => {
  const demoUrl =
    "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <section
        className="min-h-screen bg-amber-50 dark:bg-gray-900 snap-start py-16 px-4 flex items-center justify-center"
        id="storyteller"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 dark:text-amber-500 text-amber-900">
            Storyteller at Heart
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div
              className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex-1 transform transition-all duration-1000 translate-y-0 opacity-100`}
            >
              <h3 className="text-2xl font-serif mb-4 text-amber-800 dark:text-amber-300 dark:text-amber-300">
                Weaving Tales from My Journeys
              </h3>
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300 font-serif">
                My life is a treasure trove of stories, each one more
                fascinating than the last. From the bustling streets of Mathura
                during Holi to the serene beauty of Meghalaya's Khasi hills,
                I've experienced it all.
              </p>
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-amber-600 mr-2" />
                <span className="text-gray-600 dark:text-gray-400 italic">
                  Mathura • Meghalaya • Beyond
                </span>
              </div>
              <div className="border-t border-amber-200 pt-4">
                <p className="text-gray-700 dark:text-gray-300 font-serif">
                  My friends often gather around, eager to hear about my latest
                  adventure. Storytelling is not just a passion but a way to
                  relive the experiences and share the joy of travel with
                  others.
                </p>
              </div>
            </div>

            <div
              className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex-1 transform transition-all duration-1000 delay-300 translate-y-0 opacity-100`}
            >
              <div className="relative mb-6">
                <Image
                  src={`https://images.unsplash.com/photo-1593836788196-9fd68e904906?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=300&width=400&text=Story+Snapshot`}
                  alt="Story snapshot"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md shadow"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-100 p-3 rounded-full shadow">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <h4 className="text-xl font-serif mb-4 text-amber-800 dark:text-amber-300">
                Featured Story
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-serif mb-4">
                The vibrant colors of Holi in Mathura paint not just the
                streets, but the souls of all who participate. As I stood in the
                heart of the festivities, I felt the pulse of tradition beating
                through the ancient city...
              </p>
              <button className="flex items-center text-amber-600 dark:text-amber-500 hover:text-amber-800 hover:dark:text-amber-300 transition-colors">
                <span className="mr-2">Read full story</span>
                <Feather className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <q className="text-2xl font-serif text-amber-800 dark:text-amber-500 italic">
              Every journey is a story waiting to be told.
            </q>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorytellerSection;