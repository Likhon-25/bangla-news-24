"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="absolute right-4 flex items-center">
      {user ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 overflow-hidden rounded-full ring-2 ring-offset-2">
                <Image
                  alt="User Image"
                  src={
                    user?.image ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              </div>
            </div>

            <h2 className="whitespace-nowrap text-sm font-semibold text-gray-800">
              {user?.name}
            </h2>
          </div>

          <button
            onClick={handleSignOut}
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 active:scale-95"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href={"/signin"}>
            <Button
              className="border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
              variant="tertiary"
            >
              সাইন ইন
            </Button>
          </Link>

          <Link href={"/signUp"}>
            <Button
              variant="danger"
              className="px-4 text-sm font-medium shadow-sm"
            >
              সাইন আপ
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;