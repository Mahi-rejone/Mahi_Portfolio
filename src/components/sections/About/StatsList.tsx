import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { about } from "@/config";

export default function StatsList() {
  return (
    <div className="col-span-1 flex flex-row items-center justify-around py-4 md:col-span-2 md:flex-row lg:col-span-2 lg:flex-col lg:items-end lg:justify-between lg:py-0">
      {about.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center justify-center lg:items-end">
          <span className="inline-block text-4xl font-bold sm:text-5xl lg:text-7xl">
            <AnimatedCounter value={stat.value} />+
          </span>
          <p className="text-center text-sm font-medium capitalize sm:text-base lg:text-right lg:text-2xl">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
