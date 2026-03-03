import { CheckCircle2, XCircle, Loader2, ArrowLeft, Bot, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Discord Bot",
    description: "Conexão com a API do Discord",
    status: "online" as const,
    latency: "42ms",
  },
  {
    name: "Ko-fi Webhooks",
    description: "Recebimento de eventos do Ko-fi",
    status: "online" as const,
    latency: "128ms",
  },
  {
    name: "OAuth Discord",
    description: "Autenticação de usuários",
    status: "online" as const,
    latency: "89ms",
  },
  {
    name: "Banco de Dados",
    description: "Armazenamento de dados",
    status: "online" as const,
    latency: "12ms",
  },
];

const statusConfig = {
  online: { icon: CheckCircle2, label: "Online", className: "text-success" },
  offline: { icon: XCircle, label: "Offline", className: "text-destructive" },
  loading: { icon: Loader2, label: "Verificando...", className: "text-warning animate-spin" },
};

const Status = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border surface-1">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Discord Panel</span>
          </Link>
          <Link to="/login">
            <Button size="sm">Login</Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-1">Status da Integração</h1>
          <p className="text-sm text-muted-foreground">
            Monitoramento em tempo real dos serviços Ko-fi e Discord
          </p>
        </div>

        {/* Overall Status */}
        <Card className="border-border bg-card mb-6">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">Todos os sistemas operacionais</p>
              <p className="text-sm text-muted-foreground">Última verificação: agora</p>
            </div>
          </CardContent>
        </Card>

        {/* Individual Services */}
        <div className="space-y-3">
          {integrations.map((service) => {
            const config = statusConfig[service.status];
            const StatusIcon = config.icon;
            return (
              <Card key={service.name} className="border-border bg-card">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <StatusIcon className={`h-5 w-5 ${config.className}`} />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{service.name}</p>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xs font-medium ${config.className}`}>{config.label}</p>
                    <p className="text-xs text-muted-foreground">{service.latency}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
