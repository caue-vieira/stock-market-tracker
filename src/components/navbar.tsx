import { useState } from "react";
import { Input } from "./ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Moon, Search, Sun } from "lucide-react";

function Navbar() {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [searchStocks, setSearchStocks] = useState<String>('');

    return (
        <div className={`flex p-2 h-16 justify-between border-b-2 ${!darkMode ? 'shadow-md' : 'border-b-zinc-200'}`}>
            <div className="flex gap-4 h-full w-full">
                <h1 className="my-auto font-bold text-2xl">Stocks Tracker</h1>
                <div className="flex gap-2 rounded-lg border-[1px] pr-2 shadow-sm">
                    <Input className="w-48 my-auto border-none shadow-none" placeholder="Escolha uma outra ação" />
                    <Button className="w-9 my-auto rounded-full" variant={"ghost"}>
                        <Search className={`${darkMode ? 'text-zinc-50' : null}`} />
                    </Button>
                </div>
                <Button className="w-9 my-auto" variant={'ghost'} onClick={() => setDarkMode(!darkMode)}>
                    {!darkMode ? <Sun /> : <Moon className="text-zinc-50" />}
                </Button>
            </div>
            <div className="w-full flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Ações</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="m-2 w-32 font-semibold">
                                    <li>
                                        <Button className="w-full justify-start" variant={"ghost"}>
                                            <NavigationMenuLink>Teste</NavigationMenuLink>
                                        </Button>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

export default Navbar;