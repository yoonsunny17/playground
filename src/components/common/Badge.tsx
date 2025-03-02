import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, variant = "default", className = "" }, ref) => {
    const baseStyles =
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors";

    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "bg-gray-100 text-gray-900  hover:bg-gray-200 ",
      outline: "border border-gray-200  text-gray-900  hover:bg-gray-100 ",
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
