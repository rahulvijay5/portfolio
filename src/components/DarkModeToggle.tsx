import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // When the component mounts on the client, update the state to indicate it is mounted
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Render nothing on the server
  if (!mounted) return null;

  // Once the component has mounted, we can safely render
  return (
    <Button variant="ghost" onClick={toggleDarkMode} className="p-2">
      {resolvedTheme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
};

export const DarkModeToggleTextButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // When the component mounts on the client, update the state to indicate it is mounted
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Render nothing on the server
  if (!mounted) return null;

  // Once the component has mounted, we can safely render
  return (
    <button onClick={toggleDarkMode} className="flex justify-start items-end hover:scale-105 hover:underline transition-all duration-75">
      {resolvedTheme === "dark" ? (
        <Moon className="hidden" />
      ) : (
        <p className="font-bold text-xl px-3">Dark Mode</p>
      )}
    </button>
  );
};