import type { FighterStats } from "@/models/types";
import { fetchImageURL } from "@/utils/fighterImageAPI";
import { useEffect, useState } from "react";

export function FighterBoard({ stats }: { stats: FighterStats }) {

    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            try {
                const url = await fetchImageURL(stats.stats.name);
                setImageURL(url);
            } catch (error) {
                console.error("Failed to fetch image URL:", error);
                // Optionally handle error (e.g., set a placeholder URL)
            }
        };
        loadImage();
    }, [stats.stats.name]) 

    const fighterName = stats.stats.name;
    const fighterRecord = stats.stats.record.replace('Record: ', '');

    return (
        // Parent: Establishes a flex container and sets full height
        <div className="flex h-screen">
            
            <div className="w-1/5 w-70 mr-4 flex flex-col gap-4 overflow-y-auto items-center">
                <div 
                    className="
                        h-96 w-full max-w-sm flex-shrink-0 rounded-lg shadow-lg mb-4 
                        bg-cover bg-center bg-no-repeat
                    "
                    style={{ 
                        backgroundImage: `url(${imageURL})`,
                        backgroundPosition: 'center top' 
                    }}
                    aria-label={`Image of ${stats.stats.name}`}
                >
                </div>

                <div className="text-center p-2 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-3xl font-extrabold text-primary-content">
                        {fighterName}
                    </h2>
                    <p className="text-lg font-medium text-base-content/70 mt-1">
                        Record: **{fighterRecord}**
                    </p>
                </div>
            </div>

            <div className="w-4/5 bg-base-100 p-4 overflow-y-auto mb-40">
                <h1 className="text-2xl font-bold border-b pb-2">Detailed Statistics</h1>
            </div>
        </div>
    );
}