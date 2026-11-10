import { Link } from "react-router-dom";
import { Calendar, MessageCircleMore, ChevronRight } from "lucide-react";
import { blogPosts } from "../data/home.data";
import { images } from "../utils/assets";

const resolveImage = (imagePath) => {
  if (!imagePath) return "";

  const fileName = imagePath.split("/").pop();

  return images[fileName] || imagePath;
};

export default function Blog() {
  return (
    <main className="w-full">
      <section className="bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center">
          <p className="text-[#23A6F0] font-bold text-sm">
            OUR BLOG
          </p>

          <h1 className="font-bold text-4xl sm:text-5xl mt-3">
            Featured Posts
          </h1>

          <p className="text-[#737373] max-w-2xl mx-auto mt-5 leading-7">
            Discover shopping tips, product inspiration, lifestyle ideas,
            and useful insights from our team.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="
                border border-[#ECECEC]
                bg-white
                shadow-sm
                overflow-hidden
                flex flex-col
              "
            >
              <div className="w-full h-56 sm:h-64 overflow-hidden">
                <img
                  src={resolveImage(post.img)}
                  alt={post.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-300
                    hover:scale-105
                  "
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  {post.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold mt-4">
                  {post.title}
                </h2>

                <p className="text-sm text-gray-600 leading-6 mt-3 flex-1">
                  {post.desc}
                </p>

                <div className="flex items-center justify-between gap-4 text-xs text-gray-500 mt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#23A6F0]" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircleMore className="w-4 h-4 text-[#23856D]" />
                    <span>{post.comments} comments</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 mt-6 font-semibold !text-[#252B42] hover:!text-[#23A6F0]"
                >
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}