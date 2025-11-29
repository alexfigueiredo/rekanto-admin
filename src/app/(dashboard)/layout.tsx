"use client";

import type { PropsWithChildren } from "react";
import { AppBreadcrumb } from "@/components/layout/app-breadcrumb";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { LayoutProvider } from "@/context/layout-provider";
import { SearchProvider } from "@/context/search-provider";
import { getCookie } from "@/lib/cookies";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: PropsWithChildren) {
    const defaultOpen = getCookie("sidebar_state") !== "false";
    return (
        <SearchProvider>
            <LayoutProvider>
                <SidebarProvider defaultOpen={defaultOpen}>
                    <AppSidebar />
                    <SidebarInset
                        className={cn(
                            // Set content container, so we can use container queries
                            "@container/content",

                            // If layout is fixed, set the height
                            // to 100svh to prevent overflow
                            "has-data-[layout=fixed]:h-svh",

                            // If layout is fixed and sidebar is inset,
                            // set the height to 100svh - spacing (total margins) to prevent overflow
                            "peer-data-[variant=inset]:has-data-[layout=fixed]:h-[calc(100svh-(var(--spacing)*4))]",
                        )}
                    >
                        <Header>
                            <AppBreadcrumb />
                            <div className="ms-auto flex items-center space-x-4">
                                <Search />
                                <ThemeSwitch />
                                <ProfileDropdown />
                            </div>
                        </Header>

                        <Main>{children}</Main>
                    </SidebarInset>
                </SidebarProvider>
            </LayoutProvider>
        </SearchProvider>
    );
}
