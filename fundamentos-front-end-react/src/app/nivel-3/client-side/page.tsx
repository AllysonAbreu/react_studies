import { Suspense } from "react";

import Posts from "@/components/aula-3/Posts";
import { PostType } from "@/app/types";

const getPosts = async () => {
    const response = await fetch("https://api.vercel.app/blog");
    
    const posts: PostType[] = await response.json();
    return posts;
}

export default function Page() {

    const posts = getPosts();

    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Posts posts={posts} />
        </Suspense>
    );
}

