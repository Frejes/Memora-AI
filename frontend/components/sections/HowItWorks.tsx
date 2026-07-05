export default function HowItWorks() {
  const steps = [
    "Upload your data",
    "Cognee builds the memory graph",
    "Ask questions naturally",
    "AI recalls connected knowledge",
  ];

  return (
    <section
      id="how"
      className="py-32 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        How It Works
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={step}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center mx-auto text-2xl font-bold">
              {index + 1}
            </div>

            <p className="mt-6 text-gray-300 text-lg">
              {step}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}