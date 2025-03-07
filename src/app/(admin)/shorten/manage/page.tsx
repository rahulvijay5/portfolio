"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface ShortUrl {
  id: string;
  slug: string;
  url: string;
  createdAt: string;
  visits: number;
}

export default function ManageUrlsPage() {
  const [urls, setUrls] = useState<ShortUrl[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handlePasswordSubmit = () => {
    if (password === process.env.NEXT_PUBLIC_UPLOAD_PASSWORD) {
      setIsAuthorized(true);
      setIsModalOpen(false);
      toast({
        title: "Access Granted",
        description: "You can now use the URL shortener.",
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
    fetchUrls();
  }, []);

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

  const fetchUrls = async () => {
    try {
      const response = await fetch("/api/urls");
      if (!response.ok) {
        throw new Error("Failed to fetch URLs");
      }
      const data = await response.json();
      setUrls(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch URLs",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

 

  if (!isAuthorized) {
    return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Why not authenticate yourself first?
            </DialogTitle>
            <DialogDescription />
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
    );
  }

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/urls/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete URL");
      }
      setUrls(urls.filter((url) => url.id !== id));
      toast({
        title: "Success",
        description: "URL deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black text-black dark:text-white bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            Manage Your Shortened URLs
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            View, analyze, and delete your shortened URLs
          </p>
        </div>

        <Card className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle>Your Shortened URLs</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading...</p>
            ) : urls.length === 0 ? (
              <p>No shortened URLs found.</p>
            ) : (
              <div className="space-y-4">
                {urls.map((url) => (
                  <div
                    key={url.id}
                    className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
                  >
                    <div>
                      <Link href={url.url} className="font-semibold">
                        rahulvijay.site/{url.slug}
                      </Link>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-xs">
                        {url.url}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Created: {new Date(url.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-center">
                        {url.visits} visits
                      </p>
                      <Link href={`/shorten/analytics/${url.slug}`}>
                        <Button variant="outline">Analytics</Button>
                      </Link>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(url.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/shorten">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Create New Short URL
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
