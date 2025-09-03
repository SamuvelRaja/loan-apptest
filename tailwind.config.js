module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        primaryDark: '#1E40AF',
        secondary: '#F59E0B',
        bg: '#0B1220',
        card: '#111827',
        text: '#F3F4F6',
        muted: '#9CA3AF',
        success: '#10B981',
        danger: '#EF4444',
      },
    },
  },
  plugins: [],
};

