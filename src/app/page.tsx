import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCart from "@/components/NewsCart";

interface IOtherSection {
  title: string;
  curationId: string;
  curationType: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}
export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  console.log(sections);
  const mainNews = sections[0].articles;
  console.log(mainNews);

  const otherSections: IOtherSection[] = sections.slice(1);
  // console.log(otherSections);
  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {otherSections.map((os: IOtherSection) => (
              <div
                className=" pb-2"
                key={os.curationId}
              >
                <h1 className=" border-b-2 border-red-600 font-semibold text-xl text-black mb-3">{os.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">

                {
                  os.articles.map(news => <NewsCart key={news.id} news={news} />)
                }
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* most read section */}
        <div className="bg-green-500 col-span-1 "></div>
      </div>
    </div>
  );
}
