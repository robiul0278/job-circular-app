import { client } from "@/sanity/lib/client";
import { BLOG_BY_ID_QUERY } from "@/sanity/lib/query";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";


const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = await client.fetch(BLOG_BY_ID_QUERY, { id });

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog not found.
      </div>
    );
  }

  const {
    title,
    image,
    _createdAt,
    author,
    pitch,
    description,
    category,
    views,
  } = post;

  return (
    <section className="bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen py-10 px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Left Column - Content */}
        <div className="lg:w-3/4 w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8">
          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mb-6">
            <span>
              Published on {format(new Date(_createdAt), "MMMM dd, yyyy")}
            </span>
            <span>{views || 0} views</span>
          </div>

          {/* Cover Image */}
          {image && (
            <div className="rounded-xl overflow-hidden mb-8">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-t-2xl"
              />

            </div>
          )}

          {/* Pitch */}
          <article className="prose prose-blue max-w-none mb-8 border-l-4 pl-4 border-blue-500">
            <ReactMarkdown>{pitch}</ReactMarkdown>
          </article>

          {/* Content */}
          <div className="prose prose-xl prose-gray max-w-none">
            <PortableText value={description} />
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <aside className="lg:w-1/4 w-full space-y-6">
          {/* Author Card */}
          <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 text-center">
            {author?.image && (
              <Image
                src={author.image}
                alt={author.name}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-3"
              />
            )}
            <h3 className="text-lg font-semibold">{author?.name}</h3>
            <p className="text-sm text-gray-500">{author?.bio}</p>
          </div>

          {/* Category Badge */}
          {category && (
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium shadow-md">
              Category: {category}
            </div>
          )}
        </aside>
      </div>
      <div className="fixed bottom-4 left-4">
        <Suspense fallback={<Skeleton />}>
          <View id={id} />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
