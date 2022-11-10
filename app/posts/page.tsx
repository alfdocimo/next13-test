import React from "react";
import { db } from "../../lib/db";

type Post = {
  title: string;
};

// const getPosts = async () => {
//   const posts = await fetch("http://localhost:3000/api/posts", {
//     method: "GET",
//   });
//   return posts.json();
//   // return jsonPosts;
// };

export default async function page() {
  const posts = await db.post.findMany();

  return <div>{JSON.stringify(posts)}</div>;
}
