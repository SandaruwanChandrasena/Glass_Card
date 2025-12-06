export default function GlassCard() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-rose-500">
      <div className="w-80 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
        <h2 className="mb-2 text-2xl font-bold text-white">Hello TikTok</h2>
        <p className="text-gray-200">
          This is my first React + Tailwind design.
        </p>
        <button className="mt-4 w-full rounded-lg bg-white px-4 py-2 font-semibold text-purple-600 shadow transition hover:scale-105">
          Follow Me
        </button>
      </div>
    </div>
  );
}
