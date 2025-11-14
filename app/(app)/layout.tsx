import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Footer } from "@/components/footer";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <AppHeader />
        <main className="flex-1 bg-muted/30 p-6">
          <Breadcrumbs />
          {children}
        </main>
        <Footer variant="internal" />
      </div>
    </div>
  );
}
