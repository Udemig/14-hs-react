const Arrow = ({ isAtBottom, scrollToBottom, unreadCount }) => {
  return (
    !isAtBottom && (
      <button
        onClick={scrollToBottom}
        className="sticky bottom-0 ml-auto bg-zinc-300 p-2 rounded-lg hover:bg-zinc-400 cursor-pointer transition shadow-black/50 shadow-md"
      >
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {unreadCount}
          </span>
        )}
        <img src="/arrow.svg" alt="ok" className="w-3" />
      </button>
    )
  );
};

export default Arrow;
