import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/types/content";

interface ArticleCardProps {
  post: BlogPost;
}

export function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface p-5 hover:shadow-md transition-shadow group">
      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge variant="secondary">{post.category}</Badge>
        <span className="text-xs text-muted">{post.readTime}</span>
      </div>

      <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-2">
          {post.title}
        </Link>
      </h3>

      <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{post.excerpt}</p>

      <div className="flex items-center justify-between">
        <time className="text-xs text-muted" dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-semibold text-primary hover:underline underline-offset-2"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
