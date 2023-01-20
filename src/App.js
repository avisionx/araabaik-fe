import { useState, useEffect } from 'react';
import featuredImg from './araabaik-placeholder.webp';
import logo from './arabaik.png';
import './App.css';


function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [])


  return (
    <div style={{
      display: 'flex',
      overflow: 'hidden',
      height: "100vh",
      width: "100vw"
    }}>
      <div style={{ width: isMobile ? '100%' : '50%', backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div style={{ color: "#fffffa", width: isMobile ? '100%' : '50%', position: isMobile ? "absolute" : 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isMobile ? 'rgba(0,0,0,0.4)' : '#0B0D18', top: 0, bottom: 0, left: 0, right: 0, flexDirection: 'column' }}>
        <img style={{ marginBottom: 'auto', marginTop: '16px' }} width="150px" src={logo} alt="" />
        <div style={{ marginBottom: 'auto', padding: '0 16px', textAlign: 'center', }}>
          <h1 style={{ border: '1px solid #fffffa', padding: '0.75rem 5rem', fontSize: '3rem', letterSpacing: '-2px', fontWeight: 'lighter', }}>COMING SOON!</h1>
          <p style={{ marginTop: '3.5rem', fontSize: '1.25rem' }}>We are working on a new digital experience for you! <br />Till then keep ordering from us. Give us a call at</p>
          <h1 className='text-gradient' style={{ marginTop: '1.25rem', fontSize: '2rem', letterSpacing: '4px', fontWeight: 'bold', }}>+91 - 93104 47523</h1>
        </div>
        <p style={{ marginBottom: '16px', marginTop: '64px', fontSize: '0.75rem' }}>Copyright © {new Date().getFullYear()} Araabaik | All rights reserved</p>
      </div>
    </div >
  );
}

export default App;
