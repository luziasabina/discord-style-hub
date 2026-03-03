import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Users,
  MessageSquare,
  Shield,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Hash,
  Bot,
  Heart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Membros Total", value: "12,847", change: "+324", trend: "up" as const, icon: Users },
  { label: "Mensagens Hoje", value: "3,291", change: "+12%", trend: "up" as const, icon: MessageSquare },
  { label: "Servidores Ativos", value: "48", change: "+3", trend: "up" as const, icon: Hash },
  { label: "Apoiadores Ko-fi", value: "156", change: "+8", trend: "up" as const, icon: Heart },
];

const recentActivity = [
  { user: "Carlos#1234", action: "entrou no servidor", time: "há 2 min", status: "online" as const },
  { user: "Ana#5678", action: "apoiou via Ko-fi ☕", time: "há 5 min", status: "online" as const },
  { user: "Bot Guard", action: "baniu 2 usuários", time: "há 12 min", status: "dnd" as const },
  { user: "Pedro#9012", action: "criou canal #geral", time: "há 30 min", status: "idle" as const },
  { user: "Maria#3456", action: "atualizou cargo Admin", time: "há 1h", status: "offline" as const },
];

const topServers = [
  { name: "Gaming Brasil", members: 4521, online: 1203 },
  { name: "Dev Community", members: 3847, online: 892 },
  { name: "Music Lounge", members: 2156, online: 543 },
  { name: "Art & Design", members: 1823, online: 321 },
];

const statusColors = {
  online: "bg-online",
  idle: "bg-idle",
  dnd: "bg-dnd",
  offline: "bg-offline",
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Visão geral do seu painel Discord</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card hover:bg-surface-2 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-success" : "text-destructive"}`}>
                    {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Two column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <Card className="lg:col-span-3 border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors">
                  <div className="relative">
                    <div className="h-8 w-8 rounded-full bg-surface-3 flex items-center justify-center">
                      <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card ${statusColors[item.status]}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{item.user}</span>{" "}
                      <span className="text-muted-foreground">{item.action}</span>
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Hash className="h-4 w-4 text-primary" />
                Top Servidores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {topServers.map((server, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-2 transition-colors">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {server.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">{server.name}</p>
                    <p className="text-xs text-muted-foreground">{server.members.toLocaleString()} membros</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-online" />
                    <span className="text-xs text-success font-medium">{server.online.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
