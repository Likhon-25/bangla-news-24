import Image from "next/image";
import Link from "next/link";

interface INewsCart {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  id: string
}

const NewsCart = ({ news }: { news: INewsCart }) => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  // console.log(news);
  return (
    <Link href={`/news/${news.id}`}>
      <div className="  border border-gray-300 rounded-lg">
        <figure>
          <Image
            className="rounded-t-lg"
            src={news.imageUrl}
            alt={news.imageAlt}
            width={600}
            height={600}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-500 font-semibold">{news.category}</p>
          <h2 className="card-title">{news.title}</h2>
          <p className="line-clamp-2">{news.description}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCart;
