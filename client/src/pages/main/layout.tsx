import { type ReactNode } from "react";

import { Sidebar } from "./(layout)/components/Sidebar";

import { Topbar } from "./(layout)/components/Topbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="size-full">
            <div className="flex">
                <Sidebar />
                <div className="flex h-screen min-w-0 grow flex-col overflow-auto">
                    <Topbar />
                    <div id="layout-content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
