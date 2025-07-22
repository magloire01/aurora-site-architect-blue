import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Portfolio Minimal",
    category: "Portfolio",
    preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    tags: ["Moderne", "Minimal", "Responsive"],
    isPremium: false
  },
  {
    id: 2,
    name: "E-commerce Pro",
    category: "E-commerce",
    preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    tags: ["E-commerce", "Pro", "Mobile"],
    isPremium: true
  },
  {
    id: 3,
    name: "Restaurant Élégant",
    category: "Restaurant",
    preview: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    tags: ["Restaurant", "Élégant", "Réservation"],
    isPremium: false
  },
  {
    id: 4,
    name: "Agence Créative",
    category: "Agence",
    preview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    tags: ["Créatif", "Agence", "Animation"],
    isPremium: true
  },
  {
    id: 5,
    name: "Blog Personnel",
    category: "Blog",
    preview: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    tags: ["Blog", "Personnel", "SEO"],
    isPremium: false
  },
  {
    id: 6,
    name: "SaaS Landing",
    category: "SaaS",
    preview: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    tags: ["SaaS", "Landing", "Conversion"],
    isPremium: true
  }
];

export function TemplateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
          <div className="relative overflow-hidden">
            <img
              src={template.preview}
              alt={template.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Overlay au hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <Button size="sm" variant="secondary">
                <Eye className="w-4 h-4 mr-2" />
                Aperçu
              </Button>
              <Button size="sm" variant={template.isPremium ? "premium" : "hero"}>
                <Download className="w-4 h-4 mr-2" />
                {template.isPremium ? "Premium" : "Utiliser"}
              </Button>
            </div>

            {/* Badge Premium */}
            {template.isPremium && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-gradient-accent text-white font-semibold">
                  Premium
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{template.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{template.category}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}