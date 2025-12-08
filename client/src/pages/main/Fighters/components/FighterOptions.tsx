import { type MouseEventHandler } from "react";

export type IFighterStatItem = {
    id: string;
    type: string;       
    title: string;       
    description: string; 
    icon: string;
    selected?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
};

export const FighterOptions = ({ type, title, description, icon, selected = false, onClick }: IFighterStatItem) => {
    return (
        <div
            onClick={onClick}
            className={`card bg-base-100 shadow cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] 
            ${selected && "from-error shadow-primary/10 to-warning/95 text-primary-content bg-linear-to-tr shadow-md"}`}>
            
            <div className="card-body gap-1 p-4 2xl:p-5">
                <div className="flex items-center gap-3 mb-2">
                    <div
                        className={`bg-base-200 rounded-box flex items-center p-2 ${selected && "bg-primary-content/20 text-white"}`}>
                        <span className={`iconify size-5 ${icon}`} />
                    </div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${selected ? "text-primary-content/80" : "text-base-content/60"}`}>
                        {type}
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-bold leading-tight 2xl:text-xl">
                        {title}
                    </h3>
                </div>
                <div className="mt-1">
                    <p className={`text-xs leading-relaxed ${selected ? "text-primary-content/90" : "text-base-content/60"}`}>
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};