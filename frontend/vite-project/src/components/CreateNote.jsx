import { useState } from 'react';

export default function CreateNote({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = () => {
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>Create Note</button>
    </div>
  );
}
