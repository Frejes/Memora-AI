const stats = [
  { number: "100K+", label: "Memories Stored" },
  { number: "10M+", label: "Knowledge Connections" },
  { number: "99%", label: "Recall Accuracy" },
  { number: "24/7", label: "Persistent Memory" },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              {stat.number}
            </h3>

            <p className="mt-3 text-gray-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}