"use client";
import { useEffect, useState } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import ImageUpload from "./components/fileupload";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";



export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { toast } = useToast();

  const handleUploaderClick = () => {
    if (!isAuthorized) {
      setIsModalOpen(true);
    }
  };

  const handlePasswordSubmit = () => {
    console.log(password);
    if (password === process.env.NEXT_PUBLIC_UPLOAD_PASSWORD) {
      setIsAuthorized(true);
      setIsModalOpen(false);
      toast({
        title: "Access Granted",
        description: "You can now use the file uploader.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Try again!",
        variant: "destructive",
      });
    }
    setPassword("");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handlePasswordSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [password]);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="group text-center select-none z-10">
        {isAuthorized ? (
          <p className="group text-xl mb-8 mx-8 group-hover:text-green-600 hover:font-bold transition-all duration-150">
            You can use this page... Have a nice day.
          </p>
        ) : (
          <p className="group text-xl mb-8 mx-8 group-hover:text-red-600 hover:font-bold transition-all duration-150">
            Kindly{" "}
            <span className="font-bold group-hover:text-4xl transition-all duration-500 group-hover:text-red-600">
              don't
            </span>{" "}
            use this, this page is for Rahul only.
          </p>
        )}

        <div
          className="h-[60vh] md:w-[60vw] w-screen md:mx-0 md:p-10 p-6 border bg-black shadow-sm shadow-white/50 rounded-lg cursor-pointer"
          id="file_uploader"
          onClick={handleUploaderClick}
        >
          {isAuthorized ? (
            <ImageUpload disabled={false} />
          ) : (
            <ImageUpload disabled={true} />
          )}
        </div>
      </div>

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] absolute inset-0 z-0"
        )}
      />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              I told you{" "}
              <span className="text-red-500 font-bold text-2xl">not</span> to
              use this page!
            </DialogTitle>
            <DialogDescription/>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <Input
              type="password"
              placeholder="Now tell the password!"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="max-w-sm"
            />
            <Button onClick={handlePasswordSubmit}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
