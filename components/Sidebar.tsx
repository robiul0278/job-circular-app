"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  BarChart3,
  Building2,
  FileText,
  Menu,
  Users,
  Home,
  CircleDollarSign,
  Bell,
} from 'lucide-react';

const sidebarNavItems = [
  {
    title: 'Analytics',
    href: '/dashboard',
    icon: BarChart3,
  },
  {
    title: 'All Circular',
    href: '/dashboard/all-circular',
    icon: Building2,
  },
  {
    title: 'Post Circular',
    href: '/dashboard/post-circular',
    icon: FileText,
  },
  {
    title: 'Post Notice',
    href: '/dashboard/notice',
    icon: Bell,
  },
  {
    title: 'Manage Users',
    href: '/dashboard/manage-users',
    icon: Users,
  },
  {
    title: 'AdSense',
    href: '/dashboard/google-ads',
    icon: CircleDollarSign,
  },
  {
    title: 'Home',
    href: '/',
    icon: Home,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn('pb-12 min-h-screen', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <div className="flex items-center px-3 py-2 mb-6">
              <Building2 className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <nav className="space-y-2">
              {sidebarNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'transparent'
                  )}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <Sidebar />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}