import { Container } from "@/components/common/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { label: "Total Users", value: "128" },
  { label: "Active Tests", value: "24" },
  { label: "Completed", value: "96" },
];

export default function DashboardPage() {
  return (
    <Container className="flex flex-col gap-8 py-12 border border-red-800">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          A simple overview page. Replace this with your real data later.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Sample stat card</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
