import Image from "next/image";

const MainNews = ({ news }) => {
//   const firstNews = news[0];
// --------------or--------------
  const [firstNews, ...otherNews] = news

//  ------------- or-------------
//   const otherNews = news.slice(1);
//   console.log(otherNews);
  return (
    <div className="flex gap-2">
        {/* main news */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.title}
            width={600}
            height={600}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>

      {/* other news */}
      <div className="grid gap-2">
    {
        otherNews.slice(0, 4).map(on => <div className="card bg-base-100 border border-gray-300 py-3" key={on.id}>
            <div>{on.title}</div>
        </div> )
    }
      </div>
    </div>
  );
};

export default MainNews;
