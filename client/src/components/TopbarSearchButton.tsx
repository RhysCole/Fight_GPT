import { filteredFighters } from "@/utils/searchFunctions";
import { fetchFightersList } from "@/utils/selectFighters";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "@/contexts/store";
import { FightersList } from "./SearchBar/FightersList";
import { FightList } from "./SearchBar/FightList";

export const TopbarSearchButton = () => {

    const [ searchFunction, setSearchFunction] = useState(false)
    const [ searchText, setSearchText ] = useState("")
    const [ filteredFightersList, setFilteredFightersList ] = useState([]); 


    const fighters = useSelector((state: RootState) => state.fighters.fightersList ?? [])

    useEffect(() => {
        fetchFightersList() 
    }, [])

    useEffect(() => {
        const results = filteredFighters(fighters, searchText);
        setFilteredFightersList(results);

    }, [fighters, searchText])


    return (
        <>
            <button
                className="btn btn-outline btn-sm btn-ghost border-base-300 text-base-content/70 hidden h-9 w-48 justify-start gap-2 !text-sm md:flex"
                onClick={() => document.querySelector<HTMLDialogElement>("#topbar-search-modal")?.showModal()}>
                <span className="iconify lucide--search size-4" />
                <span>Search</span>
            </button>
            <button
                className="btn btn-outline btn-sm btn-square btn-ghost border-base-300 text-base-content/70 flex size-9 md:hidden"
                aria-label="Search"
                onClick={() => document.querySelector<HTMLDialogElement>("#topbar-search-modal")?.showModal()}>
                <span className="iconify lucide--search size-4" />
            </button>




            <dialog id="topbar-search-modal" className="modal p-0">
                <div className="modal-box p-0">
                    <div className="input border-base-300 w-full rounded-none border-0 border-b focus:!outline-0 active:!outline-0">
                        <span className="iconify lucide--search text-base-content/60 size-4.5" />
                        <input type="search" className="grow" placeholder="Search" aria-label="Search" onChange={(e) => setSearchText(e.target.value)}/>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost" aria-label="Close">
                                <span className="iconify lucide--x text-base-content/80 size-4" />
                            </button>
                        </form>
                    </div>
                    <ul className="menu w-full pt-0">
                        <li className="menu-title">Search Option</li>
                        <li onClick={() => setSearchFunction(!searchFunction)}>
                            <div>
                                <span className="iconify lucide--calendar size-4.5" />
                                <button className={`btn ${searchFunction && 'btn-soft'} btn-error`}>Search for Fights</button>
                            </div>
                        </li>
                        <li onClick={() => setSearchFunction(!searchFunction)}>
                            <div>
                                <span className="iconify lucide--hand-fist size-4.5" />
                                <button className={`btn ${!searchFunction && 'btn-soft'} btn-error`}>Search for Fighters</button>
                            </div>
                        </li>
                    </ul>
                    <hr className="border-base-300 h-px" />
                    <ul className="menu w-full pt-0">
                        <li className="menu-title">Tables</li>
                        {searchFunction ? (
                            <FightersList filteredFightersList={filteredFightersList}/>
                        ):
                        (
                            <FightList searchText={searchText}/>
                        )
                        }
                    </ul>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};
