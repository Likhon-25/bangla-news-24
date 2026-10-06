import NewsCart from "@/components/NewsCart";
import { notFound } from "next/navigation";

interface ICategoryPage {
  id: string;
  title: string;
  description: string;
  category: string;
    imageUrl: string;
    imageAlt: string
}
const CategoryPage = async ({ params }: {params: {categoryId : ICategoryPage}}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const data = await res.json();
  const categoryNews = data.data;

  if(!categoryNews){
    notFound()
  }
//   console.log(categoryNews);
  return (
    <div>
      <h1 className=" text-2xl font-bold border-b-2 border-red-700 max-w-7xl mx-auto m-5">{data.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto m-5">
        {
            categoryNews.map((CN : ICategoryPage) => <NewsCart key={CN.id} news={CN} />)
        }
      </div>
    </div>
  );
};

export default CategoryPage;
