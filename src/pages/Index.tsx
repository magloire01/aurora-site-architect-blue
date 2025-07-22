import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, Zap, Globe, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const templates = [
  {
    id: 1,
    name: "Portfolio Créatif",
    category: "Portfolio",
    preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    tags: ["Moderne", "Créatif", "Responsive"],
    isNew: true,
    isPopular: false
  },
  {
    id: 2,
    name: "E-commerce Pro",
    category: "E-commerce", 
    preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    tags: ["E-commerce", "Pro", "Mobile"],
    isNew: false,
    isPopular: true
  },
  {
    id: 3,
    name: "Restaurant Élégant",
    category: "Restaurant",
    preview: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    tags: ["Restaurant", "Élégant", "Réservation"],
    isNew: true,
    isPopular: true
  },
  {
    id: 4,
    name: "SaaS Landing",
    category: "SaaS",
    preview: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    tags: ["SaaS", "Landing", "Conversion"],
    isNew: false,
    isPopular: true
  },
  {
    id: 5,
    name: "Blog Minimal",
    category: "Blog",
    preview: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    tags: ["Blog", "Minimal", "SEO"],
    isNew: true,
    isPopular: false
  },
  {
    id: 6,
    name: "Agence Digitale",
    category: "Agence",
    preview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    tags: ["Agence", "Moderne", "Animation"],
    isNew: false,
    isPopular: true
  }
];

const Index = () => {
  const [idea, setIdea] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("tous");

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (activeFilter === "nouveaux") return matchesSearch && template.isNew;
    if (activeFilter === "populaires") return matchesSearch && template.isPopular;
    return matchesSearch;
  });

  const handleGenerateWithAI = () => {
    if (idea.trim()) {
      // Logique pour générer avec l'IA
      console.log("Génération avec l'IA:", idea);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">WebCreator</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost">Connexion</Button>
            <Button>S'inscrire</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Créez votre site web en quelques secondes
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transformez votre
            <span className="bg-gradient-hero bg-clip-text text-transparent"> idée </span>
            en site web
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Décrivez votre projet et notre IA créera un site web professionnel personnalisé pour vous.
          </p>

          {/* AI Input */}
          <div className="max-w-2xl mx-auto mb-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ex: Un site e-commerce pour vendre des produits artisanaux..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="text-lg h-14 bg-card border-2 focus:border-primary"
              />
              <Button 
                size="lg" 
                onClick={handleGenerateWithAI}
                className="h-14 px-8 bg-gradient-primary hover:shadow-glow transition-all"
              >
                <Zap className="w-5 h-5 mr-2" />
                Créer
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            ✨ Généré par IA • 🎨 Entièrement personnalisable • 📱 Responsive
          </p>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ou choisissez un modèle prêt à l'emploi
            </h2>
            <p className="text-muted-foreground">
              Des designs professionnels que vous pouvez personnaliser selon vos besoins
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Rechercher un modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={activeFilter === "tous" ? "default" : "outline"}
                onClick={() => setActiveFilter("tous")}
              >
                Tous
              </Button>
              <Button 
                variant={activeFilter === "nouveaux" ? "default" : "outline"}
                onClick={() => setActiveFilter("nouveaux")}
              >
                Nouveaux
              </Button>
              <Button 
                variant={activeFilter === "populaires" ? "default" : "outline"}
                onClick={() => setActiveFilter("populaires")}
              >
                Populaires
              </Button>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link to={`/customize/${template.id}`}>
                      <Button variant="secondary" className="bg-white/90 hover:bg-white">
                        <Palette className="w-4 h-4 mr-2" />
                        Personnaliser
                      </Button>
                    </Link>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    {template.isNew && (
                      <Badge className="bg-gradient-accent text-white font-semibold">
                        Nouveau
                      </Badge>
                    )}
                    {template.isPopular && (
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        Populaire
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{template.category}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;