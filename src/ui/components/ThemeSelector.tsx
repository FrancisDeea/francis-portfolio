"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "../icons";

export default function ThemeSelector({
  customClass,
}: {
  customClass: string | null;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  return (
    <button
      className={`ct-flex-row gap-2 border-2 border-medium py-1 px-2 rounded-md font-medium bg-background2 text-sm text-opposite ${customClass}`}
      onClick={handleTheme}
    >
      Change theme:
      <SunIcon style={theme === "dark" ? "hidden" : "block"} />
      <MoonIcon style={theme === "light" ? "hidden" : "block"} />
    </button>
  );
}
