"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show , setShow] = useState(false)


  const handleUpdateProfile =async(e: React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()

    const formData = new FormData(e.target)
    const newUserData = Object.fromEntries(formData.entries()) as {name: string, image: string}
    console.log(newUserData);

    await authClient.updateUser({
        ...newUserData
    })
  }

  const handleEditProfileFrom = () =>{
    setShow(!show)
  }
  return (
    <div>
      {/* user detail */}
      <div className="flex flex-col items-center gap-1 m-10">
        <Link href={"/profile"}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 overflow-hidden rounded-full ring-2 ring-offset-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
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
        </Link>

        <h2 className="whitespace-nowrap text-center text-xl font-semibold text-Black">
          {user?.name}
        </h2>
        <p className="whitespace-nowrap text-center text-sm font-semibold text-gray-500">
          {user?.email}
        </p>

        <button onClick={handleEditProfileFrom} className="btn bg-red-700 mt-5">Edit Profile</button>
      </div>

      {/* profile update form */}
      {show  && <form onSubmit={handleUpdateProfile}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Enter Your Name" />

          <label className="label">Image</label>
          <input name="image" type="url" className="input" placeholder="Enter Your Image Url" />

          <button className="btn bg-red-700 mt-4">Update Profile</button>
        </fieldset>
      </form>}
    </div>
  );
};

export default ProfilePage;
