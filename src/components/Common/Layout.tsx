import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Header = dynamic(() => import("./Header"), { ssr: false });

interface LayoutProps {
  children: ReactNode;
  gutter?: boolean;
}

export default function Layout({ children, gutter }: LayoutProps) {
  return (
    <div className="w-full font-mono">
      <Header />
      <div
        style={{ minHeight: "75vh" }}
        className={`container mx-auto ${gutter ? "px-4" : ""}`}
      >
        {children}
      </div>
      <footer className="flex justify-center items-center py-12">
        <div>&copy; {new Date().getFullYear()} CHams </div>
      </footer>
    </div>
  );
}
