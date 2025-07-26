'use client';

import DarkButton from '@/components/DarkButton';
import { MobileSidebar, Sidebar } from '@/components/dashboard/Sidebar';
import PrivateRoute from '@/components/PrivateRoute';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ROLES } from '@/constants/roles';
import { User2 } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <PrivateRoute role={ROLES.ADMIN}>
      <div className="min-h-screen flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-background">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          {/* <Header /> */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center px-4">
              <MobileSidebar />
              <div className="flex flex-1 items-center space-x-2 justify-end">
                <nav className="flex items-center space-x-2">
                  <DarkButton />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <User2 />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">John Doe</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            john.doe@example.com
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Settings</DropdownMenuItem>
                      <DropdownMenuItem>Support</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1 space-y-4 p-4 md:p-6 pt-6">
            {children}
          </main>
        </div>
      </div>
    </PrivateRoute>
  );
}
