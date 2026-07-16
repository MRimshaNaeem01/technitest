import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

export function BlogCard({ title, image, date, author, slug }: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`} className="group block">
      <article>
        <div className="overflow-hidden rounded-xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 type-small">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {date}
          </span>
          <span className="text-border">|</span>
          <span>
            by.{" "}
            <span className="font-medium text-foreground">{author}</span>
          </span>
        </div>

        <h3 className="mt-2.5 text-[16px] font-semibold leading-snug text-[#111111] transition-colors group-hover:text-brand line-clamp-2">
          {title}
        </h3>

        <div className="mt-4 h-px w-full bg-border" />

        <span className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-link transition-all group-hover:gap-2.5">
          Read More
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </article>
    </Link>
  );
}
