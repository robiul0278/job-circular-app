import { defineQuery } from "next-sanity";

export const BLOG_QUERY = defineQuery(`*[
  _type == "blog" && defined(slug.current) &&
  (
    !defined($search) ||
    category match $search ||
    title match $search ||
    author->name match $search
  )
] | order(_createdAt desc) {
  _id, 
  title,
  slug, 
  _createdAt,
  author -> {
    _id,
    name,
    email,
    bio,
    image
  }, 
  views,
  description, 
  category,
  image, 
  pitch
}`);
