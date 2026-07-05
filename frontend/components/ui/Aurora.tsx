export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />
      <div className="absolute right-10 bottom-20 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-[180px]" />
      <div className="absolute left-10 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/20 blur-[160px]" />
    </div>
  );
}