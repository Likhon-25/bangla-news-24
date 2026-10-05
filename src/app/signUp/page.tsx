'use client'

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = () => {

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries()) as {name: string, email: string, image: string, password: string}
    // console.log(user);

    const {data, error} = await authClient.signUp.email({
      ...user,
      callbackURL: "/"
    })

    if(data){
      console.log(data);
      redirect("/")
    }
    if(error){
      console.log(error);
      alert('User already exists. Use another email.')
    }
  }
  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700" >সাইন আপ</h2>
        <form onSubmit={onSubmit}>
            
          <fieldset className="fieldset rounded-box w-xs  p-4">
            

            <label className="label">নাম</label>
            <input name="name" type="name" className="input w-md" placeholder="তোমার নাম দাও " />

            <label className="label">ছবি</label>
            <input name="image" type="url" className="input w-md" placeholder="তোমার ছবি দাও " />

            <label className="label">ইমেইল</label>
            <input name="email" type="email" className="input w-md" placeholder="তোমার ইমেইল দাও " />

            <label className="label">পাসওয়ার্ড</label>
            <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড দাও " />

            <button type="submit" className="btn bg-red-700 text-white mt-4">সাইন আপ করুন</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
