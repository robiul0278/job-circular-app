'use client';

import { Button } from '@/components/ui/button';
import { ShieldOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-muted/40">
      <div className="max-w-md w-full bg-background rounded-2xl shadow-lg p-8 text-center border">
        <div className="w-16 h-16 mx-auto bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
          <ShieldOff className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-semibold text-red-600">Unauthorized Access</h1>
        <p className="text-muted-foreground mt-2">
          You do not have permission to view this page.
        </p>

        <Button className="mt-6 w-full cursor-pointer" onClick={() => router.push('/')}>
          Go Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
