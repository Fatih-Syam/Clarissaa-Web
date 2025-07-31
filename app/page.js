export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0e1625] text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">💙 Hello, Clarissa</h1>
        <p className="mb-6">
          I'm drawn to you and chasing after you not just because I like you, but because there's something in you that makes me wanna grow.
          You feel like someone a few steps ahead of me—bukan dengan cara yang bikin aku minder yaa, tapi justru bikin aku pengen kejar itu.
          Thank you, Shandana Clarissa Auliavera. I’m truly happy to know you.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Play Game</button>
          <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600">Message</button>
        </div>
      </div>
    </main>
  );
}