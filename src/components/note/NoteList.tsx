import styled from 'styled-components';
import { Note } from '@/data/noteData';

type NoteListProps = {
  notes: Note[];
  onNoteClick: (note: Note) => void;
};

const NoteList = ({ notes, onNoteClick }: NoteListProps) => {
  return (
    <NoteListStyle>
      {notes.map((note) => (
        <div
          key={note.id}
          className='note-item'
          onClick={() => onNoteClick(note)}>
          <div className='note-title-container'>
            <img src='/assets/images/book.png' alt='book' width={20} />
            <h4>{note.title}</h4>
          </div>
          <div className='note-tags'>
            {note.tags.map((tag, idx) => (
              <span key={idx} className='note-tag'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </NoteListStyle>
  );
};

export default NoteList;

const NoteListStyle = styled.div`
  margin-top: 10px;
  .note-item {
    cursor: pointer;
    margin-bottom: 30px;

    .note-title-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .note-tags {
      margin-top: 16px;
      margin-left: 28px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;

      .note-tag {
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSize_xxs};
        font-weight: bold;
        color: ${({ theme }) => theme.color_keyBlue};
        background-color: ${({ theme }) => theme.color_bgBlue};
        padding: 6px 14px;
        border-radius: 5px;
      }
    }
  }
`;
