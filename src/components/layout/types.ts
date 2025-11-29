import type { LinkProps } from "next/link";
import type { ElementType } from "react";

export type User = {
    name: string;
    email: string;
    avatar: string;
};

export type Team = {
    name: string;
    logo: ElementType;
};

export type BaseNavItem = {
    title: string;
    badge?: string;
    icon?: ElementType;
};

export type NavLink = BaseNavItem & {
    url: LinkProps["href"] | (string & {});
    items?: never;
};

export type NavCollapsible = BaseNavItem & {
    items: (BaseNavItem & { url: LinkProps["href"] | (string & {}) })[];
    url?: never;
};

export type NavItem = NavCollapsible | NavLink;

export type NavGroup = {
    title: string;
    items: NavItem[];
};

export type SidebarData = {
    user: User;
    teams: Team[];
    navGroups: NavGroup[];
};
