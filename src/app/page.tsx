import { db } from "@/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/68174d15-fb21-47c3-a006-96c294302363-tsfq0a.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
