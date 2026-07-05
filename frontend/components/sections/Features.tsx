import { Brain, Search, Sparkles, Trash2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Remember",
    description:
      "Store documents, notes, GitHub repositories, URLs and conversations into long-term memory.",
  },
  {
    icon: Search,
    title: "Recall",
    description:
      "Ask natural language questions and instantly retrieve connected knowledge.",
  },
  {
    icon: Sparkles,
    title: "Improve",
    description:
      "Continuously enrich memories and build stronger relationships over time.",
  },
  {
    icon: Trash2,
    title: "Forget",
    description:
      "Delete outdated memories whenever you want while keeping complete control.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Memory Lifecycle
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-cyan-500 transition"
          >
            <feature.icon className="w-10 h-10 text-cyan-400 mb-6" />

            <h3 className="text-2xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-7">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}