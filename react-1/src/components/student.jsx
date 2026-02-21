import kantatee from "../images/Kantatee1.jpg";

export default function Student({ name, sec, age }) {
  const skills = ["React.js", "Instructional Design", "Modern Web Tech", "Digital Pedagogy"];

  return (
    <section className="profile-section">
      <div className="fancy-card" style={{ maxWidth: '800px', margin: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          {/* Profile Image */}
          <img src={kantatee} alt={name} className="profile-img-large" />
          
          {/* Basic Info */}
          <h1 style={{ margin: '10px 0 5px 0', fontSize: '2.5rem' }}>{name}</h1>
          <p style={{ color: 'var(--neon-cyan)', fontWeight: '600', letterSpacing: '2px', marginBottom: '20px' }}>
            COMPUTER EDUCATION | KMUTNB
          </p>

          {/* About Me Section (English Version) */}
          <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '20px', marginBottom: '25px' }}>
            <h3 style={{ color: 'var(--neon-purple)', marginTop: 0, letterSpacing: '1px' }}>PROFILE SUMMARY</h3>
            <p style={{ lineHeight: '1.8', color: '#ccc' }}>
              Hello, I am {name}, currently a 2nd-year student majoring in Computer Education (CED) at the 
              Faculty of Technical Education, King Mongkut's University of Technology North Bangkok (KMUTNB).
            </p>
            <p style={{ lineHeight: '1.8', color: '#ccc' }}>
              My passion lies at the intersection of Web Technology and Modern Pedagogy. 
              I am dedicated to developing innovative digital learning solutions that are both engaging and accessible. 
              With a strong foundation in React.js and Instructional Design, I strive to bridge the gap between complex technology and effective classroom learning.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '15px', 
            width: '100%',
            marginBottom: '25px' 
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '15px' }}>
              <small style={{ color: 'var(--neon-cyan)', display: 'block', fontSize: '10px' }}>FACULTY</small>
              <strong style={{ fontSize: '14px' }}>Computer Education</strong>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '15px' }}>
              <small style={{ color: 'var(--neon-cyan)', display: 'block', fontSize: '10px' }}>SECTION</small>
              <strong style={{ fontSize: '14px' }}>{sec}</strong>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '15px' }}>
              <small style={{ color: 'var(--neon-cyan)', display: 'block', fontSize: '10px' }}>AGE</small>
              <strong style={{ fontSize: '14px' }}>{age} Years Old</strong>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h4 style={{ marginBottom: '15px', color: 'var(--neon-purple)', letterSpacing: '1px' }}>SKILLS & EXPERTISE</h4>
            {skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>

        </div>
      </div>
    </section>
  );
}