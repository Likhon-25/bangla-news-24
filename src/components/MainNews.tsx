import Image from "next/image";
import Link from "next/link";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  //   const firstNews = news[0];
  // --------------or--------------
  const [firstNews, ...otherNews] = news;

  //  ------------- or-------------
  //   const otherNews = news.slice(1);
  //   console.log(otherNews);

  if (!firstNews) return null;

  return (
    <div className="flex gap-2">
      <Link href={`/news/${firstNews.id}`}>
        {/* main news */}
        <div className="card bg-base-100 w-150 border border-gray-300 rounded-lg">
          <figure>
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              width={600}
              height={600}
            />
          </figure>
          <div className="card-body">
            <p className="text-red-500 font-semibold">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      {/* other news */}
      <div className="grid border border-gray-300 rounded-lg">
        {otherNews.slice(0, 4).map((on) => (
          <Link href={`/news/${on.id}`} key={on.id}>
            <div className="card bg-base-100 border-b-2 border-gray-300">
              <p className="text-red-500 font-semibold">{firstNews.category}</p>

              <div>{on.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
