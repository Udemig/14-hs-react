const TextArea = () => {
  return (
    <textarea
      name="text"
      placeholder="Neler Oluyor?"
      className="w-full mb-2 md:text-lg text-zinc-300 outline-none resize-y min-h-10 max-h-[300px]"
    />
  );
};

export default TextArea;
