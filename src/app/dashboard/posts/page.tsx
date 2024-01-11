import { fetchAllPosts } from "@/lib/dbdata";
import NavButton from "@/ui/components/NavButton";
import DashPostCard from "@/ui/components/dashboard/DashPostCard";
import { CreateIcon } from "@/ui/icons";

export default async function Posts() {
  const posts = await fetchAllPosts();

  return (
    <section className="section w-full overflow-y-scroll scrollbar-hide">
      <div className="ct-flex-row justify-between items-end mb-4">
        <h1 className="">Francis&apos;s Projects</h1>
        <NavButton
          path="/dashboard/posts/create"
          value="Create post"
          icon={<CreateIcon />}
          customStyle="w-max"
        />
      </div>

      <div className="ct-flex-col">
        {posts.map((post) => {
          return <DashPostCard key={post.id} post={post} />;
        })}
      </div>
    </section>
  );
}
