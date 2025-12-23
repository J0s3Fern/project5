import { useState, useEffect } from 'react';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList';

export default function App() {
  const [notes, setNotes] = useState([]);
  const API_URL = 'http://localhost:5000/notes';

  // Fetch all notes
  const fetchNotes = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  const updateNote = async (id, updatedNote) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedNote),
    });
    fetchNotes();
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <CreateNote onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onUpdate={updateNote} />
    </div>
  );
}
