interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

interface NoteValues extends Omit<Note, "id"> {}

export type { Note, NoteValues };
