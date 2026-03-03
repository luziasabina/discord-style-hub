import { DashboardLayout } from "@/components/DashboardLayout";
import { Hash, Users, Settings, Shield, Crown, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const servers = [
  {
    id: "1",
    name: "Gaming Brasil",
    icon: "G",
    members: 4521,
    online: 1203,
    channels: 32,
    roles: 15,
    botActive: true,
    kofiLinked: true,
  },
  {
    id: "2",
    name: "Dev Community",
    icon: "D",
    members: 3847,
    online: 892,
    channels: 24,
    roles: 12,
    botActive: true,
    kofiLinked: false,
  },
  {
    id: "3",
    name: "Music Lounge",
    icon: "M",
    members: 2156,
    online: 543,
    channels: 18,
    roles: 8,
    botActive: false,
    kofiLinked: false,
  },
  {
    id: "4",
    name: "Art & Design",
    icon: "A",
    members: 1823,
    online: 321,
    channels: 14,
    roles: 10,
    botActive: true,
    kofiLinked: true,
  },
  {
    id: "5",
    name: "Anime World",
    icon: "A",
    members: 967,
    online: 201,
    channels: 10,
    roles: 6,
    botActive: false,
    kofiLinked: false,
  },
];

const Servers = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Servidores</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Servidores onde você tem permissão de administrador
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {servers.length} servidores
          </Badge>
        </div>

        <div className="space-y-3">
          {servers.map((server) => (
            <Card key={server.id} className="border-border bg-card hover:border-primary/20 transition-all">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  {/* Server Icon */}
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                    {server.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-bold text-foreground">{server.name}</h3>
                      {server.kofiLinked && (
                        <Badge className="bg-warning/10 text-warning border-0 text-[10px] px-1.5 py-0">
                          ☕ Ko-fi
                        </Badge>
                      )}
                      {server.botActive && (
                        <Badge className="bg-success/10 text-success border-0 text-[10px] px-1.5 py-0">
                          Bot Ativo
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {server.members.toLocaleString()} membros
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-online" />
                        {server.online.toLocaleString()} online
                      </span>
                      <span className="flex items-center gap-1">
                        <Hash className="h-3 w-3" />
                        {server.channels} canais
                      </span>
                      <span className="flex items-center gap-1">
                        <Crown className="h-3 w-3" />
                        {server.roles} cargos
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <Shield className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Servers;
