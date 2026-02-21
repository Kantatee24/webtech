const eduData = [
  { 
    year: "2022 - Present", 
    place: "KMUTNB", 
    degree: "Computer Education",
    image: "https://tse2.mm.bing.net/th/id/OIP.pv2OXnb2JROSanBU3089xgHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "https://www.kmutnb.ac.th" // ลิงก์ มจพ.
  },
  { 
    year: "2016 - 2021", 
    place: "Samchukratanapokaram School", 
    degree: "High School (Science - Mathematics)",
    image: "https://tse4.mm.bing.net/th/id/OIP.AMGNOMdVOjzrpZUgBR8nDAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "http://samchukratana.ac.th/main/index.html" // ลิงก์โรงเรียนสามชุกฯ
  }
];

export default function Education() {
  return (
    <div className="fancy-card" style={{ maxWidth: '700px', margin: 'auto' }}>
      <h2 style={{ 
        fontFamily: 'Orbitron', 
        color: 'var(--f1-red)', 
        marginBottom: '30px', 
        letterSpacing: '2px',
        fontStyle: 'italic'
      }}>
        TRACK RECORD
      </h2>
      
      {eduData.map((e, i) => (
        <div key={i} className="edu-item" style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '30px',
          alignItems: 'center',
          background: 'var(--carbon-black)',
          padding: '20px',
          borderRadius: '0 20px 0 20px',
          borderLeft: '5px solid var(--f1-red)',
          borderRight: '1px solid rgba(255,255,255,0.05)'
        }}>
          
          {/* ส่วนรูปภาพที่กด Link ได้ */}
          <div style={{ flexShrink: 0 }}>
            <a href={e.url} target="_blank" rel="noopener noreferrer" title={`Visit ${e.place}`}>
              <img 
                src={e.image} 
                alt={e.place} 
                className="edu-logo-link"
                style={{
                  width: '90px',
                  height: '90px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  background: 'white',
                  padding: '8px',
                  transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer'
                }} 
              />
            </a>
          </div>

          {/* รายละเอียด */}
          <div style={{ flex: 1 }}>
            <h4 style={{ 
              fontFamily: 'Orbitron', 
              margin: '0 0 5px 0', 
              fontSize: '1.1rem', 
              color: 'var(--f1-white)' 
            }}>
              {e.place}
            </h4>
            <div style={{ marginBottom: '5px' }}>
              <small style={{ 
                color: 'var(--f1-red)', 
                fontWeight: 'bold', 
                fontFamily: 'Orbitron',
                fontSize: '10px' 
              }}>
                {e.year}
              </small>
            </div>
            <p style={{ margin: '0', fontSize: '14px', color: 'var(--silver)', lineHeight: '1.4' }}>
              {e.degree}
            </p>
          </div>

        </div>
      ))}

      <style jsx>{`
        .edu-item:hover {
          transform: skewX(-2deg) scale(1.02);
          box-shadow: -10px 0 20px rgba(225, 6, 0, 0.1);
        }
        .edu-logo-link:hover {
          transform: scale(1.15) rotate(5deg);
          box-shadow: 0 0 20px var(--f1-red);
        }
      `}</style>
    </div>
  );
}