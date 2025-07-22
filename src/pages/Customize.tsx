import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  ArrowLeft, 
  Save, 
  Eye, 
  Image, 
  Type, 
  Palette, 
  Layout,
  Plus,
  Trash2,
  GripVertical
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

// Simuler les données du modèle sélectionné
const templateData = {
  id: 1,
  name: "Portfolio Créatif",
  sections: [
    { id: 1, type: "hero", title: "Section Héro", content: "Titre principal et description" },
    { id: 2, type: "about", title: "À propos", content: "Section à propos" },
    { id: 3, type: "services", title: "Services", content: "Liste des services" },
    { id: 4, type: "portfolio", title: "Portfolio", content: "Galerie de projets" },
    { id: 5, type: "contact", title: "Contact", content: "Formulaire de contact" }
  ]
};

const componentLibrary = [
  { id: "header", name: "En-tête", icon: Layout, category: "Navigation" },
  { id: "hero", name: "Section Héro", icon: Image, category: "Contenu" },
  { id: "text", name: "Bloc de texte", icon: Type, category: "Contenu" },
  { id: "gallery", name: "Galerie", icon: Image, category: "Media" },
  { id: "form", name: "Formulaire", icon: Layout, category: "Interaction" },
  { id: "footer", name: "Pied de page", icon: Layout, category: "Navigation" }
];

const Customize = () => {
  const { templateId } = useParams();
  const [selectedSection, setSelectedSection] = useState<number | null>(1);
  const [sections, setSections] = useState(templateData.sections);
  const [draggedItem, setDraggedItem] = useState<any>(null);

  const handleDragStart = (e: React.DragEvent, item: any, source: 'library' | 'section') => {
    setDraggedItem({ ...item, source });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetIndex?: number) => {
    e.preventDefault();
    
    if (!draggedItem) return;

    if (draggedItem.source === 'library') {
      // Ajouter un nouveau composant
      const newSection = {
        id: Date.now(),
        type: draggedItem.id,
        title: draggedItem.name,
        content: `Nouveau ${draggedItem.name.toLowerCase()}`
      };
      
      if (typeof targetIndex === 'number') {
        const newSections = [...sections];
        newSections.splice(targetIndex, 0, newSection);
        setSections(newSections);
      } else {
        setSections([...sections, newSection]);
      }
    } else if (draggedItem.source === 'section' && typeof targetIndex === 'number') {
      // Réorganiser les sections existantes
      const newSections = [...sections];
      const draggedIndex = sections.findIndex(s => s.id === draggedItem.id);
      const [removed] = newSections.splice(draggedIndex, 1);
      newSections.splice(targetIndex, 0, removed);
      setSections(newSections);
    }

    setDraggedItem(null);
  };

  const removeSection = (sectionId: number) => {
    setSections(sections.filter(s => s.id !== sectionId));
    if (selectedSection === sectionId) {
      setSelectedSection(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">WebCreator</span>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-muted-foreground">Personnalisation: {templateData.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Aperçu
            </Button>
            <Button size="sm">
              <Save className="w-4 h-4 mr-2" />
              Sauvegarder
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar - Bibliothèque de composants */}
        <div className="w-80 border-r bg-card/50 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-4">Composants</h3>
            
            <div className="space-y-2">
              {componentLibrary.map((component) => (
                <Card 
                  key={component.id}
                  className="cursor-move hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={(e) => handleDragStart(e, component, 'library')}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <component.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm">{component.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {component.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Zone principale - Structure du site */}
        <div className="flex-1 flex">
          {/* Liste des sections */}
          <div className="w-80 border-r bg-muted/20 overflow-y-auto">
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-4">Structure du site</h3>
              
              <div 
                className="space-y-2 min-h-[200px]"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e)}
              >
                {sections.map((section, index) => (
                  <div key={section.id}>
                    {/* Zone de drop entre les sections */}
                    <div 
                      className="h-2 border-2 border-dashed border-transparent hover:border-primary/50 transition-colors"
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, index)}
                    />
                    
                    <Card 
                      className={`cursor-pointer transition-all ${
                        selectedSection === section.id 
                          ? 'ring-2 ring-primary shadow-lg' 
                          : 'hover:shadow-md'
                      }`}
                      draggable
                      onDragStart={(e) => handleDragStart(e, section, 'section')}
                      onClick={() => setSelectedSection(section.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <GripVertical className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium text-sm">{section.title}</p>
                              <p className="text-xs text-muted-foreground">{section.content}</p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeSection(section.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
                
                {/* Zone de drop à la fin */}
                <div 
                  className="h-12 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e)}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Déposer un composant ici
                </div>
              </div>
            </div>
          </div>

          {/* Panneau de propriétés */}
          <div className="flex-1 p-6 overflow-y-auto">
            {selectedSection ? (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Propriétés de la section
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="section-title">Titre de la section</Label>
                    <Input 
                      id="section-title"
                      value={sections.find(s => s.id === selectedSection)?.title || ''}
                      onChange={(e) => {
                        setSections(sections.map(s => 
                          s.id === selectedSection 
                            ? { ...s, title: e.target.value }
                            : s
                        ));
                      }}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="section-content">Contenu</Label>
                    <Input 
                      id="section-content"
                      value={sections.find(s => s.id === selectedSection)?.content || ''}
                      onChange={(e) => {
                        setSections(sections.map(s => 
                          s.id === selectedSection 
                            ? { ...s, content: e.target.value }
                            : s
                        ));
                      }}
                      className="mt-1"
                    />
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Style</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="bg-color">Couleur de fond</Label>
                        <div className="flex gap-2 mt-1">
                          <Input id="bg-color" value="#ffffff" className="flex-1" />
                          <div className="w-10 h-10 bg-white border rounded-md"></div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="text-color">Couleur du texte</Label>
                        <div className="flex gap-2 mt-1">
                          <Input id="text-color" value="#000000" className="flex-1" />
                          <div className="w-10 h-10 bg-black border rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div>
                  <Palette className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Sélectionnez une section
                  </h3>
                  <p className="text-muted-foreground">
                    Cliquez sur une section dans la liste pour modifier ses propriétés
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;