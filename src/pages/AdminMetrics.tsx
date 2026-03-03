import { DashboardLayout } from "@/components/DashboardLayout";
import {
  BarChart3,
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  Cpu,
  HardDrive,
  Wifi,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const systemMetrics = [
  { label: "CPU", value: "23%", icon: Cpu, status: "normal" as const },
  { label: "Memória", value: "1.2 GB", icon: HardDrive, status: "normal" as const },
  { label: "Latência API", value: "42ms", icon: Wifi, status: "normal" as const },
  { label: "Uptime", value: "99.97%", icon: Clock, status: "normal" as const },
];

const hourlyData = [
  { hour: "00h", messages: 120, members: 45 },
  { hour: "02h", messages: 45, members: 12 },
  { hour: "04h", messages: 22, members: 5 },
  { hour: "06h", messages: 38, members: 18 },
  { hour: "08h", messages: 156, members: 67 },
  { hour: "10h", messages: 289, members: 134 },
  { hour: "12h", messages: 345, members: 201 },
  { hour: "14h", messages: 412, members: 256 },
  { hour: "16h", messages: 389, members: 223 },
  { hour: "18h", messages: 467, members: 312 },
  { hour: "20h", messages: 521, members: 345 },
  { hour: "22h", messages: 298, members: 189 },
];

const topEndpoints = [
  { endpoint: "GET /api/servers", calls: 12453, avgTime: "34ms", status: "healthy" },
  { endpoint: "POST /api/kofi/webhook", calls: 892, avgTime: "128ms", status: "healthy" },
  { endpoint: "GET /api/members", calls: 8721, avgTime: "45ms", status: "healthy" },
  { endpoint: "POST /admin/set-role", calls: 234, avgTime: "89ms", status: "healthy" },
  { endpoint: "GET /admin/metrics", calls: 156, avgTime: "23ms", status: "healthy" },
];

const maxMessages = Math.max(...hourlyData.map((d) => d.messages));

const AdminMetrics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl">
        <div>
          <Link to="/admin" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar ao Admin
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Métricas do Sistema</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitoramento de performance e uso da API
          </p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {systemMetrics.map((m) => (
            <Card key={m.label} className="border-border bg-card">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <m.icon className="h-5 w-5 text-primary" />
                  <Badge className="bg-success/10 text-success border-0 text-[10px]">Normal</Badge>
                </div>
                <p className="text-2xl font-bold text-foreground">{m.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity Chart (simple bar) */}
        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Mensagens por Hora (Hoje)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-40">
              {hourlyData.map((d) => (
                <div key={d.hour} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-primary/60 hover:bg-primary transition-colors min-h-[4px]"
                    style={{ height: `${(d.messages / maxMessages) * 100}%` }}
                    title={`${d.messages} mensagens`}
                  />
                  <span className="text-[10px] text-muted-foreground">{d.hour}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* API Endpoints Table */}
        <Card className="border-border bg-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Endpoints Mais Acessados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="grid grid-cols-4 px-3 py-2 text-xs font-medium text-muted-foreground">
                <span>Endpoint</span>
                <span className="text-right">Chamadas</span>
                <span className="text-right">Tempo Médio</span>
                <span className="text-right">Status</span>
              </div>
              {topEndpoints.map((ep) => (
                <div key={ep.endpoint} className="grid grid-cols-4 px-3 py-3 rounded-lg hover:bg-surface-2 transition-colors items-center">
                  <span className="text-sm font-mono text-foreground">{ep.endpoint}</span>
                  <span className="text-sm text-muted-foreground text-right">{ep.calls.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground text-right">{ep.avgTime}</span>
                  <span className="text-right">
                    <Badge className="bg-success/10 text-success border-0 text-[10px]">Saudável</Badge>
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminMetrics;
