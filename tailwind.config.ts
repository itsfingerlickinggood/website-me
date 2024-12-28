import type { Config } from "tailwindcss";
import { radixThemePreset } from 'radix-themes-tw';
import { blackA, mauve, violet } from "@radix-ui/colors";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ...blackA,
				...mauve,
				...violet,
      },
    },
  },
  presets: [radixThemePreset],
  plugins: [],
} satisfies Config;
