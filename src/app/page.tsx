export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('D:\finance\src\bg.jpg')] bg-cover bg-center place-items-center h-screen screen-main">
      <h1>Sonu Babu.</h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 bg-gray-4 p-8 rounded-example text-center screen-main-2">
        <h2 className="bg-blue-10 p-1.5 rounded-example">1. Basic</h2>
        <h2 className="bg-blue-10 p-1.5 rounded-example">2. Sketches</h2>
        <h2 className="bg-blue-10 p-1.5 rounded-example">3. Blog</h2>
        <h2 className="bg-blue-10 p-1.5 rounded-example">4. Private</h2>
        <h2 className="bg-blue-10 p-1.5 rounded-example">5. Research</h2>
        <h2 className="bg-blue-10 p-1.5 rounded-example">6. Photos</h2>
        <h2 className="bg-blue-10 p-1.5 rounded-example">7. Curiosity</h2>
      </div>
      <h3>[2005].</h3>
    </div>
  );
}
