import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router";

import { type ISidebarMenuItemBadges, SidebarMenuItemBadges } from "./SidebarMenuItemBadges";

export type ISidebarMenuItem = {
    id: string;
    icon?: string;
    label: string;
    isTitle?: boolean;
    url?: string;
    disabled?: boolean;
    linkProp?: AnchorHTMLAttributes<HTMLAnchorElement>;
    children?: ISidebarMenuItem[];
} & ISidebarMenuItemBadges;

export const SidebarMenuItem = ({
    id,
    url,
    children,
    icon,
    isTitle,
    badges,
    disabled,
    linkProp,
    label,
    activated,
}: ISidebarMenuItem & { activated: Set<string> }) => {
    const selected = activated.has(id);

    if (isTitle) {
        return <p className="sidebar-menu-title">{label}</p>;
    }

    if (!children) {
        return (
            <Link to={url ?? ""} className={`sidebar-menu-item ${selected && "active"}`} {...linkProp} 
            onClick={(event) => {
            if (disabled) {
                event.preventDefault();
            }
            linkProp?.onClick?.(event);
            }}>
                {icon && <span className={`iconify ${icon} size-4`} />}
                <span className={`grow ${disabled && "opacity-30"}`}>{label}</span>
                <SidebarMenuItemBadges badges={badges} />
            </Link>
        );
    }

    return (
        <div className="group collapse">
            <input
                aria-label="Sidemenu item trigger"
                type="checkbox"
                name="sidebar-menu-parent-item"
                defaultChecked={selected}
                className="peer"
            />
            <div className="collapse-title">
                {icon && <span className={`iconify ${icon} size-4`} />}
                <span className="grow">{label}</span>
                <SidebarMenuItemBadges badges={badges} />
                <span className="iconify lucide--chevron-right arrow-icon size-3.5" />
            </div>
            <div className="collapse-content">
                {children.map((item, index) => (
                    <SidebarMenuItem {...item} key={index} activated={activated} />
                ))}
            </div>
        </div>
    );
};
