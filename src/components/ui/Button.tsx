"use strict";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {

        const variants = {
            primary: "bg-cyan-500 text-black font-bold border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:scale-105",
            outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400",
            ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans tracking-wide",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
                {variant === 'primary' && (
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
