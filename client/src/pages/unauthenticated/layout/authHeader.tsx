import { ThemeToggleDropdown } from "@/components/ThemeToggleDropdown";

const AuthHeader = () => {
    return <>
        <div className="flex items-center justify-between">
            <img
                src="/logo/Fight_GPT_logo2.png"
                className={`bg-base-200 size-30 w-40 h-25 contrast-120`}
                alt=""
            />
            <ThemeToggleDropdown
                triggerClass="btn btn-circle btn-outline border-base-300"
                dropdownClass="dropdown-end">

                <span className="iconify lucide--sun size-4.5" />
            </ThemeToggleDropdown>
        </div>
    </>
}

export default AuthHeader;