import BlogCard from "@/components/BlogCard";
import SearchForm from "../../components/SearchForm";


export default function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query ?? "";

  const posts = [
    {
      "_id": "662f4a1b9c5a3e2f789abc1562",
      "_createdAt": "2025-04-30T10:45:00.000Z",
      "title": "10 Best Places to Visit in Bangladesh",
      "description": "Explore the top travel destinations across Bangladesh, from the serene hills of Bandarban to the beaches of Cox’s Bazar.",
    "image": "https://cdn.prod.website-files.com/65098a155ece52db42b9c30c/65b9070a84f9c24fb8502b74_get-paid-in-crypto.avif",
      "category": "Travel",
      "views": 1523,
      "author":{id: 1, name: "Robiul Hasan"},
      "slug": "10-best-places-to-visit-bangladesh"
    },
    {
      "_id": "662f4a1b9c5a3e2f7893abc12",
      "_createdAt": "2025-04-30T10:45:00.000Z",
      "title": "10 Best Places to Visit in Bangladesh",
      "description": "Explore the top travel destinations across Bangladesh, from the serene hills of Bandarban to the beaches of Cox’s Bazar.",
      "image": "https://cdn.prod.website-files.com/65098a155ece52db42b9c30c/65b9070a84f9c24fb8502b74_get-paid-in-crypto.avif",
      "category": "Travel",
      "views": 1523,
      "author":{id: 2, name: "Robiul Hasan"},
      "slug": "10-best-places-to-visit-bangladesh"
    },
    {
      "_id": "662f4a1b9c5a3e452f789abc12",
      "_createdAt": "2025-04-30T10:45:00.000Z",
      "title": "10 Best Places to Visit in Bangladesh",
      "description": "Explore the top travel destinations across Bangladesh, from the serene hills of Bandarban to the beaches of Cox’s Bazar.",
      "image": "https://cdn.prod.website-files.com/65098a155ece52db42b9c30c/65b9070a84f9c24fb8502b74_get-paid-in-crypto.avif",
      "category": "Travel",
      "views": 1523,
      "author":{id: 3, name: "Robiul Hasan"},
      "slug": "10-best-places-to-visit-bangladesh"
    },
    {
      "_id": "662f4a1b9c5a3e452f45789abc12",
      "_createdAt": new Date(),
      "title": "10 Best Places to Visit in Bangladesh",
      "description": "Explore the top travel destinations across Bangladesh, from the serene hills of Bandarban to the beaches of Cox’s Bazar.",
      "image": "https://cdn.prod.website-files.com/65098a155ece52db42b9c30c/65b9070a84f9c24fb8502b74_get-paid-in-crypto.avif",
      "category": "Travel",
      "views": 1523,
      "author":{id: 4, name: "Robiul Hasan"},
      "slug": "10-best-places-to-visit-bangladesh"
    },
    {
      "_id": "662f4a1b9c5a3e452f78459abc12",
     "_createdAt": new Date(),
      "title": "10 Best Places to Visit in Bangladesh",
      "description": "Explore the top travel destinations across Bangladesh, from the serene hills of Bandarban to the beaches of Cox’s Bazar.",
      "image": "https://cdn.prod.website-files.com/65098a155ece52db42b9c30c/65b9070a84f9c24fb8502b74_get-paid-in-crypto.avif",
      "category": "Travel",
      "views": 1523,
      "author":{id: 5, name: "Robiul Hasan"},
      "slug": "10-best-places-to-visit-bangladesh"
    },
    {
      "_id": "662f4a1b9c5ffa3e452f45789abc12",
      "_createdAt": new Date(),
      "title": "10 Best Places to Visit in Bangladesh",
      "description": "Explore the top travel destinations across Bangladesh, from the serene hills of Bandarban to the beaches of Cox’s Bazar.",
      "image": "https://cdn.prod.website-files.com/65098a155ece52db42b9c30c/65b9070a84f9c24fb8502b74_get-paid-in-crypto.avif",
      "category": "Travel",
      "views": 1523,
      "author":{id: 6, name: "Robiul Hasan"},
      "slug": "10-best-places-to-visit-bangladesh"
    },

  ]

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
        <ul className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post, index) => (
              <BlogCard key={post._id || index} post={post} />
            ))
          ) : (
            <p>No blog found</p>
          )}

        </ul>
      </section>
    </>
  );
}

