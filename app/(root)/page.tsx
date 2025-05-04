import BlogCard, { BlogTypes } from "@/components/BlogCard";
import SearchForm from "../../components/SearchForm";
// import { client } from "@/sanity/lib/client";
import { BLOG_QUERY } from "@/sanity/lib/query";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({ searchParams }: { 
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query ?? "";
  const params = {search: query || null};

  // const posts = await client.fetch(BLOG_QUERY)
  const {data: posts} = await sanityFetch({
    query: BLOG_QUERY,
    params,
  })

  return (
    <>
      <section className="w-full py-16 flex items-center justify-center bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-600 bg-cover bg-center text-white">
        <div className="px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 items-center text-center">
          <div className="flex flex-col items-center text-center space-y-5">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">
              Start Your Blogging Journey Today
            </span>
            <p className="text-xl sm:text-xl font-light text-gray-100 mb-8">
              Share your thoughts, ideas, and stories with the world. Create your blog with ease, no coding required!
            </p>
            <SearchForm query={query} />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto ">
        <p className="text-2xl py-6 font-semibold">
          {query ? `Search results for "${query}"` : 'All Blogs'}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {posts?.length > 0 ? (
            posts.map((post: BlogTypes) => (
              <BlogCard key={post._id} post={post} />
            ))
          ) : (
            <p>No blog found</p>
          )}

        </ul>
      </section>
      <SanityLive/>
    </>
  );
}

