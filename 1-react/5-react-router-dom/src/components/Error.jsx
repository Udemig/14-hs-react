const Error = ({ message }) => {
  return (
    <div className="text-center mt-5">
      <h2>Üzgünüz bir sorun oluştu :(</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
