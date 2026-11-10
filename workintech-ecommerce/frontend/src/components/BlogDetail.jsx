import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MessageCircleMore,
} from "lucide-react";

import { blogPosts } from "../data/home.data";
import { images } from "../utils/assets";

const resolveImage = (imagePath) => {
  if (!imagePath) return "";

  const fileName = imagePath.split("/").pop();

  return images[fileName] || imagePath;
};

export default function BlogDetail() {
  const { id } = useParams();

  const post = blogPosts.find(
    (item) => String(item.id) === String(id)
  );

  if (!post) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#252B42]">
          Blog post not found
        </h1>

        <Link
          to="/blog"
          className="inline-block mt-6 !text-[#23A6F0] font-bold"
        >
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full">
      <article className="max-w-4xl mx-auto px-4 py-12 lg:py-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 !text-[#23A6F0] font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex flex-wrap gap-3 text-sm text-[#23A6F0]">
          {post.tags?.map((tag) => (
            <span key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#252B42] mt-4">
          {post.title}
        </h1>

        <p className="text-[#737373] text-lg mt-5 leading-8">
          {post.desc}
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-[#737373] mt-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#23A6F0]" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <MessageCircleMore className="w-4 h-4 text-[#23856D]" />
            <span>{post.comments} comments</span>
          </div>
        </div>

        <img
          src={resolveImage(post.img)}
          alt={post.title}
          className="w-full max-h-[520px] object-cover mt-10 rounded-lg"
        />

        <div className="mt-10 space-y-6 text-[#737373] leading-8 text-base sm:text-lg">
          {post.content?.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}