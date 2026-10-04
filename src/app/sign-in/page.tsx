import React from "react";

const SignInPage = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
        <form action="">
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

            <button className="btn bg-red-700 text-white mt-4">
              সাইন ইন করুন
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
