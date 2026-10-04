interface IMostRead {
  id: string;
  title: string;
}

const MostRead = async () => {
  const resdata = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read",
  );
  const data = await resdata.json();
  const mostReadNews: IMostRead[] = data.data;
  console.log("Most read data", mostReadNews);

  return (
    <div className="bg-white rounded-lg">
      <h2 className="font-bold text-[18px] text-black mb-5">সর্বাধিক পঠিত</h2>

      <div className="grid gap-3">
        {mostReadNews.map((news: IMostRead, i: number) => (
          <div key={news.id}>
            <div className="flex gap-1">
              <p className="font-bold text-red-700">{i + 1}.</p>
              <h2 className="font-bold">{news.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
