import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Moon, Search, Sun } from "lucide-react";
import axios from "axios";

function Navbar() {
    // Melhorar dark mode
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [searchStocks, setSearchStocks] = useState<String>('');

    useEffect(() => {
        console.log(searchStocks);
    }, [searchStocks]);

    useEffect(() => {
        axios.get(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2024-01-09/2024-02-10?adjusted=true&sort=asc&apiKey=${import.meta.env.VITE_POLYGON_KEY}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }, []);

    return (
        <div className={`flex p-2 h-16 justify-between border-b-2 ${!darkMode ? 'shadow-md' : 'border-b-zinc-200'}`}>
            <div className="flex gap-4 h-full w-full">
                <h1 className="my-auto font-bold text-2xl">Stocks Tracker</h1>
                <Button className="w-9 my-auto" variant={'ghost'} onClick={() => setDarkMode(!darkMode)}>
                    {!darkMode ? <Sun /> : <Moon className="text-zinc-50" />}
                </Button>
                <div className={`flex gap-2 rounded-lg border-[1px] pr-2 shadow-sm ${darkMode ? "bg-zinc-600" : null}`}>
                    <Input className={`w-48 my-auto border-none shadow-none ${darkMode ? "text-zinc-100 placeholder:text-zinc-100 placeholder:opacity-50" : "text-zinc-700 placeholder:text-zinc-700 placeholder:opacity-75"} focus-visible:ring-0`} placeholder="Pesquise uma ação" onChange={(e) => setSearchStocks(e.target.value)} />
                    <Button className="w-9 my-auto rounded-full" variant={"ghost"}>
                        <Search className={`${darkMode ? 'text-zinc-50' : null}`} />
                    </Button>
                </div>
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
                        <NavigationMenuItem>
                            <NavigationMenuLink className={`hover:cursor-pointer ${navigationMenuTriggerStyle()}`}>Notícias</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="w-full flex justify-center">
                
            </div>
        </div>
    )
}

export default Navbar;