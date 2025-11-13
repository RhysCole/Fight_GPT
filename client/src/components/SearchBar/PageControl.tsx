interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

export const PageControl = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {

    const handlePrev = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-center space-x-4 p-4">

            <div className="rounded-[calc(var(--radius-box)+1px)] bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 p-px max-sm:hidden">
                <button
                    onClick={handlePrev}
                    className="btn btn-sm bg-base-100 text-[15px]"
                >
                    Prev
                </button>
            </div>

            <span className="text-sm">
                Page {currentPage} of {totalPages}
            </span>

            <div className="rounded-[calc(var(--radius-box)+1px)] bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 p-px max-sm:hidden">     
                <button
                className="btn btn-sm bg-base-100 text-[15px]"
                onClick={handleNext}
            >
                {"  Next  "}
            </button>
            </div>
        </div>
    );
};