import tailwindcssAnimate from "tailwindcss-animate";
const preset = {
    content: [],
    darkMode: [
        "selector",
        '[data-theme="dark"]'
    ],
    plugins: [
        tailwindcssAnimate
    ],
    theme: {
        extend: {
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out"
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            colors: {
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                background: "hsl(var(--background))",
                border: "hsla(var(--border))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                foreground: "hsl(var(--foreground))",
                input: "hsl(var(--input))",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                ring: "hsl(var(--ring))",
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                success: "hsl(var(--success))",
                error: "hsl(var(--error))",
                warning: "hsl(var(--warning))"
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0"
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)"
                    }
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)"
                    },
                    to: {
                        height: "0"
                    }
                }
            }
        }
    }
};
export default preset;

//# sourceMappingURL=tailwind-preset.js.map