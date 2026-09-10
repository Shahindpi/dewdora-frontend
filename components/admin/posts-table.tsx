"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Post } from "@/types/post";

interface Props {
  posts: Post[];
}

export default function PostsTable({
  posts,
}: Props) {
  return (
    <div className="rounded-2xl border bg-background overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Post</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Published</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <div className="space-y-1">
                  <Link
                    href={`/admin/posts/${post.id}` as any}
                    className="font-medium hover:text-primary"
                  >
                    {post.title}
                  </Link>

                  <p className="text-xs text-muted-foreground">
                    /{post.slug}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    post.status === "published"
                      ? "default"
                      : "secondary"
                  }
                >
                  {post.status}
                </Badge>
              </TableCell>

              <TableCell>
                {post.category?.name}
              </TableCell>

              <TableCell>
                {post.views.toLocaleString()}
              </TableCell>

              <TableCell>
                {post.published_at
                  ? new Date(post.published_at)
                      .toLocaleDateString()
                  : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}