import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <>
      <div className="h-full w-full items-center justify-center bg-zinc-800 border-2 border-zinc-700 rounded-xl py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 p-4">
        <div className="bg-zinc-900 border-2 border-zinc-700 h-full rounded-xl p-4">
          <Card className="h-full bg-zinc-800 border-2 border-zinc-700">
            <CardHeader className="pt-12 mb-3">
              <CardTitle className="text-white">Leave a Message</CardTitle>
              <CardDescription className="text-zinc-300">
                Leave your message here, I would reach to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="yourmail@gmail.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message" className="text-white">
                  Message:
                </Label>
                <Textarea id="message" placeholder="Drop your message here!" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-zinc-900 hover:bg-zinc-700">
                Send
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="bg-zinc-900 border-2 border-zinc-700 h-full rounded-xl p-4">
          Or Directly Contact me...
        </div>
      </div>
    </>
  );
};

export default Contact;
