import type { FC } from "react";
import type { Note } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
}

const Card: FC<Props> = ({ note }) => {
  return (
    <Link
      to={`/note/${note.id}`}
      className="card group p-5 flex flex-col animate-fade-in transform hover:scale-[1.02] transition-all"
    >
      {/* Başlık */}
      <h3 className="mb-3 text-lg font-bold text-text-primary group-hover:text-primary transition-all line-clamp-1">
        {note.title}
      </h3>

      {/* İçerik */}
      <p className="line-clamp-2 text-text-secondary text-sm mb-4 flex-1">
        {note.content}
      </p>

      {/* Etiketler */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border">
        {note.tags.map((tag, key) => (
          <span
            key={key}
            className="bg-primary text-text-primary px-2 py-0.5 text-xs mt-2 rounded-full inline-flex items-center transition hover:bg-opacity-20"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Card;
