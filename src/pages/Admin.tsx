import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Shield,
  Users,
  BarChart3,
  Heart,
  Crown,
  AlertTriangle,
  TrendingUp,
  Activity,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const adminStats = [
  { label: "Usuários Registrados", value: "2,341", icon: Users },
  { label: "Apoiadores Ativos", value: "156", icon: Heart },
  { label: "Servidores Monitorados", value: "48", icon: Activity },
  { label: "Alertas Pendentes", value: "3", icon: AlertTriangle },
];

const recentAdminActions = [
  { action: "Role 'Apoiador Bronze' atribuída", target: "user#1234", time: "há 5 min" },
  { action: "Role 'Apoiador Prata' removida", target: "user#5678", time: "há 15 min" },
  { action: "Novo servidor registrado", target: "Gaming BR", time: "há 1h" },
  { action: "Métricas exportadas", target: "admin", time: "há 2h" },
  { action: "Configuração Ko-fi atualizada", target: "webhook", time: "há 3h" },
];

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-foreground">Painel Admin</h1>
              <Badge className="bg-destructive/10 text-destructive border-0 text-[10px]">
                <Shield className="h-3 w-3 mr-1" />
                Admin
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Gerenciamento avançado e configurações do sistema
            </p>
          </div>
          <Link to="/admin/metrics">
            <Button variant="outline" size="sm">
              <BarChart3 className="h-3.5 w-3.5 mr-1.5" />
              Ver Métricas
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {adminStats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card">
              <CardContent className="p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Set Role */}
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Crown className="h-4 w-4 text-primary" />
                Definir Role de Apoiador
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">ID do Usuário Discord</label>
                <input
                  placeholder="Ex: 123456789012345678"
                  className="w-full px-3 py-2 rounded-md bg-surface-2 border border-border text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Role</label>
                <select className="w-full px-3 py-2 rounded-md bg-surface-2 border border-border text-sm text-foreground outline-none focus:border-primary transition-colors">
                  <option>Apoiador Bronze</option>
                  <option>Apoiador Prata</option>
                  <option>Apoiador Ouro</option>
                  <option>Apoiador Diamante</option>
                </select>
              </div>
              <Button className="w-full" size="sm">
                <Crown className="h-3.5 w-3.5 mr-1.5" />
                Definir Role
              </Button>
            </CardContent>
          </Card>

          {/* Set Multiple Supporter Roles */}
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Configurar Níveis de Apoio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { level: "Bronze", minAmount: "R$ 5", color: "bg-warning/20 text-warning" },
                { level: "Prata", minAmount: "R$ 15", color: "bg-muted-foreground/20 text-muted-foreground" },
                { level: "Ouro", minAmount: "R$ 30", color: "bg-warning/30 text-warning" },
                { level: "Diamante", minAmount: "R$ 50", color: "bg-primary/20 text-primary" },
              ].map((tier) => (
                <div key={tier.level} className="flex items-center gap-3 p-3 rounded-lg bg-surface-2">
                  <Badge className={`${tier.color} border-0 text-xs`}>{tier.level}</Badge>
                  <div className="flex-1">
                    <input
                      defaultValue={tier.minAmount}
                      className="bg-transparent text-sm text-foreground outline-none w-full"
                    />
                  </div>
                  <input
                    placeholder="Role ID"
                    className="bg-surface-3 border border-border rounded px-2 py-1 text-xs text-foreground w-32 outline-none focus:border-primary"
                  />
                </div>
              ))}
              <Button className="w-full" size="sm">
                <Shield className="h-3.5 w-3.5 mr-1.5" />
                Salvar Configuração
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Admin Actions */}
        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Ações Recentes do Admin
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {recentAdminActions.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-2 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm text-foreground">{item.action}</p>
                    <p className="text-xs text-muted-foreground">{item.target}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
