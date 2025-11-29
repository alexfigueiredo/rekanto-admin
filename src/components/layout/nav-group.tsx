import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "../ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type {
    NavCollapsible,
    NavGroup as NavGroupProps,
    NavLink,
} from "./types";

const useIsLinkActive = () => {
    const pathname = usePathname();

    return (href: NavLink["url"]) => pathname === href;
};

export function NavGroup({ title, items }: NavGroupProps) {
    const { state, isMobile } = useSidebar();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const key = `${item.title}-${item.url}`;

                    if (!item.items)
                        return <SidebarMenuLink item={item} key={key} />;

                    if (state === "collapsed" && !isMobile)
                        return (
                            <SidebarMenuCollapsedDropdown
                                item={item}
                                key={key}
                            />
                        );

                    return <SidebarMenuCollapsible item={item} key={key} />;
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}

function NavBadge({ children }: { children: ReactNode }) {
    return <Badge className="rounded-full px-1 py-0 text-xs">{children}</Badge>;
}

function SidebarMenuLink({ item }: { item: NavLink }) {
    const { setOpenMobile } = useSidebar();
    const isActive = useIsLinkActive();

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                asChild
                isActive={isActive(item.url)}
                tooltip={item.title}
            >
                <Link href={item.url} onClick={() => setOpenMobile(false)}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {item.badge && <NavBadge>{item.badge}</NavBadge>}
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    );
}

function SidebarMenuCollapsible({ item }: { item: NavCollapsible }) {
    const { setOpenMobile } = useSidebar();
    const isActive = useIsLinkActive();

    return (
        <Collapsible
            asChild
            className="group/collapsible"
            defaultOpen={item.items.some((subItem) => isActive(subItem.url))}
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.badge && <NavBadge>{item.badge}</NavBadge>}
                        <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 rtl:rotate-180" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="CollapsibleContent">
                    <SidebarMenuSub>
                        {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                    asChild
                                    isActive={isActive(subItem.url)}
                                >
                                    <Link
                                        href={subItem.url}
                                        onClick={() => setOpenMobile(false)}
                                    >
                                        {subItem.icon && <subItem.icon />}
                                        <span>{subItem.title}</span>
                                        {subItem.badge && (
                                            <NavBadge>{subItem.badge}</NavBadge>
                                        )}
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
}

function SidebarMenuCollapsedDropdown({ item }: { item: NavCollapsible }) {
    const isActive = useIsLinkActive();

    return (
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.badge && <NavBadge>{item.badge}</NavBadge>}
                        <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" side="right" sideOffset={4}>
                    <DropdownMenuLabel>
                        {item.title} {item.badge ? `(${item.badge})` : ""}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {item.items.map((sub) => (
                        <DropdownMenuItem
                            asChild
                            key={`${sub.title}-${sub.url}`}
                        >
                            <Link
                                className={`${isActive(sub.url as string) ? "bg-secondary" : ""}`}
                                href={sub.url}
                            >
                                {sub.icon && <sub.icon />}
                                <span className="max-w-52 text-wrap">
                                    {sub.title}
                                </span>
                                {sub.badge && (
                                    <span className="ms-auto text-xs">
                                        {sub.badge}
                                    </span>
                                )}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    );
}
