const AuthToggle = ({ isLoginMode, setIsLoginMode }) => {
  return (
    <p className="mt-5 select-none">
      <span className="text-gray-500">{isLoginMode ? "Hesabınız yoksa" : "Hesabınız varsa"}</span>

      <span onClick={() => setIsLoginMode(!isLoginMode)} className="text-blue-500 cursor-pointer ms-2 hover:underline">
        {isLoginMode ? "Kaydolun" : "Giriş Yapın"}
      </span>
    </p>
  );
};

export default AuthToggle;
