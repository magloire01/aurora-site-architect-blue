import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="bg-white border-b border-border h-16 flex items-center justify-between px-6 shadow-sm">
      {/* Barre de recherche */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Rechercher des templates, sites..."
            className="pl-9 bg-muted/50 border-0 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Actions utilisateur */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full text-[10px] flex items-center justify-center text-white">
            3
          </span>
        </Button>

        {/* Profil utilisateur */}
        <Button variant="ghost" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <span className="hidden sm:block text-sm font-medium">John Doe</span>
        </Button>
      </div>
    </header>
  );
}