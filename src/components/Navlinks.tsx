import Link from "next/link";

interface NavItem {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: NavItem[] = data.data;
  const filterednavs = navs.filter((n : NavItem) => n.scrapable);
//   console.log(filterednavs);

  return (
    <div className="flex  gap-5 justify-center mt-5">
      <Link href="/">হোম</Link>
      {filterednavs.map((n : NavItem, i : number) => (
        <Link key={i} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default Navlinks;
