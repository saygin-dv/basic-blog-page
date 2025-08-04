import BlogCard from "@/components/BlogCard"
import styles from "./styles.module.css";



async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();  
}

export default async function Page() {
  const { posts } = await getPosts();

  return (
    <div className={styles.blogcontainer}> 
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
