import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "h-1 w-16 rounded-full bg-amber-500",
          align === "center" ? "mx-auto" : "",
        )}
      />
      <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}
