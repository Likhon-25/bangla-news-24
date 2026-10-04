import Image from "next/image";

interface NewsBodyItem {
  type: "text" | "image";
  text?: string;
  url?: string;
  altText?: string;
  caption?: string | null;
  width?: number;
  height?: number;
}

interface NewsDetailsData {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  source: string;
  sourceUrl: string;
  firstPublished: string;
  lastPublished: string;
  wordCount: number;
  tags: string[];
  body: NewsBodyItem[];
}

interface PageProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetails = async ({ params }: PageProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("News not found");
  }

  const data = await res.json();
  const news: NewsDetailsData = data.data;

  const publishedDate = new Date(news.firstPublished).toLocaleDateString(
    "bn-BD",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <main className="mx-auto mt-6 max-w-4xl px-4 pb-10">
      {/* Category / Source */}
      <div className="mb-3 flex items-center gap-2 text-sm">
        <span className="font-semibold text-red-600">
          {news.source}
        </span>

        <span className="text-gray-300">•</span>

        <span className="text-gray-500">
          {publishedDate}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
        {news.title}
      </h1>

      {/* Main Image */}
      <div className="mt-6 overflow-hidden rounded-lg">
        <Image
          src={news.imageUrl}
          alt={news.title}
          width={800}
          height={500}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* Image source */}
      <p className="mt-2 text-xs text-gray-400">
        ছবি: {news.source}
      </p>

      {/* Article */}
      <article className="mt-7">
        {news.body.map((item, index) => {
          // Text block
          if (item.type === "text" && item.text) {
            return (
              <p
                key={index}
                className="mb-5 text-lg leading-8 text-gray-800"
              >
                {item.text}
              </p>
            );
          }

          // Image block
          if (item.type === "image" && item.url) {
            return (
              <figure key={index} className="my-7">
                <Image
                  src={item.url}
                  alt={item.altText || news.title}
                  width={item.width || 800}
                  height={item.height || 500}
                  className="h-auto w-full rounded-lg object-cover"
                />

                {item.caption && (
                  <figcaption className="mt-2 text-center text-sm text-gray-500">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            );
          }

          return null;
        })}
      </article>

      {/* Tags */}
      {news.tags?.length > 0 && (
        <div className="mt-8 border-t border-gray-200 pt-5">
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default NewsDetails;