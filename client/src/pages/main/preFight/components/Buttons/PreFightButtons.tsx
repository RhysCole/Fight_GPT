import { useRef } from 'react';
import { CreateCommunity } from './CreateCommunity';

export function PreFightButtons() {
    const joinModalRef = useRef<HTMLDialogElement>(null);
    const createModalRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="flex">
            <div className="w-1/2 overflow-y-auto">
                <button
                    className="btn text-primary-content from-error to-primary relative z-1 gap-2 border-none bg-gradient-to-r py-7 w-65"
                    onClick={() => joinModalRef.current?.showModal()}
                >
                    <span className="iconify lucide--blend size-4.5"></span>
                    <span className="text-base">Join a Community</span>
                </button>

                <dialog ref={joinModalRef} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                                <span className="iconify lucide--x size-4" />
                            </button>
                        </form>
                        <h3 className="text-lg font-medium">Join a Community!</h3>#

                        

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>

            <div className="w-1/2">
                <button
                    className="btn text-primary-content from-primary to-secondary relative z-1 gap-2 border-none bg-gradient-to-r py-7 w-65 ml-4 items-center justify-center"
                    onClick={() => createModalRef.current?.showModal()}
                >
                    <span className="iconify lucide--cuboid size-4.5"></span>
                    <span className="text-base">Create a Community</span>
                </button>

                <dialog ref={createModalRef} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                                <span className="iconify lucide--x size-4" />
                            </button>
                        </form>
                        <h3 className="text-lg font-medium">Create a New Community!</h3>

                        <div className='flex justify-center'>
                            <CreateCommunity close={() => {createModalRef.current?.close()}}/>
                        </div>
                        

                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}