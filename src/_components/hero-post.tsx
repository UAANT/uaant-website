import Avatar from "@/_components/avatar";
import CoverImage from "@/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-8 mb-20 md:mb-12">
      <CoverImage title={title} src={coverImage} slug={slug} />
        <div>
          <h3 className="mb-4 text-3xl lg:text-4xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:text-hover-accent-1"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0">
            <DateFormatter dateString={date} />
          </div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>

      </div>
    </section>
  );
}
