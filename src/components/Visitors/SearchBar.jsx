import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import Input from "../Common/Input";

function SearchBar({ search, setSearch }) {
    return (
        <div className="relative max-w-md">

            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <HiOutlineMagnifyingGlass />
            </div>

            <Input
                placeholder="Search by visitor name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
            />

        </div>
    );
}

export default SearchBar;