import CardSection from "../component/CardSection";
import SearchInput from "../component/SearchInput";
import { useEffect, useState } from "react";

function SearchDestinationPage() {
  const [search, setSearch] = useState("");

  // debounce เล็กน้อย ลดการยิง request ถี่เกินไป
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 250);
    return () => clearTimeout(t);
  }, [search]);

  return (
    <div className="App min-h-screen bg-gray-100 py-8">
      <SearchInput search={search} onSearchChange={setSearch} />
      <CardSection keywords={debouncedSearch} />
    </div>
  );
}

export default SearchDestinationPage;