"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import TypingAnimation from "@/components/magicui/typing-animation";
import { userAgent } from "next/server";
import { GuestbookEntry } from "@/lib/types";
import Link from "next/link";

const streamingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [conversation, setConversation] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [currentStep, setCurrentStep] = useState(4);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [weirdMessage, setWeirdMessage] = useState(false);
  const [intialDisplayTimeout, setIntialDisplayTimeout] = useState(false);
  const [showShowcase, setShowcase] = useState(true);
  const [newEntry, setNewEntry] = useState<Partial<GuestbookEntry>>({});
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then(setEntries);

    setTimeout(
      () =>
        addToConversation(
          "Welcome to the Guestbook! Would you like to leave a message too?"
        ),
      2000
    );
    setTimeout(() => setIntialDisplayTimeout(true), 4500);
    setTimeout(() => setCurrentStep(0), 8000);
    setTimeout(() => setShowcase(false), 7000);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const addToConversation = (message: string) => {
    setConversation((prev) => [...prev, message]);
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleUserInput = async () => {
    if (!userInput.trim()) return;

    addToConversation(userInput);
    setUserInput("");

    switch (currentStep) {
      case 0:
        if (userInput.toLowerCase().includes("yes")) {
          setTimeout(
            () =>
              addToConversation("Great! What message would you like to leave?"),
            1000
          );
          setCurrentStep(1);
        } else {
          setTimeout(
            () =>
              addToConversation(
                "No problem! Feel free to read the messages others have left in here."
              ),
            1000
          );
          setTimeout(async () => {
            setCurrentStep(4);
            await setTimeout(async () => {
              addToConversation(
                "You should have added your message too... it would have been on the wall. So rude you are!"
              );
              await setTimeout(() => {
                addToConversation(
                  "Still you are just reading the messages, but not trying to make any effort from your side. For real?"
                );
              }, 5000);
            }, 4000);
          }, 2000);
          setShowcase(true);
        }
        break;
      case 1:
        setNewEntry((prev) => ({ ...prev, message: userInput }));
        setTimeout(
          () =>
            addToConversation(
              "Lovely message! And what name should we display with your message?"
            ),
          1000
        );
        setCurrentStep(2);
        break;
      case 2:
        setNewEntry((prev) => ({ ...prev, name: userInput }));
        setTimeout(
          () =>
            addToConversation(
              "Great! Lastly, what's your email that we need to keep private only?"
            ),
          1000
        );
        setCurrentStep(3);
        break;
      case 3:
        setIsSubmitting(true);
        try {
          if (validateEmail(userInput)) {
            const entryData = {
              message: newEntry.message,
              name: newEntry.name,
              email: userInput, // Update the email directly in the new entry object
            };

            const res = await fetch("/api/guestbook", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(entryData),
            });

            if (res.ok) {
              const savedEntry = await res.json();
              setEntries((prev) => [savedEntry, ...prev]);
              setTimeout(
                () =>
                  addToConversation(
                    "Thank you! Your message has been added to the guestbook. Feel free to read other messages below."
                  ),
                1000
              );
              setTimeout(() => setConversation([]), 5000);
            } else if (res.status === 429) {
              setTimeout(
                () =>
                  addToConversation(
                    "I'm sorry, you've submitted too many messages recently. Please try again later."
                  ),
                1000
              );
            } else {
              setWeirdMessage(true);
              throw new Error("Failed to submit entry");
            }
          } else {
            console.error("Not a valid email");
            setTimeout(
              () =>
                addToConversation(
                  "Seems like you didn't entered your email right! It leaves us nowhere. Enjoy"
                ),
              1000
            );
            setWeirdMessage(true);
          }
        } catch (error) {
          console.error("Failed to submit entry:", error);
          setTimeout(
            () =>
              addToConversation(
                "I'm sorry, there was an error saving your message. Please try again later."
              ),
            1000
          );
        }
        setIsSubmitting(false);
        setTimeout(() => {
          setShowcase(true);
        }, 2000);
        setCurrentStep(4);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 sm:p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden text-white">
        <div className="p-4 sm:p-6 space-y-2 overflow-y-auto flex-wrap">
          <h1 className="text-3xl font-bold text-center mb-0">Guestbook</h1>
          <AnimatePresence>
            {conversation.map((message, index) => (
              <motion.div
                key={index}
                variants={streamingVariants}
                initial="hidden"
                animate="visible"
                className={`p-2 rounded-lg ${
                  index % 2 === 0
                    ? "bg-inherit text-white"
                    : "bg-inherit text-white"
                }`}
              >
                <TypingAnimation
                  className="text-white text-base font-normal text-left"
                  text={message}
                  duration={10}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          {isSubmitting && (
            <div className="flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
            </div>
          )}
          <div ref={bottomRef}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserInput();
              }}
              className="flex space-x-2"
            >
              {currentStep > 0 ? (
                <>
                  <div
                    className={`${
                      !newEntry.message && currentStep == 4
                        ? "hidden"
                        : "flex w-full gap-2"
                    }`}
                  >
                    <input
                      type="textarea"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder={
                        currentStep === 1
                          ? `your message`
                          : currentStep === 2
                          ? "your name"
                          : currentStep === 3
                          ? "your email"
                          : weirdMessage
                          ? "You could have been on wall"
                          : "You are on the wall.."
                      }
                      className="flex-grow p-2 border rounded-lg bg-inherit focus-visible:border-none focus:border-none focus:outline-none border-transparent focus:border-transparent focus:ring-0 break-words text-wrap line-clamp-3 overflow-y-hidden"
                      disabled={currentStep === 4 || isSubmitting}
                    />
                    <Button
                      type="submit"
                      disabled={currentStep === 4 || isSubmitting}
                      variant={"outline"}
                      className={`bg-inherit ${
                        currentStep === 4 || isSubmitting ? "hidden" : "block"
                      }`}
                    >
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                </>
              ) : intialDisplayTimeout ? (
                <div className="flex flex-col md:flex-row items-start transition-all duration-1000 ease-in w-full text-white">
                  <Button
                    type="submit"
                    disabled={currentStep > 0 || isSubmitting}
                    onClick={() => setUserInput("Yes, I would love to do it!")}
                    variant={"link"}
                    className="pl-2 w-full flex items-center transition-all duration-500 justify-start text-white"
                  >
                    Yes, I would love to do it!
                  </Button>
                  <Button
                    type="submit"
                    disabled={currentStep > 0 || isSubmitting}
                    onClick={() => setUserInput("Nah, it's a stupid idea!")}
                    variant={"link"}
                    className="pl-2 w-full flex items-center transition-all duration-500 justify-start text-white"
                  >
                    Nah, it&apos;s a stupid idea!
                  </Button>
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
      {currentStep === 4 && (
        <div
          className={`w-full flex items-center flex-col justify-center transition-all duration-1000 ${
            showShowcase ? "opacity-100" : "opacity-0"
          } ease-in-out`}
        >
          <h2 className="mt-8 mb-2 text-2xl max-w-5xl font-bold text-white text-center">
            Showcase
          </h2>
          <div className="sm:space-x-2 max-w-5xl grid sm:grid-cols-2 md:grid-cols-3 w-full gap-2 items-center">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 rounded-lg p-4 shadow text-white"
              >
                <p className="text-lg mb-2">{entry.message}</p>
                <p className="text-sm text-gray-600">
                  - {entry.name} on{" "}
                  {new Date(entry.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
          <Button className="flex items-center justify-center mt-4 bg-inherit text-white" asChild variant={"outline"}><Link href={"/"}>Go Home</Link></Button>
        </div>
      )}
    </div>
  );
}
