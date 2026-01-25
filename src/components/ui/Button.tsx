import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  as?: React.ElementType;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, as: Component = "button", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
          {
            "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 shadow-sm":
              variant === "primary",
            "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200":
              variant === "secondary",
            "bg-transparent border border-slate-200 text-slate-700 hover:bg-slate-50":
              variant === "outline",
            "bg-transparent text-slate-600 hover:bg-slate-100":
              variant === "ghost",
            "h-8 px-3 text-sm": size === "sm",
            "h-10 px-4 py-2": size === "md",
            "h-12 px-6 text-lg": size === "lg",
          },
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };
