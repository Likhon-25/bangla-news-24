
const SignUpPage = () => {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold text-red-700" >সাইন আপ</h2>
        <form action="">
            
          <fieldset className="fieldset rounded-box w-xs  p-4">
            

            <label className="label">নাম</label>
            <input name="name" type="name" className="input w-md" placeholder="তোমার নাম দাও " />

            <label className="label">ছবি</label>
            <input name="image" type="url" className="input w-md" placeholder="তোমার ছবি দাও " />

            <label className="label">ইমেইল</label>
            <input name="email" type="email" className="input w-md" placeholder="তোমার ইমেইল দাও " />

            <label className="label">পাসওয়ার্ড</label>
            <input name="password" type="password" className="input w-md" placeholder="পাসওয়ার্ড দাও " />

            <button className="btn bg-red-700 text-white mt-4">সাইন আপ করুন</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
