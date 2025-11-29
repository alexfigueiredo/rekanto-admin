import { useHotkeys } from "@mantine/hooks";
import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useHotkeys([["mod + J", () => toggleTheme()]]);

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    className="scale-95 rounded-full"
                    size="icon"
                    variant="ghost"
                >
                    <Sun className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Claro
                    <Check
                        className={cn("ms-auto", theme !== "light" && "hidden")}
                        size={14}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Escuro
                    <Check
                        className={cn("ms-auto", theme !== "dark" && "hidden")}
                        size={14}
                    />
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    Automático
                    <Check
                        className={cn(
                            "ms-auto",
                            theme !== "system" && "hidden",
                        )}
                        size={14}
                    />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
