const AnimatedOrb = () => {
  return (
    <div
      className="absolute w-[180px] sm:w-[260px] md:w-[450px] h-[180px] sm:h-[260px] md:h-[500px] lg:w-[500px] lg:h-[550px] 
                 animate-orb-float blur-sm pointer-events-none"
      style={{
        background: `linear-gradient(
          135deg,
          hsl(340 65% 75% / 0.9) 0%,
          hsl(350 60% 80% / 0.85) 50%,
          hsl(20 70% 85% / 0.9) 100%
        )`,
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      }}
    />
  );
};

export default AnimatedOrb;
