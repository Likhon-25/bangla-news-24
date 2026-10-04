import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface haedlineMarquee {
    id:string;
    title:string;
}
const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );
  const data = await res.json();
  const headlines = data.data;

  return (
    <div className="mt-5 w-full bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl items-center">

        {/* সর্বশেষ */}
        <div className="flex shrink-0 items-center self-stretch bg-red-900 px-5 font-bold">
          সর্বশেষ
        </div>

        {/* Marquee */}
        <div className="min-w-0 flex-1 overflow-hidden py-2">
          <MarqueeText direction="right" duration={15}>
            {headlines.map((h: haedlineMarquee) => (
              <span key={h.id} className="inline-flex items-center">
                <span className="text-sm font-medium">
                  {h.title}
                </span>

                <span className="mx-5 text-red-200">
                  •
                </span>
              </span>
            ))}
          </MarqueeText>
        </div>

      </div>
    </div>
  );
};

export default Marquee;