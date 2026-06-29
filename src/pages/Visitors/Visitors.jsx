import { useState } from "react";

import { visitors as visitorData } from "../../data/visitorData";

import VisitorsHeader from "../../components/visitors/VisitorsHeader";
import SearchBar from "../../components/visitors/SearchBar";
import VisitorsTable from "../../components/visitors/VisitorsTable";

function Visitors() {
  const [search, setSearch] = useState("");

  const filteredVisitors = visitorData.filter((visitor) =>
    visitor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <VisitorsHeader />

        <div className="w-full md:w-96">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

      </div>

      <VisitorsTable visitors={filteredVisitors} />

    </div>
  );
}

export default Visitors;