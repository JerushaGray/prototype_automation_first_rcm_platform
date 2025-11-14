import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, FileSpreadsheet, UserCog, Target, Workflow, ListTodo, Inbox, User, Loader, Activity, Shield, AlertCircle, ListFilter } from 'lucide-react';

export function AppSidebar() {
  return (
    <aside className="w-64 border-r border-border bg-sidebar h-screen sticky top-0 overflow-y-auto">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3 mb-1">
            <Image 
              src="/aa_sidebar.png" 
              alt="Automation Assistant" 
              width={24} 
              height={24}
              className="h-6 w-6"
            />
            <h1 className="text-xl font-bold text-sidebar-foreground tracking-tight">Automation Assistant</h1>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Healthcare Claims Automation</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-6">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>

            <li>
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Claims Module
              </div>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    href="/claims"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
                  >
                    <FileSpreadsheet className="h-5 w-5" />
                    <span className="font-medium">Claims List</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <UserCog className="h-4 w-4" />
                Product Owner Tools
              </div>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    href="/vision"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
                  >
                    <Target className="h-5 w-5" />
                    <span className="font-medium">Vision</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/workflow-map"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
                  >
                    <Workflow className="h-5 w-5" />
                    <span className="font-medium">Workflow Map</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/backlog"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
                  >
                    <ListTodo className="h-5 w-5" />
                    <span className="font-medium">Backlog</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/intake"
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
                  >
                    <Inbox className="h-5 w-5" />
                    <span className="font-medium">Automation Intake</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/about"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200 ease-out hover:translate-x-0.5"
              >
                <User className="h-5 w-5" />
                <span className="font-medium">About</span>
              </Link>
            </li>

            <li>
              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                <Loader className="h-4 w-4" />
                Coming Soon Modules
              </div>
              <ul className="mt-2 space-y-1">
                <li>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground/60 cursor-not-allowed">
                    <Activity className="h-5 w-5" />
                    <span className="font-medium">Eligibility Automation</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground/60 cursor-not-allowed">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">Standardization Engine</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground/60 cursor-not-allowed">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-medium">Denial Intelligence</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground/60 cursor-not-allowed">
                    <ListFilter className="h-5 w-5" />
                    <span className="font-medium">Queue Builder</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            A product concept by Jerusha Gray
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Prototype for demonstration only
          </p>
        </div>
      </div>
    </aside>
  );
}
