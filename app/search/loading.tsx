import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <div className="flex flex-wrap">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full md:w-6/12 lg:w-4/12 p-2">
                    <div className="flex flex-col gap-4">
                       
                        <Skeleton className="h-60 md:h-80" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Loading;
