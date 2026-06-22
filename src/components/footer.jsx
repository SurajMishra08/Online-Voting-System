import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';

export default function VoteSecureFooter() {
  const iconBox = {
    width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
  };

  const linkStyle = { color: 'rgba(255,255,255,0.72)', textDecoration: 'none', display: 'block', marginBottom: '12px', fontSize: '18px' };

  return (
    <footer
      style={{
        background: 'linear-gradient(160deg,#1f2144 0%, #55139e 45%, #293e9e 100%)',
        color: '#fff',
        padding: '42px 40px 28px',
        borderTop: '4px solid #7a2cff'
      }}
    >
      <div className='container-fluid'>
        <div className='row g-4'>
          <div className='col-lg-3 col-md-6'>
            <div className='d-flex align-items-center gap-3 mb-4'>
              <div style={{ ...iconBox, width: '52px', height: '52px', background: 'linear-gradient(135deg,#53a8ff,#8d5bff)' }}>
                <ShieldCheck size={28} />
              </div>
              <h2 className='mb-0 fw-bold'>VoteSecure</h2>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '18px', lineHeight: '1.45' }}>
              Empowering democracy through secure, transparent, and accessible online voting solutions.
            </p>
            <div className='d-flex gap-3 mt-4'>
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div key={i} style={iconBox}><Icon size={24} /></div>
              ))}
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <h3 className='fw-bold mb-4'>Quick Links</h3>
            {['About Us','How It Works','Elections','Results','FAQ'].map((item) => <a href='#' key={item} style={linkStyle}>{item}</a>)}
          </div>

          <div className='col-lg-3 col-md-6'>
            <h3 className='fw-bold mb-4'>Legal</h3>
            {['Privacy Policy','Terms of Service','Cookie Policy','Security','Accessibility'].map((item) => <a href='#' key={item} style={linkStyle}>{item}</a>)}
          </div>

          <div className='col-lg-3 col-md-6'>
            <h3 className='fw-bold mb-4'>Contact Us</h3>
            <div className='d-flex gap-3 mb-3'><Envelope size={24} /><span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '18px' }}>support@votesecure.com</span></div>
            <div className='d-flex gap-3 mb-3'><Telephone size={24} /><span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '18px' }}>+1 (555) 123-4567</span></div>
            <div className='d-flex gap-3'><GeoAlt size={24} /><span style={{ color: 'rgba(255,255,255,0.72)', fontSize: '18px' }}>123 Delhi,20001</span></div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.12)', margin: '34px 0 28px' }} />

        <div className='d-flex flex-column flex-lg-row justify-content-between gap-3'>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>© 2026 VoteSecure. All rights reserved.</div>
          <div className='d-flex flex-wrap gap-4'>
            {['Voter Rights','Election Guidelines','Support'].map((item) => (
              <a key={item} href='#' style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '18px' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
