import { cx } from "class-variance-authority";
import { Menu } from "lucide-react";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type TopNavProps = HTMLAttributes<HTMLElement> & {
    links: {
        title: string;
        href: string;
        isActive: boolean;

        disabled?: boolean;
    }[];
};

export function TopNav({ className, links, ...props }: TopNavProps) {
    return (
        <>
            <div className="lg:hidden">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className="md:size-7"
                            size="icon"
                            variant="outline"
                        >
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" side="bottom">
                        {links.map(({ title, href, isActive, disabled }) => (
                            <DropdownMenuItem asChild key={`${title}-${href}`}>
                                <Link
                                    className={cn(
                                        "text-muted-foreground",
                                        disabled &&
                                            "cursor-not-allowed opacity-50",
                                        !isActive &&
                                            !disabled &&
                                            "text-muted-foreground",
                                    )}
                                    href={href}
                                >
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <nav
                className={cn(
                    "hidden items-center space-x-4 lg:flex lg:space-x-4 xl:space-x-6",
                    className,
                )}
                {...props}
            >
                {links.map(({ title, href, isActive, disabled }) => (
                    <Link
                        className={cx(
                            "hover:text-primary text-sm font-medium transition-colors",
                            {
                                "text-muted-foreground": !isActive && !disabled,
                                "cursor-not-allowed opacity-50": disabled,
                            },
                        )}
                        href={href}
                        key={`${title}-${href}`}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
        </>
    );
}
