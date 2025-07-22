import { MoreVertical, ExternalLink, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const recentSites = [
  {
    id: 1,
    name: "Portfolio Créatif",
    url: "portfolio-creatif.com",
    status: "Publié",
    lastModified: "Il y a 2 heures",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    name: "E-commerce Fashion",
    url: "fashion-store.com",
    status: "Brouillon",
    lastModified: "Hier",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Restaurant La Belle Vue",
    url: "restaurant-bellevue.fr",
    status: "Publié",
    lastModified: "Il y a 3 jours",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
  }
];

export function RecentSites() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Sites Récents</CardTitle>
        <Button variant="outline" size="sm">
          Voir tout
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentSites.map((site) => (
            <div key={site.id} className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
              {/* Thumbnail */}
              <div className="w-16 h-12 rounded-lg bg-muted overflow-hidden">
                <img 
                  src={site.thumbnail} 
                  alt={site.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Informations du site */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">{site.name}</h4>
                <p className="text-sm text-muted-foreground">{site.url}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    site.status === 'Publié' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {site.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{site.lastModified}</span>
                </div>
              </div>

              {/* Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="w-4 h-4 mr-2" />
                    Modifier
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le site
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}