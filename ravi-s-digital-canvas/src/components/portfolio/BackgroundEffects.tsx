export const BackgroundEffects = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    {/* Ambient gradient orbs */}
    <div className="absolute inset-0">
      <div
        className="absolute rounded-full blur-3xl animate-float-orb-1"
        style={{
          width: 280,
          height: 280,
          left: "5%",
          top: "15%",
          backgroundColor: "hsl(var(--primary))",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-float-orb-2"
        style={{
          width: 320,
          height: 320,
          right: "10%",
          top: "25%",
          backgroundColor: "hsl(var(--secondary))",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-float-orb-3"
        style={{
          width: 240,
          height: 240,
          left: "40%",
          bottom: "20%",
          backgroundColor: "hsl(var(--accent))",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-float-orb-4"
        style={{
          width: 200,
          height: 200,
          left: "70%",
          bottom: "40%",
          backgroundColor: "hsl(var(--primary))",
          opacity: 0.04,
        }}
      />
      <div
        className="absolute rounded-full blur-3xl animate-float-orb-5"
        style={{
          width: 260,
          height: 260,
          left: "15%",
          bottom: "15%",
          backgroundColor: "hsl(var(--secondary))",
          opacity: 0.04,
        }}
      />
    </div>

    {/* Subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);
