

const mockUrls = [
  'https://utfs.io/f/68174d15-fb21-47c3-a006-96c294302363-tsfq0a.jpg'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))}
      </div>
    </main>

  );
}
