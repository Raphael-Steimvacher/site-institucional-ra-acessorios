import { cn } from "@/lib/utils";

type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex size-12 items-center justify-center overflow-hidden rounded-lg border border-amber-500/30 bg-gradient-to-b from-neutral-900 to-black shadow-inner">
        <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 bg-clip-text font-display text-2xl font-extrabold tracking-tighter text-transparent">
          RA
        </span>
      </div>
      {!compact && (
        <div>
          <div className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text font-display text-lg font-bold uppercase leading-tight tracking-wider text-transparent">
            RA Acessórios
          </div>
          <div className="font-mono text-[9px] uppercase leading-none tracking-[0.25em] text-zinc-400">
            e Vidraçaria
          </div>
        </div>
      )}
    </div>
  );
}
