// components/CookieToast.tsx
"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // If you have a utils file for class merging

export function CookieToast() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const cookieAccepted = Cookies.get("cookieAccepted");
    if (!cookieAccepted) {
      setShowToast(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("cookieAccepted", "true", { expires: 365 });
    setShowToast(false);
  };

  if (!showToast) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 rounded-md bg-white border p-4 shadow-lg",
        "flex items-center justify-between w-full max-w-md"
      )}
    >
      <p className="mr-4">We use cookies to improve your experience.</p>
      <Button size="sm" onClick={handleAcceptCookies}>
        Accept
      </Button>
    </div>
  );
}