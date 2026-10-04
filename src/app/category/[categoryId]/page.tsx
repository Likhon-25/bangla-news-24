import NewsCart from "@/components/NewsCart";

const CategoryPage = async ({ params }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews = data.data;
  console.log(categoryNews);
  return (
    <div>
      <h1 className=" text-2xl font-bold border-b-2 border-red-700 max-w-7xl mx-auto m-5">{data.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto m-5">
        {
            categoryNews.map(CN => <NewsCart key={CN._id} news={CN} /> 

        )
        }
      </div>
    </div>
  );
};

export default CategoryPage;
