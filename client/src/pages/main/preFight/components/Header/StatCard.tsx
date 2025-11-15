
import { useSelector } from 'react-redux';
import type { RootState } from "@/contexts/store";
import { useState } from 'react';

const colourClasses = [
    'bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600', 
    'bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300'
];


const StatRow = ({ label, redValue, blueValue }: { label: string, redValue: string | number, blueValue: string | number }) => (
    <div className="flex justify-between items-center w-full">
        <span className={`font-semibold text-lg inline-block bg-clip-text text-transparent ${colourClasses[0]}`}>
            {redValue}
        </span>
        <span className="text-xs text-base-content/70 uppercase">
            {label}
        </span>
        <span className={`font-semibold text-lg inline-block bg-clip-text text-transparent ${colourClasses[1]}`}>
            {blueValue}
        </span>
    </div>
);


export function StatCard() {
    const [selected, setSelected] = useState('physical'); 

    const features = useSelector((state: RootState) => state.fights.preFightData?.features);

    const { 
        red_height, blue_height, red_reach, blue_reach, height_diff_cm, reach_diff_cm, 
        red_finish_score, blue_finish_score, 
        red_prime_score, blue_prime_score, prime_score_diff
    } = features;

    return (
        <div className="card bg-base-100 shadow">
            <div className="card-body gap-3">
                
                <div className="tabs tabs-box tabs-xs flex mr-4">
                    <div
                        className={`tab flex-1 px-3 ${selected === "physical" ? "tab-active" : ""}`}
                        onClick={() => setSelected("physical")}
                    >
                        Physical
                    </div>
                    <div
                        className={`tab flex-1 px-3 ${selected === "skill" ? "tab-active" : ""}`}
                        onClick={() => setSelected("skill")}
                    >
                        Skill
                    </div>
                    <div
                        className={`tab flex-1 px-3 ${selected === "prime" ? "tab-active" : ""}`}
                        onClick={() => setSelected("prime")}
                    >
                        Prime
                    </div>
                </div>

                {/* 5. Conditionally Rendered Content */}
                <div className="mt-3 flex flex-col gap-3">
                    {selected === 'physical' && (
                        <>
                            <StatRow 
                                label="Height" 
                                redValue={`${red_height.toFixed(0)} cm`} 
                                blueValue={`${blue_height.toFixed(0)} cm`}
                            />
                            <StatRow 
                                label="Reach" 
                                redValue={`${red_reach.toFixed(0)} cm`}
                                blueValue={`${blue_reach.toFixed(0)} cm`}
                            />
                        </>
                    )}

                    {selected === 'skill' && (
                        <>
                            <StatRow 
                                label="Finish Score" 
                                redValue={red_finish_score.toFixed(2)} 
                                blueValue={blue_finish_score.toFixed(2)} 
                            />
                            <p className="text-base-content/60 text-xs text-center pt-2">
                                A measure of finishing ability.
                            </p>
                        </>
                    )}

                    {selected === 'prime' && (
                        <>
                            <StatRow 
                                label="Prime Score" 
                                redValue={red_prime_score.toFixed(2)} 
                                blueValue={blue_prime_score.toFixed(2)} 
                            />
                            <p className="text-base-content/60 text-xs text-center pt-2">
                                A score for fighter's peak physical and strategic performance.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};