import { selectFighter } from "@/utils/selectFighters"

export function FightersList({filteredFightersList}) {

    function handleClick(id: number) {
        selectFighter(id);
    }

    return (
        <div className="px-4 py-2"> 
            <div className="overflow-x-auto">
                <table className="table table-sm w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className="text-right">Record</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFightersList.map((fighter) => (
                            <tr key={fighter.id} className="hover:bg-red-500/20 cursor-pointer" onClick={() => handleClick(fighter.id)}>
                                <td>{fighter.Name}</td>
                                <td className="text-right">{fighter.Record.replace('Record: ', '')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}