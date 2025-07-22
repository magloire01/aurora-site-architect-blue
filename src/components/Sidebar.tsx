import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Globe, 
  Palette, 
  FileText, 
  Settings, 
  Plus,
  Layers,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Mes Sites", href: "/sites", icon: Globe },
  { name: "Templates", href: "/templates", icon: FileText },
  { name: "Composants", href: "/components", icon: Layers },
  { name: "Éditeur", href: "/editor", icon: Palette },
  { name: "Aperçu", href: "/preview", icon: Eye },
  { name: "Paramètres", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="bg-gradient-primary w-64 min-h-screen flex flex-col">
      {/* Logo et en-tête */}
      <div className="p-6 border-b border-navy-light/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">WebBuilder</h1>
        </div>
      </div>

      {/* Bouton Nouveau Site */}
      <div className="p-4">
        <Button variant="hero" className="w-full" size="lg">
          <Plus className="w-5 h-5" />
          Nouveau Site
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-accent text-white shadow-glow"
                      : "text-white/70 hover:text-white hover:bg-navy-light/30"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Version et utilisateur */}
      <div className="p-4 border-t border-navy-light/20">
        <div className="text-xs text-white/50 text-center">
          WebBuilder v1.0
        </div>
      </div>
    </div>
  );
}