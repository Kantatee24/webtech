export default function Activity() {
  const hobbies = [
    {
      title: "Guitar & Music",
      desc: "Practicing solo riffs and exploring different music genres.",
      icon: "🎸",
      color: "var(--neon-purple)"
    },
    {
      title: "Gaming",
      desc: "Immersing in competitive and open-world digital adventures.",
      icon: "🎮",
      color: "var(--neon-cyan)"
    },
    {
      title: "Cinema & Movies",
      desc: "Analyzing visual storytelling and cinematography in modern films.",
      icon: "🎬",
      color: "#ff0055" // Neon Pink
    }
  ];

  return (
    <div className="fancy-card" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ 
        color: 'var(--neon-cyan)', 
        marginBottom: '25px', 
        letterSpacing: '2px',
        textAlign: 'center' 
      }}>
        LIFESTYLE & HOBBIES
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {hobbies.map((hobby, index) => (
          <div 
            key={index} 
            style={{
              padding: '20px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '15px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              transition: '0.3s'
            }}
            className="hobby-item"
          >
            {/* Icon Section */}
            <div style={{ 
              fontSize: '2rem', 
              background: hobby.color, 
              width: '60px', 
              height: '60px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              borderRadius: '12px',
              boxShadow: `0 0 15px ${hobby.color}66` // 66 คือความโปร่งใส
            }}>
              {hobby.icon}
            </div>

            {/* Text Section */}
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.1rem' }}>
                {hobby.title}
              </h4>
              <p style={{ margin: 0, color: '#aaa', fontSize: '0.9rem', lineHeight: '1.4' }}>
                {hobby.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .hobby-item:hover {
          transform: translateX(10px);
          background: rgba(255,255,255,0.08);
          border-color: var(--neon-cyan);
        }
      `}</style>
    </div>
  );
}