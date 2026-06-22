import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PencilSquare, Trash, X } from 'react-bootstrap-icons';

export default function ElectionManager(){
 const [candidates,setCandidates]=useState([
  {id:1,name:'Candidate A',party:'Bharatiya Janata Party',election:'Prime Minister Election 2026',status:'Active'},
  {id:2,name:'Candidate B',party:'Indian National Congress',election:'Prime Minister Election 2026',status:'Active'},
  {id:3,name:'Candidate C',party:'Aam Aadmi Party',election:'Prime Minister Election 2026',status:'Active'},
  {id:4,name:'Candidate D',party:'Trinamool Congress',election:'Prime Minister Election 2026',status:'Active'},
 ]);
 const empty={name:'',party:'',election:'',description:''};
 const [form,setForm]=useState(empty);
 const [showModal,setShowModal]=useState(false);
 const [editId,setEditId]=useState(null);
 const openAdd=()=>{setForm(empty);setEditId(null);setShowModal(true)};
 const openEdit=(c)=>{setForm({...c});setEditId(c.id);setShowModal(true)};
 const saveCandidate=(e)=>{
  e.preventDefault();
  if(editId){
   setCandidates(candidates.map(c=>c.id===editId?{...c,...form,status:'Active'}:c));
  } else {
   setCandidates([{id:Date.now(),...form,status:'Active'},...candidates]);
  }
  setShowModal(false);
 };
 const remove=(id)=>setCandidates(candidates.filter(c=>c.id!==id));
 return <div className='container py-5'>
   <div className='d-flex justify-content-between align-items-center mb-4'>
    <h2 className='fw-bold'>Manage Candidates</h2>
    <button className='btn btn-primary btn-lg rounded-3' onClick={openAdd}>+ Add Candidate</button>
   </div>
   <div className='card shadow-sm rounded-4 p-3'>
    <div className='table-responsive'>
    <table className='table align-middle'>
      <thead><tr><th>Candidate</th><th>Party</th><th>Election</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody>
      {candidates.map(c=><tr key={c.id}>
        <td>{c.name}</td><td>{c.party}</td><td>{c.election}</td>
        <td><span className='badge rounded-pill text-bg-success px-3 py-2'>{c.status}</span></td>
        <td>
         <button className='btn btn-light border me-2' onClick={()=>openEdit(c)}><PencilSquare/></button>
         <button className='btn btn-light border text-danger' onClick={()=>remove(c.id)}><Trash/></button>
        </td>
      </tr>)}
      </tbody>
    </table>
    </div>
   </div>

   {showModal && <div className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center' style={{background:'rgba(0,0,0,.35)',zIndex:1050}}>
     <div className='bg-white rounded-4 shadow p-4' style={{width:'420px',maxWidth:'95%'}}>
       <div className='d-flex justify-content-between align-items-start mb-3'>
        <div><h3 className='fw-bold mb-0'>{editId?'Update Candidate':'Add New Candidate'}</h3><small className='text-muted'>Fill in the candidate details</small></div>
        <button className='btn btn-link text-dark' onClick={()=>setShowModal(false)}><X size={28}/></button>
       </div>
       <form onSubmit={saveCandidate}>
        <div className='mb-3'><label className='form-label fw-semibold'>Full Name</label><input required className='form-control' placeholder='e.g., Jhon Doe' value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
        <div className='mb-3'><label className='form-label fw-semibold'>Party</label><input required className='form-control' placeholder='e.g., Bhartiya Janta Party' value={form.party} onChange={e=>setForm({...form,party:e.target.value})}/></div>
        <div className='mb-3'><label className='form-label fw-semibold'>Election</label><input required className='form-control' placeholder='Select Election' value={form.election} onChange={e=>setForm({...form,election:e.target.value})}/></div>
        <div className='mb-4'><label className='form-label fw-semibold'>Description</label><textarea className='form-control' rows='3' placeholder='Election Description' value={form.description||''} onChange={e=>setForm({...form,description:e.target.value})}/></div>
        <button className='btn btn-primary w-100'>{editId?'Update Candidate':'Create Election'}</button>
       </form>
     </div>
   </div>}
 </div>
}
