import CardSection from "../component/CardSection";
import SearchInput from "../component/SearchInput";
import { useState } from "react";

function SearchDestinationPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="App min-h-screen bg-gray-100 py-8">
      <SearchInput search={search} onSearchChange={setSearch} />
      <CardSection keywords={search} />
    </div>
  );
}

export default SearchDestinationPage;
