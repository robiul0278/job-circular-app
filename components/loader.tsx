import { LoaderCircle } from 'lucide-react';
import React from 'react'

const Loader = () => {
    return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20 gap-3">
            <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
            <p className="text-muted-foreground text-lg">লোড হচ্ছে, অপেক্ষা করুন...</p>
        </div>
    )
}

export default Loader;