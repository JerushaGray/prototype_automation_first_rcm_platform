import Image from "next/image";
import Link from "next/link";
import { NotificationsPanel } from "@/components/notifications-panel";

export function AppHeader() {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-10">
      <div className="flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/aa_primary.png" 
            alt="Automation Assistant" 
            width={32} 
            height={32}
            className="h-8 w-8"
          />
          <div>
            <h2 className="text-lg font-semibold text-foreground">Healthcare Claims Automation</h2>
            <p className="text-xs text-muted-foreground">Revenue Cycle Management</p>
          </div>
        </Link>
        <NotificationsPanel />
      </div>
    </header>
  );
}
