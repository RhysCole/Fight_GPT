export type IStatItem = {
    title: string;
    text: number;
    icon: string;
    record: string;
    colourIndex: number;
};

const colourClasses = ['bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600', 'bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300']

export const InfoCard = ({ title , text, record, icon, colourIndex }: IStatItem) => {
    return (
        <div className="card bg-base-100 shadow">
            <div className="card-body gap-2">
                <div className="flex items-start justify-between gap-2 text-sm">
                    <div>
                        <p className="text-base-content/80 font-medium">{title}</p>
                        <div className="mt-3 flex items-center gap-2">
                            <p className="text-lg font-semibold">
                                <span className={` ${colourClasses[colourIndex]} bg-clip-text text-transparent`}>
                                    {text}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-base-200 rounded-box flex items-center p-2">
                        <span className={`iconify size-5 ${icon}`} />
                    </div>
                </div>

                <p className="text-base-content/60 text-xs">
                    {record}
                </p>
            </div>
        </div>
    );
};
