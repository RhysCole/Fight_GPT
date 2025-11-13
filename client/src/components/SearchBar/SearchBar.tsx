interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {


    return (
        <div className="inline-flex items-center gap-92">
            <label className="input input-sm">
                <span className="iconify lucide--search text-base-content/80 size-3.5" />
                <input
                    type="search"
                    className="w-24 xl:w-60"
                    placeholder="Search for Upcoming Fights"
                    aria-label="Search orders"
                    value={searchQuery}
                    onChange={(event) => { setSearchQuery(event.target.value) }}
                />
            </label>
        </div>
    )
}