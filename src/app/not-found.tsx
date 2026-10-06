import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center bg-white px-4">
      <div className="w-full max-w-3xl text-center">
        {/* News Label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            Breaking News
          </span>
        </div>

        {/* 404 */}
        <div className="relative mx-auto w-fit">
          <h1 className="text-[120px] font-black leading-none tracking-tighter text-red-600 sm:text-[180px]">
            404
          </h1>

          {/* News tag */}
          <div className="absolute -right-5 top-2 rotate-6 rounded bg-gray-900 px-3 py-1 text-xs font-bold text-white sm:-right-8 sm:top-5">
            NEWS
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-2 flex max-w-xl items-center gap-3">
          <div className="h-[2px] flex-1 bg-red-600" />
          <div className="h-2 w-2 rotate-45 bg-red-600" />
          <div className="h-[2px] flex-1 bg-red-600" />
        </div>

        {/* Content */}
        <h2 className="mt-7 text-2xl font-extrabold text-gray-900 sm:text-3xl">
          এই খবরটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
          মনে হচ্ছে আপনি যে খবর বা পেজটি খুঁজছেন সেটি আর এখানে নেই।
          হয়তো খবরটি সরিয়ে নেওয়া হয়েছে অথবা URL-টি পরিবর্তন করা হয়েছে।
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg active:scale-95"
        >
          <span>←</span>
          <span>প্রথম পাতায় ফিরে যান</span>
        </Link>

        {/* Bottom News Strip */}
        <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <div className="shrink-0 bg-red-600 px-4 py-2 text-xs font-bold text-white">
              সর্বশেষ
            </div>

            <div className="truncate px-4 py-2 text-xs font-medium text-gray-600">
              আপনার খোঁজা সংবাদটি এই মুহূর্তে পাওয়া যাচ্ছে না
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;