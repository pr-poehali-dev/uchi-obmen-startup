import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Download, Users, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              {/* Используем NavigationMenuLink напрямую вместо вложенного Link */}
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/features">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Возможности
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/community">
                  <Users className="mr-2 h-4 w-4" />
                  Сообщество
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <Button variant="outline">Войти</Button>
          <Button className="bg-skyblue text-skyblue-foreground hover:bg-skyblue-dark">
            <Download className="mr-2 h-4 w-4" />
            Скачать приложение
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;