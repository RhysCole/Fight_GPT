import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { type RootState } from "@/contexts/store";
import { useDispatch } from "react-redux";
import { logout } from "@/contexts/slices/userSlice";

export function ProfileSection() {
    const dispatch = useDispatch();

    const { profile } = useSelector((state: RootState) => state.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return <>
        <hr className="border-base-300" />
        <ul className="menu w-full">
            <li>
                <Link to="/pages/settings" className="flex items-center gap-2">
                    <span className="iconify lucide--settings-2 size-4" />
                    Settings
                </Link>
            </li>
        </ul>
        <div className="dropdown dropdown-top dropdown-end w-full">
            <div
                tabIndex={0}
                role="button"
                className="bg-base-200 hover:bg-base-300 rounded-box mx-2 mt-0 flex cursor-pointer items-center gap-2.5 px-3 py-2 transition-all">
                <div className="avatar">
                    <div className="bg-base-200 mask mask-squircle w-8">
                        <img src="/images/avatars/1.png" alt="Avatar" />
                    </div>
                </div>
                <div className="grow -space-y-0.5">
                    <p className="text-sm font-medium">{`${profile.firstname} ${profile.lastname[0]}`}</p>
                    <p className="text-base-content/60 text-xs">@withden</p>
                </div>
                <span className="iconify lucide--chevrons-up-down text-base-content/60 size-4" />
            </div>
            <ul
                role="menu"
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box shadow-base-content/4 mb-1 w-48 p-1 shadow-[0px_-10px_40px_0px]">
                <li>
                    <Link className="text-error hover:bg-error/10" to="/auth/login">
                        <span className="iconify lucide--log-out size-4" />
                        <button onClick={handleLogout}>Logout</button>
                    </Link>
                </li>
            </ul>
        </div>
    </>
}