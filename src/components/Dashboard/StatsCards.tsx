import { Globe, Users, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Sites Actifs",
    value: "12",
    icon: Globe,
    change: "+2 ce mois",
    color: "text-accent"
  },
  {
    title: "Visiteurs",
    value: "24.5K",
    icon: Users,
    change: "+15% ce mois",
    color: "text-green-500"
  },
  {
    title: "Pages Vues",
    value: "89.3K",
    icon: Eye,
    change: "+8% ce mois",
    color: "text-blue-500"
  },
  {
    title: "Performance",
    value: "98%",
    icon: Zap,
    change: "Excellent",
    color: "text-accent"
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="hover:shadow-elegant transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.color} font-medium`}>{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-accent/10 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}