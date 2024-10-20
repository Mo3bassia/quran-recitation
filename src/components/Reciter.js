export default function Reciter({ reciter, index, setCurrentReciters }) {
  const surahs = reciter.moshaf[0].surah_list.split(",");
  function handleClick() {
    setCurrentReciters((c) => (c === reciter ? null : reciter));
  }
  return (
    <div
      className="border border-gray-300 dark:border-gray-700 py-5 px-5 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex gap-4 items-center">
        <div className="w-8 h-8 bg-blue-400 rotate-45 flex items-center justify-center xl text-white font-semibold rounded-lg shadow-md">
          <span className="rotate-[-45deg]">{index + 1}</span>
        </div>
        <span className="font-bold text-md sm:text-lg md:text-xl">
          {reciter.name}
        </span>
      </div>
      <div className="flex mt-3">
        <span>{reciter.moshaf[0].name}</span>
      </div>
    </div>
  );
}
