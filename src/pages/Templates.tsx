import { useState } from "react";
import { Layout } from "@/components/Layout";
import { TemplateGrid } from "@/components/Templates/TemplateGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List } from "lucide-react";

const categories = [
  "Tous",
  "Portfolio", 
  "E-commerce",
  "Restaurant",
  "Agence",
  "Blog",
  "SaaS"
];

export default function Templates() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <Layout>
      <div className="space-y-8">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Templates</h1>
          <p className="text-muted-foreground mt-1">
            Choisissez parmi notre collection de templates professionnels
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === "grid" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button 
            variant={viewMode === "list" ? "default" : "outline"} 
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Recherche */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Rechercher un template..."
            className="pl-9"
          />
        </div>

        {/* Filtres */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>
      </div>

      {/* Catégories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className={`cursor-pointer transition-colors ${
              selectedCategory === category 
                ? "bg-gradient-accent text-white hover:bg-accent/90" 
                : "hover:bg-secondary/80"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Grille de templates */}
      <TemplateGrid />

      {/* Pagination ou Load More */}
      <div className="flex justify-center pt-8">
        <Button variant="outline" size="lg">
          Charger plus de templates
        </Button>
      </div>
      </div>
    </Layout>
  );
}