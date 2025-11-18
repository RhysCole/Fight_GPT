import { useRef } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "@/contexts/store"
import { useCreateCommunity } from "@/hooks/searchHooks/useCommunity"

export function CreateCommunity({close}: {close: () => void}) {
    const fight_id = useSelector((state: RootState) => state.fights.fightId)
    const user_id = useSelector((state: RootState) => state.user.profile?.id)

    const community_name_ref = useRef<HTMLInputElement>(null)

    const { mutate: createCommunity, isPending } = useCreateCommunity();

    const handleCreate = () => {
        const name = community_name_ref.current?.value;

        if (!name) {
            alert("Please enter a community name");
            return;
        }
        if (!fight_id || !user_id) {
            alert("Missing fight or user data");
            return;
        }

        createCommunity({
            community_name: name,
            fight_id: fight_id,
            user_id: user_id
        });

        close();
    }

    return (
            <fieldset className="fieldset rounded-box max-w-xs border p-4 ">

                <label className="fieldset-label" htmlFor="community-name">
                    Name
                </label>

                <input
                    type="text"
                    className="input"
                    id="community-name"
                    placeholder="Enter name..."
                    ref={community_name_ref}
                />

                <button
                    className="btn btn-primary mt-4"
                    onClick={handleCreate}
                    disabled={isPending}
                >
                    {isPending ? "Creating..." : "Create"}
                </button>
            </fieldset>
    )
}