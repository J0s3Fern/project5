import { useState } from 'react';

export default function NoteItem({ note, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onUpdate(note.id, { title, content });
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '5px',
      }}
    >
      {isEditing ? (
        <>
          <input
            style={{ width: '100%', marginBottom: '5px' }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            style={{ width: '100%', marginBottom: '5px' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
