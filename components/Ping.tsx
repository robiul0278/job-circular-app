const Ping = () => {
  return (
      <span className="relative h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500"></span>
      </span>
  );
};

export default Ping;
