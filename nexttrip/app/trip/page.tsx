import Plans from "@/app/ui/trip/plans";
import Map from "../ui/trip/map";
import SearchBar from "../ui/trip/searchbar";

export default function Page() {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="flex-grow md:overflow-y-auto">
                <Map/>
            </div>
            <div className="w-full flex-none md:w-96">
                <SearchBar/>
                <Plans/>
            </div>
        </div>
    );
}