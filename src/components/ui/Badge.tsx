import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "outline" | "glow";
    className?: string;
}

export const Badge = ({ children, variant = "default", className }: BadgeProps) => {
    const variants = {
        default: "bg-white/10 text-white/90",
        outline: "border border-white/20 text-white/70",
        glow: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
};
