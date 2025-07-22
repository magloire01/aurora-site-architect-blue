import { StatsCards } from "@/components/Dashboard/StatsCards";
import { RecentSites } from "@/components/Dashboard/RecentSites";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, TrendingUp, Users, Zap, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-webbuilder.jpg";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Section Héro */}
      <Card className="relative overflow-hidden bg-gradient-hero text-white border-0">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="WebBuilder Dashboard" 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="relative p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-light" />
                <span className="text-sm font-medium text-orange-light">Bienvenue dans WebBuilder</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Créez des sites web
                <br />
                <span className="text-orange-light">exceptionnels</span>
              </h2>
              <p className="text-white/80 text-lg max-w-md">
                Explorez notre collection de templates professionnels et créez votre prochain site web en quelques minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="lg">
                Voir les templates
              </Button>
              <Button variant="hero" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Nouveau projet
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* En-tête avec actions rapides */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Gérez vos sites web et suivez vos performances
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <TrendingUp className="w-4 h-4 mr-2" />
            Analytics
          </Button>
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            Créer un site
          </Button>
        </div>
      </div>

      {/* Cartes de statistiques */}
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sites récents */}
        <div className="lg:col-span-2">
          <RecentSites />
        </div>

        {/* Activité récente */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Activité Récente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Portfolio publié</span>
                  <span className="text-xs text-muted-foreground ml-auto">2h</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-muted-foreground">Template téléchargé</span>
                  <span className="text-xs text-muted-foreground ml-auto">4h</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Site modifié</span>
                  <span className="text-xs text-muted-foreground ml-auto">1j</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Équipe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white text-sm font-medium">
                    JD
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Admin</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                    AS
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Alice Smith</p>
                    <p className="text-xs text-muted-foreground">Designer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}