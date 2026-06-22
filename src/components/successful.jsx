import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeft, CheckLg } from 'react-bootstrap-icons';

export default function VoteSuccessPage() {
  return (
    <div style={{ backgroundColor: '#efefef', minHeight: '100vh', width: '100%' }}>
      <div className='container-fluid px-4 pt-4'>
        <button
          className='btn d-inline-flex align-items-center gap-2 fw-semibold'
          style={{ backgroundColor: '#e7ef8a', borderRadius: '10px', padding: '8px 18px', border: 'none' }}
        >
          <ArrowLeft size={20} />
          Go back to Dashboard
        </button>
      </div>

      <div className='d-flex flex-column justify-content-center align-items-center text-center' style={{ minHeight: '80vh' }}>
        <h1
          className='fw-bold mb-4'
          style={{ fontSize: '45px', color: '#000', letterSpacing: '-1px' }}
        >
          Vote Submitted Successfully!!
        </h1>

        <div
          className='d-flex justify-content-center align-items-center'
          style={{
            width: '86px',
            height: '86px',
            borderRadius: '50%',
            backgroundColor: '#2ecc40',
            border: '1px solid #111',
            boxShadow: '0 1px 0 rgba(0,0,0,.2)'
          }}
        >
          <CheckLg size={54} color='white' strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}
