import { API_KEYS } from "@/constants/keys";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type Props = { children: React.ReactNode; className?: string };

export default function Layout({ children, className }: Props) {
  useEffect(() => {
    const token = localStorage.getItem(API_KEYS.TOKEN);
    if (!token) {
      window.location.assign("/login");
    }
  }, []);

  return (
    <main>
      <div className={cn(`px-4 py-2`, className)}>{children}</div>
    </main>
  );
}
