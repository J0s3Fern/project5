import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onUpdate }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
