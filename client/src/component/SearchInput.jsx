import { useRef } from "react";

function SearchInput({ search, onSearchChange }) {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // เมื่อ focus input ให้ cursor ไปอยู่ที่จุดเริ่มต้น
    // ใช้ setTimeout เพื่อให้ทำงานหลังจาก browser จัดการ cursor แล้ว
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(0, 0);
      }
    }, 0);
  };

  const handleMouseDown = (e) => {
    // ป้องกัน default behavior เพื่อให้ cursor ไม่ไปอยู่ที่ตำแหน่งที่คลิก
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(0, 0);
    }
  };

  return (
    <>
      <h1 className="text-blue-500 text-5xl font-bold text-center mb-10 font-prompt">
        เที่ยวไหนดี
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-col w-2/3">
          <span className="text-gray-600 whitespace-nowrap">
            ค้นหาที่เที่ยว
          </span>
          <div>
            <input
              ref={inputRef}
              type="text"
              placeholder="หาที่เที่ยวแล้วไปกัน .."
              value={search}
              className="w-full border-b border-gray-300 outline-none pb-1 bg-transparent text-left"
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={handleFocus}
              onMouseDown={handleMouseDown}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
