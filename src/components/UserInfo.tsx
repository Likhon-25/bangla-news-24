"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div className="absolute right-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 overflow-hidden">
                <Image
                  alt="User Image"
                  src={
                    user?.image ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <h2 className="font-semibold text-sm">{user?.name}</h2>
          </div>
          
          <button onClick={handleSignOut} className="btn btn-error btn-sm">
            সাইন আউট
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button className="bg-gray-50 text-black" variant="tertiary">
            সাইন ইন
          </Button>

          <Button variant="danger">সাইন আপ</Button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;