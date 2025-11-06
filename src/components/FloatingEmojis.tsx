const FloatingEmojis = () => {
  const emojis = ['✨', '💫', '🌟', '💖', '🦋', '🌈', '💝', '🎀', '💕', '⭐'];
  
  const positions = [
    { top: '10%', left: '5%', delay: '0s' },
    { top: '20%', right: '10%', delay: '1s' },
    { top: '40%', left: '8%', delay: '2s' },
    { top: '60%', right: '5%', delay: '0.5s' },
    { top: '80%', left: '15%', delay: '1.5s' },
    { top: '15%', left: '85%', delay: '2.5s' },
    { top: '45%', left: '92%', delay: '1.2s' },
    { top: '70%', right: '88%', delay: '0.8s' },
    { top: '35%', left: '50%', delay: '2.2s' },
    { top: '90%', right: '20%', delay: '1.8s' },
  ];

  return (
    <>
      {positions.map((pos, idx) => (
        <div
          key={idx}
          className="floating-emoji"
          style={{
            ...pos,
            animationDelay: pos.delay,
          }}
        >
          {emojis[idx % emojis.length]}
        </div>
      ))}
    </>
  );
};

export default FloatingEmojis;
