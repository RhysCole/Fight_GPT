export function PreFightButtons() {
    return (
        <div className="flex">


            <div className="w-1/2 overflow-y-auto">
                <button className="btn text-primary-content from-error to-primary relative z-1 gap-2 border-none bg-gradient-to-r py-7 w-65"
                >
                    <span className="iconify lucide--blend size-4.5"></span>
                    <span className="text-base">Join a Community</span>
                </button>
            </div>


            <div className="w-1/2">
                <button className="btn text-primary-content from-primary to-secondary relative z-1 gap-2 border-none bg-gradient-to-r py-7 w-65 ml-4"
                >
                    <span className="iconify lucide--cuboid size-4.5"></span>
                    <span className="text-base">Create a Community</span>
                </button>
            </div>

        </div>
    )
}