"use client"

import { PostType } from "@/app/types";
import { use } from "react";

export default function Posts ({
    posts
}: {
    posts: Promise<PostType[]>
}) {
    const allPosts = use(posts);

    return (
        <ul>
            {allPosts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}