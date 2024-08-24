import DotPattern from "@/components/magicui/dot-pattern";
import ImageUpload from "./components/fileupload";
import { cn } from "@/lib/utils";


export default function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[60vh] md:w-[60vw] w-screen mx-4 md:mx-0 md:p-10 p-6 border bg-black shadow-sm shadow-white/50 rounded-lg">
      
      <ImageUpload />
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
    </div>
  );
}
