import Image from "next/image";
import {
  ArrowRight,
  Bell,
  ChevronLeft,
  ChevronRight,
  Globe,
  Hotel,
  Plane,
  Quote,
  Search,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { demoUrl } from "@/lib/constants";
import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 text-black",
        // light styles
        "border-gray-950/[.4] bg-gray-950/[.1] hover:bg-gray-950/[.5]"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Home() {
  const WorldMap = () => (
    <svg viewBox="0 0 1000 500" className="w-full h-auto">
      <path
        d="M150,50 L850,50 L850,450 L150,450 Z"
        fill="#f1f5f9"
        stroke="#e2e8f0"
        strokeWidth="2"
      />
      {/* Add more detailed path for continents here */}
    </svg>
  );

  interface PriceBubbleProps {
    x: string;
    y: string;
    airline: string;
    price: string;
    highlight?: boolean; // Optional prop, with a default value
  }

  const PriceBubble: React.FC<PriceBubbleProps> = ({
    x,
    y,
    airline,
    price,
    highlight = false,
  }) => (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="-50"
        y="-15"
        width="100"
        height="30"
        rx="15"
        ry="15"
        fill={highlight ? "#f97316" : "#1f2937"}
      />
      <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12">
        {airline} ${price}
      </text>
    </g>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">
            <span className="text-orange-500">Trip</span>
            <span className="text-white">Venture</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-orange-500">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            Service
          </a>
          <a href="#" className="text-gray-400 hover:text-orange-500">
            Blogs
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Globe className="text-gray-400 h-5 w-5" />
          <Bell className="text-gray-400 h-5 w-5" />
          <Button
            variant="default"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Sign In
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12 ">
        <div className="relative w-full">
          <Image
            src={`${demoUrl}?height=600&width=1200`}
            alt="Travel destination"
            width={1200}
            height={600}
            className="rounded-3xl h-[80vh] object-cover w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <p className="text-orange-500 text-lg mb-2">Your Travel Services</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Best Escape
              <br />
              Choice
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Experience the Best in Travel: A Journey Beyond Your Imagination,
              Where Every Destination Becomes an Unforgettable Adventure.
            </p>

            <Card className="bg-white text-gray-900 p-6 rounded-3xl max-w-4xl">
              <Tabs defaultValue="flight">
                <TabsList className="mb-4 p-0 rounded-none">
                  <TabsTrigger
                    value="flight"
                    className="text-lg rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-none"
                  >
                    <Plane />
                    Flight
                  </TabsTrigger>
                  <TabsTrigger
                    value="hotel"
                    className="text-lg rounded-tr-lg rounded-tl-none rounded-br-none rounded-bl-none"
                  >
                    <Hotel />
                    Hotel
                  </TabsTrigger>
                </TabsList>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label
                        htmlFor="from"
                        className="block text-sm font-medium text-gray-700"
                      >
                        From
                      </label>
                      <Input id="from" placeholder="Jakarta" className="mt-1" />
                      <p className="text-xs text-gray-500 mt-1">
                        CGK, South Asia, Indonesia
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="to"
                        className="block text-sm font-medium text-gray-700"
                      >
                        To
                      </label>
                      <Input id="to" placeholder="Hanoi" className="mt-1" />
                      <p className="text-xs text-gray-500 mt-1">
                        Noi Bai International Airport
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Flight Date
                      </label>
                      <Input
                        id="date"
                        type="date"
                        defaultValue="2024-08-29"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="passengers"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Seat
                      </label>
                      <Input
                        id="passengers"
                        placeholder="1 Passengers"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                    Search Flight
                    <Search className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Tabs>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gray-800 text-white overflow-hidden">
            <Image
              src={`${demoUrl}?height=300&width=400&text=City`}
              alt="City view"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                View Traveller Profile
              </h3>
              <p className="text-gray-300">
                Explore travel experiences and recommendations from fellow
                adventurers.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-orange-500 text-white">
            <CardContent className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mb-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-2">RSVP To Linkups</h3>
              <p className="text-white">
                Experience the Best in Travel: A Journey Beyond Your
                Imagination, Where Every Destination Becomes an Unforgettable
                Adventure. Experience the Best in Travel: A Journey Beyond Your
                Imagination, Where Every Destination Becomes an Unforgettable
                Adventure.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 text-white overflow-hidden">
            <Image
              src={`${demoUrl}?height=300&width=400&text=Hostel`}
              alt="Hostel view"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Join Your Hostel&apos;s Chat
              </h3>
              <p className="text-gray-300">
                Connect with fellow travelers and share experiences in
                real-time.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <section className="py-16 bg-white text-black min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 h-full min-h-screen justify-between">
            <div className="lg:w-1/2 ">
              <h3 className="text-orange-500 font-semibold mb-2">
                Our Features
              </h3>
              <h2 className="text-5xl font-bold mb-6">
                Expand Your
                <br />
                Network
              </h2>

              <div className="w-full flex justify-end">
                <div className="bg-gray-100 rounded-xl p-4 mb-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold mb-1">
                      Earn 2X points on TripVenture app
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Book now and earn double points on all your travels.
                    </p>
                  </div>
                  <div className="bg-black rounded-full p-2">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <div className="bg-gray-100 rounded-xl p-2 h-full mb-4 flex w-2/3 items-center justify-between">
                  <div>
                    <h4 className="font-bold mb-1">
                      Get Insider Prices Only for You
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Unlock exclusive deals and save big with our special
                      prices!
                    </p>
                  </div>
                  <div className="bg-black rounded-full p-2">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="bg-black text-white rounded-xl p-2 inline-block">
                  <p className="text-3xl font-bold">12k</p>
                  <p className="text-sm">Traveller Users</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 flex text-black gap-6">
              <Image
                src={`${demoUrl}?text=iPhone+Mockup`}
                alt="TripVenture App"
                width={300}
                height={600}
                className="rounded-3xl shadow-2xl w-1/2"
              />
              <div className="w-1/2 relative">
                <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm mb-2">
                    Experience the Best in Travel: A Journey Beyond Your
                    Imagination, Where Every Destination Becomes an
                    Unforgettable Adventure.
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center text-sm">
                    Search Flight
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4">
                  <p className="text-sm mb-1">Scan Here</p>
                  <Image
                    src={`${demoUrl}?text=QR+Code`}
                    alt="QR Code"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-6xl font-bold mb-4">73K+</h3>
              <p className="text-gray-600">
                Join the millions who trust us for their travel plans. Our
                platform has successfully handled over 1 million bookings.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold mb-4">99%</h3>
              <p className="text-gray-600">
                Our customers love us! With a 95% satisfaction rate, we pride
                ourselves on providing exceptional service.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold mb-4">1200</h3>
              <p className="text-gray-600">
                Explore the world with us! We offer travel packages to over 200
                destinations, giving you a wide range of options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-white p-8 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-orange-500 font-semibold mb-2">Our Features</h3>
            <h2 className="text-5xl font-bold text-slate-700 mb-4">
              Get The Best
              <br />
              Price Offer Here
            </h2>
            <p className="text-gray-600 mb-4 max-w-2xl">
              Find unbeatable deals and save more on your travels with our best
              price offers! Where Every Destination Becomes an Unforgettable
              Adventure. Experience the Best in Travel: A Journey
            </p>
            <button className="bg-white text-orange-500 border border-orange-500 px-6 py-2 rounded-full flex items-center hover:bg-orange-50 transition-colors">
              Explore More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="relative">
                <WorldMap />
                <PriceBubble
                  x="200"
                  y="150"
                  airline="American Airlines"
                  price="511.23"
                />
                <PriceBubble x="300" y="200" airline="Qatar" price="289.71" />
                <PriceBubble
                  x="400"
                  y="100"
                  airline="Singapore Airlines"
                  price="339.51"
                />
                <PriceBubble
                  x="500"
                  y="250"
                  airline="Garuda Indonesia"
                  price="345.51"
                  highlight={true}
                />
                <PriceBubble
                  x="600"
                  y="150"
                  airline="Lufthansa"
                  price="276.22"
                />
                <PriceBubble x="700" y="200" airline="Qatar" price="231.42" />
                <PriceBubble
                  x="800"
                  y="300"
                  airline="Emirates"
                  price="137.82"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gray-100 p-6 rounded-xl text-black">
                <div className="flex justify-between mb-4">
                  <select className="bg-white border border-gray-300 rounded-md px-3 py-2">
                    <option>All Airlines</option>
                  </select>
                  <select className="bg-white border border-gray-300 rounded-md px-3 py-2">
                    <option>One-Way</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      From
                    </label>
                    <div className="flex items-center">
                      <Plane className="h-5 w-5 mr-2 text-gray-400" />
                      <div>
                        <div className="font-semibold">Jakarta (CGK)</div>
                        <div className="text-sm text-gray-500">
                          CGK, South Asia, Indonesia
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      To
                    </label>
                    <div className="flex items-center">
                      <Plane className="h-5 w-5 mr-2 text-gray-400" />
                      <div>
                        <div className="font-semibold">Hanoi (HAN)</div>
                        <div className="text-sm text-gray-500">
                          Noi Bai International Airport, Hanoi, Vietnam
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-white p-4 rounded-lg flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Flight Date
                      </label>
                      <div className="font-semibold">Fri, 29 Aug</div>
                      <div className="text-sm text-gray-500">2024</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Seat
                      </label>
                      <div className="font-semibold">1 Passengers</div>
                      <div className="text-sm text-gray-500">Economy</div>
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    Search Flight
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-500 text-xl mb-8">AS SEEN ON</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Marquee pauseOnHover className="[--duration:20s]">
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* What They Say About Us Section */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h3 className="text-orange-500 font-semibold mb-2">
                Our Features
              </h3>
              <h2 className="text-4xl font-bold mb-4">
                What They
                <br />
                Say About Us
              </h2>
            </div>
            <div className="flex items-center">
              <Image
                src={`${demoUrl}?text=Trustpilot`}
                alt="Trustpilot"
                width={100}
                height={30}
                className="h-32 w-32 rounded-full"
              />
              <div className="ml-4">
                <div className="text-2xl font-bold">Excellent</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < 4 ? "text-orange-500" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Trustscore 4.7 | 2,098 Reviews
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <Image
              src={`${demoUrl}?text=Traveler`}
              alt="Esther Howard"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <div className="flex justify-between">
              <div className=" w-3/4 flex justify-end flex-col">
                <div className="flex items-center mb-4 text-lg justify-between">
                  <div>
                  <span className="text-gray-500">(1/2098) Reviews</span>
                  <div className="ml-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  </div>
                  <span className="ml-2 font-bold">4.7/5.0</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col">
                    <span className="flip"><Quote/></span>
                <blockquote className="text-2xl text-gray-700 mb-6">
                  &quot;Booking flights has never been easier! I love how intuitive
                  and user-friendly this website is. Saved so much time and
                  hassle booking my last-minute flight. Highly recommend!&quot;
                </blockquote>
                <div>
                  <h4 className="font-bold">Esther Howard</h4>
                  <p className="text-gray-600">World Traveller, USA</p>
                </div>
                </div>
              </div>
              <div className="flex justify-end items-end mt-4">
                <button className="p-2 rounded-full border-2 border-orange-500 mr-4 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center h-14 w-14 ">
                  <ChevronLeft className="h-6 w-6 text-orange-500" />   
                </button>
                <button className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors flex items-center justify-center h-14 w-14">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-100">
        {/* Previous content would go here */}

        {/* Meet Our Community Section */}
        <section className="bg-orange-500 py-16">
          <div className="container mx-auto px-4">
            <div className="relative">
              {/* Community member avatars */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 90}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Image
                    src={`${demoUrl}?text=${i + 1}`}
                    alt={`Community member ${i + 1}`}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white h-24 w-24 "
                  />
                </div>
              ))}

              {/* Featured destinations */}
              <div className="flex justify-center space-x-4">
                <div className="bg-white rounded-2xl p-4 shadow-lg -rotate-6 border border-black text-black translate-x-4">
                  <Image
                    src={`${demoUrl}?text=Ngong+Ping+360`}
                    alt="Ngong Ping 360 Cable Car"
                    width={200}
                    height={150}
                    className="rounded-lg mb-2 h-48 w-64"
                  />
                  <h3 className="font-semibold">Ngong Ping 360 Cable Car</h3>
                  <p className="text-sm text-gray-600">Lantau, Hong Kong</p>
                  <div className="flex items-center mt-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <Image
                          key={i}
                          src={`${demoUrl}?text=${i + 1}`}
                          alt={`User ${i + 1}`}
                          width={24}
                          height={24}
                          className="rounded-full border border-white h-8 w-8"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-2">+2</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-lg rotate-6 border border-black text-black translate-y-8 -translate-x-4">
                  <Image
                    src={`${demoUrl}?text=Hong+Kong+Disneyland`}
                    alt="Hong Kong Disneyland Park"
                    width={200}
                    height={150}
                    className="rounded-lg mb-2 h-48 w-64"
                  />
                  <h3 className="font-semibold">Hong Kong Disneyland Park</h3>
                  <p className="text-sm text-gray-600">Lantau, Hong Kong</p>
                  <div className="flex items-center mt-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <Image
                          key={i}
                          src={`${demoUrl}?text=${i + 1}`}
                          alt={`User ${i + 1}`}
                          width={24}
                          height={24}
                          className="rounded-full border border-white h-8 w-8"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-2">+2</span>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white text-center mb-4 mt-16">
              Meet Our Community
            </h2>
            <p className="text-white text-center mb-6">
              Experience the Best in Travel: A Journey Beyond Your Imagination.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-16 text-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div className="mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-4">
                  Let&apos;s Enjoy Your
                  <br />
                  Journey with Us
                </h2>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    [ Instagram ]
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    [ Twitter X ]
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    [ LinkedIn ]
                  </Link>
                  <Link href="#" className="text-gray-500 hover:text-gray-700">
                    [ Youtube ]
                  </Link>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-600 mb-4">
                  Experience the Best in Travel: A Journey Beyond
                  <br />
                  Your Imagination, Where Every Destination
                  <br />
                  Becomes
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full flex items-center">
                  Join Us Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0">
                <h1 className="text-4xl font-bold">
                  <span className="text-orange-500">Trip</span>
                  <span className="text-gray-900">Venture</span>
                  <span className="text-purple-600">©</span>
                </h1>
              </div>
              <div className="text-gray-600 mb-8 md:mb-0">
                Hellototravel@tripventure.com
              </div>
              <div className="text-gray-500 text-sm">
                @copyright 2024, Tripventure All Rights Reserved
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-6">
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                About Us
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700">
                Blogs
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
