import { useEffect, useState, type FC, type FormEvent } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { mdeOptions, selectStyles } from "../../constants";
import ReactSelect from "react-select/creatable";
import { Link, useNavigate, useParams } from "react-router-dom";
import { X, Check } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../utils/helpers";
import type { NoteValues } from "../../types";
import { addNote, updateNote } from "../../redux/slices/noteSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Form: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { notes } = useAppSelector((store) => store.note);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // düzenleme modundaysa notun bilgilerini state'e aktar
  useEffect(() => {
    if (id) {
      const editNote = notes.find((note) => note.id === id);
      setTitle(editNote!.title);
      setContent(editNote!.content);
      setSelectedTags(editNote!.tags);
    } else {
      setTitle("");
      setContent("");
      setSelectedTags([]);
    }
  }, [id, notes]);

  // tüm notların etiketlerini al (benzersiz)
  const tags = [...new Set(notes.map((note) => note.tags).flat())];

  // form gönderilince:
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // form verisini nesne formatına getirdik
    const values: NoteValues = { title, content, tags: selectedTags };

    // reducer'a haber ver
    if (id) {
      dispatch(updateNote({ id, values }));
      toast.success("Not başarıyla güncellendi");
      navigate(`/note/${id}`);
    } else {
      dispatch(addNote(values));
      toast.success("Not başarıyla oluşturuldu");
      navigate("/");
    }
  };

  return (
    <div>
      {/* Sayfa Başlığı */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">
          {id ? "Not Düzenle" : "Yeni Not Oluştur"}
        </h1>
        <p className="text-text-secondary">
          Fikirlerinizi ve notlarınızı kaydedin{" "}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="card p-6 sm:p-8 animate-slide-up mt-6"
      >
        {/* Başlık */}
        <div className="mb-6">
          <label htmlFor="title" className="label">
            Başlık:
          </label>

          <input
            type="text"
            id="title"
            className="w-full px-4 py-2.5 bg-card border border-border rounded-md text-text-primary focus:ring-2 focus:ring-primary/30 transition"
            placeholder="Not başlığını giriniz"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* İçerik */}
        <div className="mb-6">
          <label htmlFor="content" className="label">
            İçerik:
          </label>

          <SimpleMde
            id="content"
            options={mdeOptions}
            className="w-full markdown-editor bg-transparent"
            value={content}
            onChange={(value) => setContent(value)}
          />
        </div>

        {/* Etiketler */}
        <div className="mb-6">
          <label htmlFor="tags" className="label">
            Etiketler:
          </label>

          <ReactSelect
            styles={selectStyles}
            isMulti
            className="text-black"
            value={selectedTags.map((t) => ({ value: t, label: t }))}
            options={tags.map((tag) => ({ value: tag, label: tag }))}
            onChange={(tags) => setSelectedTags(tags.map((tag) => tag.value))}
          />
        </div>

        {/* Butonlar */}
        <div className="flex flex-col md:flex-row gap-3 pt-4 border-t border-border">
          <Link to="/" className="form-button">
            <X className="size-4 mr-1.5" />
            İptal
          </Link>

          <button className="form-button bg-primary hover:bg-primary-hover">
            <Check className="size-4 mr.1.5" />
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
