import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PencilSquare, Trash, X } from 'react-bootstrap-icons';

export default function ElectionPage() {
  const [elections, setElections] = useState([
    { id: 1, title: 'Prime Minister Election 2026', description: 'National election', startDate: '2026-01-10', endDate: '2026-01-20' }
  ]);
  const emptyForm = { title: '', description: '', startDate: '', endDate: '' };
  const [form, setForm] = useState(emptyForm);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const openAdd = () => { setForm(emptyForm); setEditId(null); setShowModal(true); };
  const openEdit = (item) => { setForm(item); setEditId(item.id); setShowModal(true); };
  const closeModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setElections(elections.map(el => el.id === editId ? { ...form, id: editId } : el));
    } else {
      setElections([{ ...form, id: Date.now() }, ...elections]);
    }
    closeModal();
  };

  const handleDelete = (id) => setElections(elections.filter(el => el.id !== id));

  return (
    <div className='container py-5'>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <h2 className='fw-bold'>Manage Elections</h2>
        <button className='btn btn-primary btn-lg rounded-3' onClick={openAdd}>+ Add Election</button>
      </div>

      <div className='card shadow-sm rounded-4 p-3'>
        <div className='table-responsive'>
          <table className='table align-middle'>
            <thead>
              <tr>
                <th>Election Title</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {elections.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <button className='btn btn-light border me-2' onClick={() => openEdit(item)}><PencilSquare /></button>
                    <button className='btn btn-light border text-danger' onClick={() => handleDelete(item.id)}><Trash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center' style={{ background: 'rgba(0,0,0,.35)', zIndex: 1050 }}>
          <div className='bg-white rounded-4 shadow p-4' style={{ width: '700px', maxWidth: '95%' }}>
            <div className='d-flex justify-content-between align-items-start mb-3'>
              <div>
                <h2 className='fw-bold mb-0'>{editId ? 'Update Election' : 'Create New Election'}</h2>
                <small className='text-muted'>Fill in the details to create a new election</small>
              </div>
              <button className='btn btn-link text-dark' onClick={closeModal}><X size={30} /></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label className='form-label fw-semibold'>Election Title</label>
                <input type='text' className='form-control' required placeholder='e.g., Prime Minister Election 2026' value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
              </div>

              <div className='mb-3'>
                <label className='form-label fw-semibold'>Description</label>
                <input type='text' className='form-control' required placeholder='Election Description' value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
              </div>

              <div className='row'>
                <div className='col-md-6 mb-3'>
                  <label className='form-label fw-semibold'>Start Date</label>
                  <input type='date' className='form-control' required value={form.startDate} onChange={e => setForm({ ...form, startDate: e.target.value })} />
                </div>
                <div className='col-md-6 mb-3'>
                  <label className='form-label fw-semibold'>End Date</label>
                  <input type='date' className='form-control' required value={form.endDate} onChange={e => setForm({ ...form, endDate: e.target.value })} />
                </div>
              </div>

              <button className='btn btn-primary w-100 mt-3'>{editId ? 'Update Election' : 'Create Election'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
