import { Button } from "@heroui/react";
import Image from "next/image";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-gray-50">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
        {/* Logo + Title + Date - Center */}
        <div className="flex items-center gap-2 text-center">
          <Image
            className="h-10 w-10"
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
          />

          <div>
            <h2 className="text-xl font-bold text-red-700">Bangla News 24</h2>

            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>

        {/* Buttons - Right */}
        <div className="absolute right-4 flex items-center gap-2">
          <Button className="bg-gray-50 text-black" variant="tertiary">
            সাইন ইন
          </Button>

          <Button variant="danger">সাইন আপ</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
