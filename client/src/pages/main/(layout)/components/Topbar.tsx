import { ThemeToggleDropdown } from "@/components/ThemeToggleDropdown";
import { TopbarSearchButton } from "@/components/TopbarSearchButton";

export function Topbar() {
    return (
        <div
            role="navigation"
            aria-label="Navbar"
            className="flex items-center justify-between px-3"
            id="layout-topbar"
        >
            <div className="inline-flex items-center gap-1">
                {/* 1. Menu Toggle Button */}
                <label
                    className="btn btn-square btn-ghost btn-sm"
                    aria-label="Leftmenu toggle"
                    htmlFor="layout-sidebar-toggle-trigger"
                >
                    <span className="iconify lucide--menu size-5" />
                </label>

                <TopbarSearchButton />
            </div>

            <div className="inline-flex items-center gap-1.5 mr-6">
                <ThemeToggleDropdown
                    triggerClass="btn btn-sm btn-circle btn-ghost iconify lucide--settings-2 size-4.5"
                    dropdownClass="dropdown-center"
                    dropdownContentClass="mt-2"
                    iconClass="size-4.5"
                />

            </div>
        </div>
    );
};