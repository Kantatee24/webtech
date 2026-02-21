import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="fancy-card" style={{ 
      textAlign: 'center', 
      padding: '100px 20px',
      position: 'relative',
      borderLeft: '10px solid var(--f1-red)',
      overflow: 'hidden'
    }}>
      {/* ลายธงตราหมากรุก (Checkered Flag) ด้านบนสุด */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '15px',
        background: 'repeating-linear-gradient(90deg, #fff, #fff 15px, #000 15px, #000 30px)',
        opacity: 0.3
      }}></div>

      {/* เลข 404 สไตล์ Speedometer */}
      <h1 style={{ 
        fontFamily: 'Orbitron', 
        fontSize: 'clamp(100px, 15vw, 160px)', 
        margin: 0, 
        lineHeight: 0.8,
        fontStyle: 'italic',
        fontWeight: '900',
        color: 'transparent',
        WebkitTextStroke: '2px var(--f1-white)',
        letterSpacing: '-5px'
      }}>
        404
      </h1>
      
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ 
          fontFamily: 'Orbitron', 
          color: 'var(--f1-red)', 
          margin: 0,
          fontSize: '1.5rem',
          letterSpacing: '4px' 
        }}>
          TRACK LIMITS EXCEEDED
        </h2>
        
        <p style={{ 
          color: 'var(--silver)', 
          maxWidth: '450px', 
          margin: '20px auto 40px auto',
          lineHeight: '1.8',
          fontSize: '14px',
          fontStyle: 'italic'
        }}>
          "BOX BOX, KANTATEE!" You've wandered off the racing line. 
          Your current coordinates are not on the circuit map. 
          Return to the garage to reset your telemetry.
        </p>
      </div>

      {/* ปุ่มกลับบ้านสไตล์ Racing Button */}
      <Link to="/" className="reboot-btn" style={{
        display: 'inline-block',
        fontFamily: 'Orbitron',
        textDecoration: 'none',
        color: 'var(--f1-white)',
        background: 'var(--f1-red)',
        padding: '18px 45px',
        fontSize: '14px',
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        transform: 'skew(-15deg)', // เอียงปุ่มให้ดูโฉบเฉี่ยว
        boxShadow: '8px 8px 0px var(--f1-white)',
        transition: '0.2s all'
      }}>
        Return to Pofile
      </Link>

      {/* กราฟิกเครื่องหมายเตือนสีเหลืองดำสไตล์สนามแข่งด้านล่าง */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: 'repeating-linear-gradient(-45deg, #fbe122, #fbe122 10px, #000 10px, #000 20px)',
        clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
        opacity: 0.5
      }}></div>
    </div>
  );
}