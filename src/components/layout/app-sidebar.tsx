import {
    Bell,
    Bug,
    Command,
    Construction,
    FileX,
    GalleryVerticalEnd,
    HelpCircle,
    LayoutDashboard,
    ListTodo,
    Lock,
    MessagesSquare,
    Monitor,
    Package,
    Palette,
    ServerOff,
    Settings,
    ShieldCheck,
    UserCog,
    Users,
    UserX,
    Wrench,
} from "lucide-react";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import type { SidebarData } from "@/components/layout/types";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar";
import { useLayout } from "@/context/layout-provider";
import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";

export const sidebarData: SidebarData = {
    user: {
        name: "Alex Figueiredo",
        email: "alexxfsilva@gmail.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Rekanto Pet",
            logo: Command,
        },
        {
            name: "Ambiente de testes",
            logo: GalleryVerticalEnd,
        },
    ],
    navGroups: [
        {
            title: "General",
            items: [
                {
                    title: "Dashboard",
                    url: "/",
                    icon: LayoutDashboard,
                },
                {
                    title: "Tasks",
                    url: "/tasks",
                    icon: ListTodo,
                },
                {
                    title: "Apps",
                    url: "/apps",
                    icon: Package,
                },
                {
                    title: "Chats",
                    url: "/chats",
                    badge: "3",
                    icon: MessagesSquare,
                },
                {
                    title: "Users",
                    url: "/users",
                    icon: Users,
                },
            ],
        },
        {
            title: "Pages",
            items: [
                {
                    title: "Auth",
                    icon: ShieldCheck,
                    items: [
                        {
                            title: "Sign In",
                            url: "/sign-in",
                        },
                        {
                            title: "Sign In (2 Col)",
                            url: "/sign-in-2",
                        },
                        {
                            title: "Sign Up",
                            url: "/sign-up",
                        },
                        {
                            title: "Forgot Password",
                            url: "/forgot-password",
                        },
                        {
                            title: "OTP",
                            url: "/otp",
                        },
                    ],
                },
                {
                    title: "Errors",
                    icon: Bug,
                    items: [
                        {
                            title: "Unauthorized",
                            url: "/errors/unauthorized",
                            icon: Lock,
                        },
                        {
                            title: "Forbidden",
                            url: "/errors/forbidden",
                            icon: UserX,
                        },
                        {
                            title: "Not Found",
                            url: "/errors/not-found",
                            icon: FileX,
                        },
                        {
                            title: "Internal Server Error",
                            url: "/errors/internal-server-error",
                            icon: ServerOff,
                        },
                        {
                            title: "Maintenance Error",
                            url: "/errors/maintenance-error",
                            icon: Construction,
                        },
                    ],
                },
            ],
        },
        {
            title: "Other",
            items: [
                {
                    title: "Settings",
                    icon: Settings,
                    items: [
                        {
                            title: "Profile",
                            url: "/settings",
                            icon: UserCog,
                        },
                        {
                            title: "Account",
                            url: "/settings/account",
                            icon: Wrench,
                        },
                        {
                            title: "Appearance",
                            url: "/settings/appearance",
                            icon: Palette,
                        },
                        {
                            title: "Notifications",
                            url: "/settings/notifications",
                            icon: Bell,
                        },
                        {
                            title: "Display",
                            url: "/settings/display",
                            icon: Monitor,
                        },
                    ],
                },
                {
                    title: "Help Center",
                    url: "/help-center",
                    icon: HelpCircle,
                },
            ],
        },
    ],
};

export function AppSidebar() {
    const { collapsible, variant } = useLayout();
    return (
        <Sidebar collapsible={collapsible} variant={variant}>
            <SidebarHeader>
                <TeamSwitcher teams={sidebarData.teams} />
            </SidebarHeader>
            <SidebarContent>
                {sidebarData.navGroups.map((props) => (
                    <NavGroup key={props.title} {...props} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={sidebarData.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
