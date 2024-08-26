"use client";

import { GuestbookEntry } from "@/lib/types";
import { Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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


const Page = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { toast } = useToast();

  const handlePasswordSubmit = () => {
    if (password === process.env.NEXT_PUBLIC_DELETE_PASSWORD
    ) {
      setIsAuthorized(true);
      setIsModalOpen(false);
      toast({
        title: "Access Granted",
        description: "You can now use the guestbook manager.",
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

  useEffect(() => {
    if (!isAuthorized) {
      setIsModalOpen(true);
    }
    fetch("/api/guestbook")
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/guestbook`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
      } else {
        console.error("Failed to delete the entry");
      }
    } catch (error) {
      console.error("Error deleting the entry:", error);
    }
  };

  const handleClick = (id: string) => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }

    clickTimeout.current = setTimeout(() => {
      if (clickCount >= 2) {
        handleDelete(id);
      }
      setClickCount(0); // Reset click count after the timeout
    }, 300);
  };

  return (
    <div>
      <div
        className={`w-full flex items-center flex-col justify-center transition-all duration-1000 px-4 ${isModalOpen && "opacity-55 blur-sm"} ${!isAuthorized && !isModalOpen && "hidden"}`}
      >
        <h2 className="mt-8 mb-2 text-2xl max-w-5xl font-bold text-white text-center">
          Showcase
        </h2>
        <div className=" space-y-4 sm:space-x-2 max-w-2xl grid w-full items-center">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 bg-opacity-90 rounded-lg p-4 shadow"
            >
              <p className="text-lg mb-2">{entry.message}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 overflow-x-hidden">
                  - {entry.name} on{" "}
                  {new Date(entry.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <Button
                  size={"icon"}
                  className="bg-red-500/20 text-white"
                  onClick={()=>handleClick(entry.id)}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Authorize yourself
              <span className="text-indigo-500 font-bold text-2xl ml-2">first!</span>
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
    </div>
  );
};

export default Page;
