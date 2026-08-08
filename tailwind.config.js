/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",       // background utama, near-black graphite-blue
        panel: "#12161F",     // permukaan kartu
        panel2: "#171C27",    // permukaan kartu, sedikit lebih terang
        line: "#232938",      // garis pembatas tipis
        brass: "#C9A227",     // aksen utama, emas pudar (premium, bukan neon)
        brasslight: "#E4C560",
        gain: "#3ECF8E",      // hijau, KHUSUS untuk angka profit/positif
        loss: "#E5484D",      // merah, KHUSUS untuk angka negatif
        paper: "#F2F4F8",     // teks judul
        ash: "#8B93A7",       // teks sekunder/body
        ash2: "#5B6478",      // teks tersier/caption
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(201,162,39,0.06) 0%, rgba(201,162,39,0) 60%)",
      },
    },
  },
  plugins: [],
};
