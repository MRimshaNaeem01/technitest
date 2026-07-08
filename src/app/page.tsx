import { AppButton } from "@/components/common/app-button";
import { Container } from "@/components/common/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <Container className="flex flex-col gap-8 py-12">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Technitest</h1>
        <p className="max-w-2xl text-muted-foreground">
          This is the homepage. The header and footer appear on every page
          automatically.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Get started</CardTitle>
          <CardDescription>
            Go to the dashboard to see a simple example page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AppButton href="/dashboard">Open Dashboard</AppButton>
        </CardContent>
      </Card>
    </Container>
  );
}
