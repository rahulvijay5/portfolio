import Image from "next/image";
import React from "react";

const ExploredTerritoriesSection: React.FC = () => {
  const locations = [
    "Ladakh",
    "Dharamshala",
    "Dalhousie",
    "Manali",
    "Kullu",
    "Mussoorie",
    "Harsil",
    "Utarkashi",
    "Dehradun",
    "Rishikesh",
    "Nainital",
    "Pokhra",
    "Kathmandu",
    "Gangtok",
    "Darjeeling",
    "Guwahati",
    "Shillong",
    "Cherrapunji",
  ];

//   if wanted to use google maps someday then:

//   const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

//   // Generate the Google Maps embed URL with markers for each location
//   const mapUrl = `https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAPS_API_KEY}&q=${locations.join(
//     "|"
//   )}&zoom=5`;

  return (
    <section
      className="bg-gray-100 dark:bg-gradient-to-bl dark:from-gray-800 dark:to-gray-900 py-16 px-4 font-serif flex items-center justify-center snap-start md:h-screen"
      id="terrioties"
    >
      <div className="max-w-6xl mx-auto min-h-[85vh]">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight">
          Explored Territories
        </h2>
        <h3 className="text-2xl text-gray-600 dark:text-gray-300 mb-8 italic">
          A Journey Across the Northern Himalayas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="md:space-y-24 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              My explorations have taken me across the majestic landscapes of
              the Himalayas, from the rugged beauty of Ladakh to the lush
              valleys of Meghalaya. These journeys have been more than mere
              travels; they've been profound experiences that have shaped my
              understanding of nature, culture, and self.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Each destination holds its own unique charm: the stark beauty of
              Ladakh, the spiritual aura of Dharamshala, the colonial echoes of
              Darjeeling, and the living root bridges of Cherrapunji. These
              places aren't just points on a map—they're chapters in an ongoing
              story of discovery and wonder.
            </p>
            <p className="text-gray-600 dark:text-gray-300 italic">
              And that's just the Himalayas—my travels across India have their
              own tales to tell.
            </p>
          </div>

          <div className="md:space-y-6 space-y-2 h-full">
          <div className="aspect-w-4 aspect-h-3 shadow-lg">
              {/* <iframe 
                src={mapUrl}
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe> */}
            </div>
            <div className="w-full h-[20vh] md:h-1/2 relative">
              <Image
                src={
                  "https://images.unsplash.com/photo-1724179016304-972febc1cc43?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=600&width=800&text=Photo+1"
                }
                alt="waste collected"
                layout="fill"
                className="object-cover h-full w-full rounded-t-lg"
              />
            </div>
            <div className="p-6 shadow-lg bg-white dark:bg-gray-800">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Journey Highlights
              </h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Witnessed the stark beauty of Ladakh's high-altitude deserts
                </li>
                <li>Explored the lush, living root bridges of Meghalaya</li>
                <li>
                  Trekked through the pristine Harsil Valley in Uttarakhand
                </li>
                <li>
                  Experienced the spiritual ambiance of Rishikesh and
                  Dharamshala
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploredTerritoriesSection;
