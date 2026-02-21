import { useState } from "react";

function CEDForm() {
  // 1. Setup States ทั้งหมด
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [selection, setSelection] = useState("");
  const [comment, setComment] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);
  
  // เพิ่ม State สำหรับเปิด/ปิด Card
  const [showCard, setShowCard] = useState(false);

  // Function สำหรับนับเลข (RPM)
  function increment() {
    setCount(count + 1);
  }

  // สไตล์แบบ Racing Dark Mode
  const f1Container = {
    backgroundColor: '#111',
    color: '#fff',
    padding: '25px',
    fontFamily: 'sans-serif',
    borderLeft: '5px solid #e10600',
    maxWidth: '600px',
    margin: 'auto',
    position: 'relative'
  };

  const inputStyle = {
    backgroundColor: '#222',
    color: '#fff',
    border: '1px solid #444',
    padding: '5px',
    margin: '5px 0',
    width: '100%',
    boxSizing: 'border-box'
  };

  // --- สไตล์ส่วน Preview ---
  const previewCard = {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    padding: '15px',
    borderRadius: '4px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    position: 'relative'
  };

  const previewLabel = {
    color: '#666',
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };

  const previewValue = {
    color: '#00ff41',
    fontSize: '15px',
    fontFamily: 'monospace',
    fontWeight: 'bold'
  };

  // --- สไตล์ของ Popup Card (Modal) ---
  const overlayStyle = {
    position: 'fixed',
    top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: '#1a1a1a',
    border: '2px solid #e10600',
    padding: '25px',
    borderRadius: '8px',
    width: '380px',
    boxShadow: '0 0 30px rgba(225, 6, 0, 0.4)',
    animation: 'fadeIn 0.3s ease'
  };

  return (
    <div style={f1Container}>
      
      {/* --- ส่วนของ Popup Card --- */}
      {showCard && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <h2 style={{ color: '#e10600', fontStyle: 'italic', margin: 0 }}>DATA SENT</h2>
              {/* <div style={{ fontSize: '10px', color: '#666' }}>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div> */}
            </div>

            <div style={{ textAlign: 'left', fontSize: '14px', borderTop: '1px solid #333', paddingTop: '15px' }}>
              <p style={{ margin: '8px 0' }}><span style={{color: '#666', fontWeight:'bold'}}>NAME:</span> <span style={{color: '#fff'}}>{name || "---"}</span></p>
              <p style={{ margin: '8px 0' }}><span style={{color: '#666', fontWeight:'bold'}}>YEAR:</span> <span style={{color: '#fff'}}>Year {dept || "N/A"}</span></p>
              <p style={{ margin: '8px 0' }}><span style={{color: '#666', fontWeight:'bold'}}>FACULTY:</span> <span style={{color: '#fff'}}>{selection || "N/A"}</span></p>
              
              {/* ส่วนแสดง Comment ใน Popup */}
              <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#000', borderLeft: '3px solid #00ff41' }}>
                <div style={{ color: '#00ff41', fontSize: '10px', fontWeight: 'bold', marginBottom: '5px' }}> COMMENT:</div>
                <div style={{ color: '#ccc', fontStyle: 'italic', fontSize: '13px', lineHeight: '1.4' }}>
                   "{comment || "No radio transmission message."}"
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowCard(false)}
              style={{ 
                marginTop: '25px', backgroundColor: '#e10600', color: '#fff', 
                border: 'none', padding: '10px 0', cursor: 'pointer', fontWeight: 'bold',
                width: '100%', textTransform: 'uppercase', letterSpacing: '1px'
              }}
            >
              Close Dashboard
            </button>
          </div>
        </div>
      )}

      {/* 1. Counter Section */}
      <div style={{ textAlign: 'center', border: '1px solid #333', padding: '10px' }}>
        <label style={{ color: '#e10600', fontWeight: 'bold' }}>SALARY YOU WANT: </label> 
        <span style={{ fontSize: '24px', color: '#00ff41' }}> {count * 10000} </span>
        <br />
        <button 
          onClick={() => increment()} 
          style={{ backgroundColor: '#e10600', color: '#fff', border: 'none', padding: '5px 15px', cursor: 'pointer', marginTop: '5px' }}
        >
          Click If You Want More Salary ▲
        </button>
      </div>

      <hr style={{ borderColor: '#333', margin: '20px 0' }} />

      {/* 2. Form Section */}
      <h1 style={{ fontStyle: 'italic', color: '#e10600', textAlign: "center" }}>MY FORM</h1>
      
      {/* --- Preview Section --- */}
      <div style={previewCard}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', backgroundColor: '#e10600' }}></div>
        <div style={{ gridColumn: 'span 2' }}>
          <div style={previewLabel}>NAME</div>
          <div style={previewValue}>{name || "UNKNOWN_DRIVER"}</div>
        </div>
        <div>
          <div style={previewLabel}>YEAR</div>
          <div style={previewValue}>{dept ? ` ${dept}` : "--"}</div>
        </div>
        <div>
          <div style={previewLabel}>Faculty</div>
          <div style={previewValue}>{selection || "--"}</div>
        </div>
        <div style={{ gridColumn: 'span 2', borderTop: '1px dashed #333', paddingTop: '10px', marginTop: '5px', color: '#aaa', fontStyle: 'italic', fontSize: '13px' }}>
          <span style={{ ...previewLabel, color: '#e10600' }}>[Comment]: </span>
          <span>{comment || "No incoming message..."}</span>
        </div>
      </div>
      
      <br />
      <hr style={{ borderColor: '#333' }} />

      <div>
        <label>NAME: </label>
        <input 
          type="text" 
          style={inputStyle} 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name..."
        />
      </div>

      <div style={{ margin: '15px 0' }}>
        <label>What Year You In: </label> <br />
        <input type="radio" name='rdDept' value="1" onChange={(e) => setDept(e.target.value)} /> Freshman
        <input type="radio" name='rdDept' value="2" onChange={(e) => setDept(e.target.value)} /> Sophomore
        <input type="radio" name='rdDept' value="3" onChange={(e) => setDept(e.target.value)} /> Junior
        <input type="radio" name='rdDept' value="4" onChange={(e) => setDept(e.target.value)} /> Senior
      </div>

      <div>
        <label>SELECT YOUR FACULTY: </label>
        <select 
          style={inputStyle} 
          value={selection} 
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value="">-- WHAT IS YOUR FACULTY --</option>
          <option value="ENG">FACULTY of Engineering</option>
          <option value="IT">FACULTY of Information Technology</option>
          <option value="SCI">FACULTY of Science</option>
          <option value="EDU">FACULTY of Technical Education</option>
        </select>
      </div>

      <hr style={{ borderColor: '#333' }} />

      <div>
        <label>Leave your (COMMENTS): </label><br />
        <textarea 
          style={{ ...inputStyle, height: '60px' }} 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Copy that, we are checking..."
        ></textarea>
      </div>

      <div style={{ marginTop: '15px' }}>
        <label style={{ cursor: 'pointer' }}>
          <input 
            type="checkbox" 
            checked={isAccepted} 
            onChange={(e) => setIsAccepted(e.target.checked)} 
          /> Confirm Your Data
        </label>
        <hr style={{ borderColor: '#333' }} />
        <div style={{ fontWeight: 'bold', color: isAccepted ? '#00ff41' : '#ff4b4b' }}>
          STATUS: {isAccepted ? "✅ READY TO SEND" : "❌ NOT READY TO SEND"}
        </div>
      </div>

      <hr style={{ borderColor: '#333' }} />
      
      <button 
        style={{ 
          width: '100%', 
          padding: '12px', 
          backgroundColor: isAccepted ? '#00ff41' : '#444', 
          color: '#000', 
          fontWeight: 'bold',
          border: 'none',
          cursor: isAccepted ? 'pointer' : 'not-allowed'
        }}
        onClick={() => setShowCard(true)}
        disabled={!isAccepted}
      >
        SEND
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default CEDForm;