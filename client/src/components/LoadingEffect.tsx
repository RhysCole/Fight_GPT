type ILoadingEffect = {
    show: boolean;
    className?: string;
    children?: React.ReactNode
    isError?: boolean
    error?: string
};

export const LoadingEffect = ({ show, className = '', children, isError, error}: ILoadingEffect) => {

    if (show) {
        return (
        <div className={`skeleton ${className}`}>
            <div className={`transition-all blur-sm pointer-events-none select-none`}>
                {children}
            </div>
        </div>);
    }else if (isError) {
        return (
        <div className={`relative ${className}`}>
            <div className="invisible">
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-red-500/30 text-red-700 p-4">
                <p className="text-center">{error}</p>
            </div>
        </div>
    );
    }
    return <div className={`relative ${className}`}>{ children }</div>;
};
