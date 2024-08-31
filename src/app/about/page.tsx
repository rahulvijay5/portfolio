// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
// import { config } from "@/config";
// import { aboutMeContent } from "@/lib/constants";
// import { signOgImageUrl } from "@/lib/og-image";
// import Markdown from "react-markdown";

// export async function generateMetadata() {
//   return {
//     title: "About Me",
//     description: "Learn more about Rahul and his travel adventures",
//     openGraph: {
//       title: "About Me",
//       description: "Learn more about Rahul and his travel adventures",
//       images: [
//         signOgImageUrl({
//           title: "Rahul",
//           label: "About Me",
//           brand: config.blog.name,
//         }),
//       ],
//     },
//   };
// }

// const Page = async () => {
//   return (
//     <div className="container mx-auto px-5">
//       <Header title={"About Me"} />
//       <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
//         <Markdown>{aboutMeContent}</Markdown>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Page;

const page = () => 
  {
  return (
    <div className='flex h-screen w-screen items-center justify-center'><div className=''>From where did you actually find this page? tell me!</div></div>
  )
}

export default page