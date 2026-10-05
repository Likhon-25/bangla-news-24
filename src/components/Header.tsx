import { Button } from "@heroui/react";
import Image from "next/image";
import Navlinks from "./Navlinks";
import Link from "next/link";
import UserInfo from "./UserInfo";

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
            <Link href="/" className="text-xl font-bold text-red-700">
              Bangla News 24
            </Link>

            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>

        {/* Buttons - Right */}
        <UserInfo />
      </div>

      <Navlinks />
    </header>
  );
};

export default Header;
