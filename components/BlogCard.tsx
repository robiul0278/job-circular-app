import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { EyeIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Author = {
  id: string;
  name: string;
}

type BlogType = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
  author: Author;
  slug: string;
};

const BlogCard = ({ post }: { post: BlogType }) => {

  const {_id, _createdAt,title,description,image,category, views, author: {id: authorId, name} } = post;

  return (
    <li className="list-none w-full max-w-md mx-auto ">
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-4 py-2">
        <CardHeader className="p-0">
          
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
        </CardHeader>
        <CardContent className="px-3">
          <div className="text-sm text-muted-foreground mb-1">{category} • {formatDate(_createdAt)}</div>
          <CardTitle className="text-xl font-semibold mb-2">
            <Link href={`/blog/${_id}`} className="hover:underline">
              {title}
            </Link>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex items-center justify-between px-3">
          <Link href={`/user/${authorId}`} className="flex items-center gap-1.5">
            <User className="size-5 mb-1" />
            <span className="text-sm text-muted-foreground"> {name}</span>
          </Link>
          <div className="flex items-center gap-1.5">
            <EyeIcon className="size-5 mb-1  text-pink-400" />
            <span className="text-sm text-muted-foreground">{views}</span>
          </div>
        </CardFooter>
      </Card>
    </li>
  );
};

export default BlogCard;
