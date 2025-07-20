import React from 'react'
import { Skeleton } from './ui/skeleton'

const TabsSkeleton = () => {
    return (
        <div className="w-full mx-auto pt-4 space-y-4 border shadow rounded-xl p-4">
            <div className="flex space-x-2">
                <Skeleton className="h-10 w-28 rounded-md" />
                <Skeleton className="h-10 w-28 rounded-md" />
                <Skeleton className="h-10 w-28 rounded-md" />
            </div>
            <div className="space-y-4 mt-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-5 w-3/4 rounded-md" />
                        <Skeleton className="h-4 w-1/2 rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabsSkeleton;