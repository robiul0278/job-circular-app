'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { store } from '@/redux/store';

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Provider store={store}>
                {children}
                <Toaster position="top-center" />
            </Provider>
        </ThemeProvider>
    );
}