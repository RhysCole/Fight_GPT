import { useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";

import { ProfileSection } from "./ProfileSection";
import { Logo } from "@/components/Logo";

import { getActivatedItemParentKeys, getAdminMenuItems } from "@/pages/main/(layout)/helpers";
import { SidebarMenuItem } from "./SidebarMenuItem";

export const Sidebar = () => {
    const { pathname } = useLocation();
    const scrollRef = useRef<SimpleBarCore | null>(null);
    const hasMounted = useRef(false);

    const { viewInsights, fightId } = useSelector((state: RootState) => state.fights);

    const menuItems = useMemo(() => {
        return getAdminMenuItems({ viewInsights, fightId });
    }, [viewInsights, fightId]);

    const activatedParents = useMemo(
        () => new Set(getActivatedItemParentKeys(menuItems, pathname)),
        [menuItems, pathname],
    );

    useEffect(() => {
        setTimeout(() => {
            const contentElement = scrollRef.current?.getContentElement();
            const scrollElement = scrollRef.current?.getScrollElement();
            if (contentElement) {
                const activatedItem = contentElement.querySelector<HTMLElement>(".active");
                const top = activatedItem?.getBoundingClientRect().top;
                if (activatedItem && scrollElement && top && top !== 0) {
                    scrollElement.scrollTo({ top: scrollElement.scrollTop + top - 300, behavior: "smooth" });
                }
            }
        }, 100);
    }, [activatedParents, scrollRef]);

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }
        if (window.innerWidth <= 64 * 16) {
            const sidebarTrigger = document.querySelector<HTMLInputElement>("#layout-sidebar-toggle-trigger");
            if (sidebarTrigger) {
                sidebarTrigger.checked = false;
            }
        }
    }, [pathname]);

    return (
        <>
            <input
                type="checkbox"
                id="layout-sidebar-toggle-trigger"
                className="hidden"
                aria-label="Toggle layout sidebar"
            />
            <div id="layout-sidebar">
                <Link to="/" className="flex min-h-16 items-center justify-center">
                    <Logo />
                </Link>
                <div className="relative min-h-0 grow">
                    <SimpleBar ref={scrollRef} className="size-full">
                        <div id="sidebar-menu">
                            {menuItems.map((item, index) => (
                                <SidebarMenuItem {...item} key={index} activated={activatedParents} />
                            ))}
                        </div>
                    </SimpleBar>
                    <div className="from-base-100/60 pointer-events-none absolute start-0 end-0 bottom-0 h-7 bg-linear-to-t to-transparent"></div>
                </div>

                <ProfileSection/>
            </div>

            <label htmlFor="layout-sidebar-toggle-trigger" id="layout-sidebar-backdrop"></label>
        </>
    );
};
