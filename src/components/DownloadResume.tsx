"use client";
import React from "react";
import { Button } from "./ui/button";
import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";
import { CheckIcon, DownloadIcon } from "lucide-react";

const DownloadResume = () => {
  const handleResumeDownload = () => {
    console.log("Downloaded");
  };

  return (
    <div className="flex justify-start gap-14 items-center w-full">
      <Button onClick={handleResumeDownload} asChild>
        <AnimatedSubscribeButton
          buttonColor="transparent"
          buttonTextColor="#ffffff"
          subscribeStatus={false}
          initialText={
            <span className="group inline-flex items-center">
              Download My Resume{" "}
              <DownloadIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 h-4 w-4" />
              Resume Downloaded{" "}
            </span>
          }
        />
      </Button>
    </div>
  );
};

export default DownloadResume;
