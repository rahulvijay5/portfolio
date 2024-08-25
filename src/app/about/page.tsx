import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `
![Rahul](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)

Hello! I'm Rahul, a passionate traveler, adventurer, and self-taught programmer hailing from the small town of Kekri in Rajasthan. My journey has been a blend of academic pursuits and soul-stirring adventures, shaped by the diverse landscapes and cultures of India. Raised in a family that cherished the spirit of exploration, I inherited my father’s love for travel and a deep-seated curiosity to discover the unknown.

My formal education took me through the bustling streets of Kota, where I prepared for IIT JEE and secured a spot at LNMIIT, Jaipur. However, the most valuable lessons I’ve learned came from beyond the classroom. With a camera in hand and a heart full of wanderlust, I’ve roamed the deserts of Rajasthan, captured the vibrant festivals, and scaled the serene heights of the Himalayas. Each journey, whether solo or with companions, has been meticulously planned, focusing on crafting experiences that turn into lifelong memories.

In parallel to my adventures, I’ve immersed myself in the world of coding. For the past two years, I’ve been a self-taught programmer, often finding inspiration in the quiet hours of the night. My passion for development is fueled by a desire to build meaningful applications that make an impact. I’m currently seeking an exciting software development opportunity, ideally in a startup environment where I can contribute and grow, blending my technical skills with my creative drive.

![Rahul](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)
My ideology is simple: life is a collection of stories waiting to be told. Whether it’s through code or a camera lens, I’m here to capture every moment, every experience, and share it with the world. I believe that every trip, every line of code, and every adventure is a step towards creating something beautiful and unforgettable.

Let's get connected!

Rahul`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Rahul and his travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Rahul and his travel adventures",
      images: [
        signOgImageUrl({
          title: "Rahul",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header title={"About Me"} />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
