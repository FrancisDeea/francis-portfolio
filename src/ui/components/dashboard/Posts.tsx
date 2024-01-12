import { fetchAllPosts } from "@/lib/dbdata";
import DashPostCard from "@/ui/components/dashboard/DashPostCard";

export default async function Posts() {
  const posts = await fetchAllPosts();

  return (
    <div className="ct-flex-col">
      {posts.map((post) => {
        return <DashPostCard key={post.id} post={post} />;
      })}
    </div>
  );
}
