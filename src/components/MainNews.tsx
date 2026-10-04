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
  if (!news || news.length === 0) return null;

  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex gap-2">
      <Link href={`/news/${firstNews.id}`} className="block">
        <div className="card w-150 rounded-lg border border-gray-300 bg-base-100">
          <figure>
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.imageAlt}
              width={600}
              height={600}
            />
          </figure>
          <div className="card-body">
            <p className="font-semibold text-red-500">{firstNews.category}</p>
            <h2 className="card-title">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      <div className="grid rounded-lg border border-gray-300">
        {otherNews.slice(0, 4).map((on) => (
          <Link key={on.id} href={`/news/${on.id}`} className="block">
            <div className="card border-b-2 border-gray-300 bg-base-100">
              <p className="font-semibold text-red-500">{on.category}</p>
              <div>{on.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
