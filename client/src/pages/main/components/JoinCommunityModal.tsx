import { useState, useRef } from "react";
import { useJoinCommunity } from "@/hooks/useCommunity";
import { useSelector } from "react-redux";
import { type RootState } from "@/contexts/store";

interface JoinModalProps {
    isOpen: boolean;
    onClose: () => void;
    communityId: number;
    fightId: number;
    communityName: string;
}

export function JoinModal({ isOpen, onClose, communityId, fightId, communityName }: JoinModalProps) {
    const [selectedSide, setSelectedSide] = useState<"Red" | "Blue" | null>(null);
    const { mutate: joinCommunity, isPending } = useJoinCommunity();
    const betRef = useRef<HTMLInputElement>(null);

    const userID = useSelector((state: RootState) => state.user.profile?.id);

    const handleSubmit = () => {
        if (!selectedSide || !userID || betRef.current === null) return;
        const betValue = betRef.current.value;

        joinCommunity({
            community_id: communityId,
            user_id: userID,
            bet: Number(betValue),
        }, {
            onSuccess: () => {
                onClose();
                setSelectedSide(null);
            }
        });
    };

    if (!isOpen) return null;

    return (
        <dialog className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Join {communityName}</h3>
                <p className="py-4 text-base-content/70">
                    To join this community for Fight #{fightId}, you must place your prediction.
                </p>

                <div className="grid grid-cols-3 gap-4 my-4">
                    <button
                        onClick={() => setSelectedSide("Red")}
                        className={`btn h-24 flex flex-col items-center gap-2 border-2 
                            ${selectedSide === "Red"
                                ? "btn-error border-error text-white"
                                : "btn-outline border-base-200 hover:border-error hover:text-error"
                            }`}
                    >
                        <span className="text-xl font-bold">RED CORNER</span>
                        {selectedSide === "Red" && <span className="iconify lucide--check-circle size-6" />}
                    </button>

                    <button
                        onClick={() => setSelectedSide("Blue")}
                        className={`btn h-24 flex flex-col items-center gap-2 border-2
                            ${selectedSide === "Blue"
                                ? "btn-info border-info text-white"
                                : "btn-outline border-base-200 hover:border-info hover:text-info"
                            }`}
                    >
                        <span className="text-xl font-bold">BLUE CORNER</span>
                        {selectedSide === "Blue" && <span className="iconify lucide--check-circle size-6" />}
                    </button>

                    <label className="input input-bordered border-2 flex items-center gap-3 h-24 bg-base-100 focus-within:border-base-content/40">
                        <span className="iconify lucide--dollar-sign text-base-content/40 size-5" />
                        <input
                            type="number"
                            className="grow font-bold text-lg placeholder:font-normal placeholder:text-base-content/30"
                            placeholder="50.00"
                            min="0"
                            ref={betRef}
                        />
                    </label>
                </div>

                <div className="modal-action">
                    <button className="btn" onClick={onClose} disabled={isPending}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-neutral"
                        onClick={handleSubmit}
                        disabled={!selectedSide || isPending}
                    >
                        {isPending ? <span className="loading loading-spinner" /> : "Confirm Join"}
                    </button>
                </div>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button onClick={onClose}>close</button>
            </form>
        </dialog>
    );
}