"use client";
import { authClient } from "@/lib/auth-client";
import { Toast } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("sing in successfully");
      console.log(data);
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box w-xs  p-4">
            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-md"
              placeholder="তোমার ইমেইল দাও "
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-md"
              placeholder="পাসওয়ার্ড দাও "
            />

            <button type="submit" className="btn bg-red-700 text-white mt-4">
              সাইন ইন করুন
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
