function SearchInput({ search, onSearchChange }) {
  return (
    <>
      <h1 className="text-blue-600 text-5xl font-bold text-center mb-10 font-prompt">
        เที่ยวไหนดี
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col w-2/3">
          <span className="text-gray-600 whitespace-nowrap">
            ค้นหาที่เที่ยว
          </span>
          <div>
            <input
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน .."
              value={search}
              className="w-full border-b border-gray-300 outline-none pb-1 bg-transparent text-left"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
