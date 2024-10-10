import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
    return (
        <div className="flex gap-4 bg-primary-dark py-4 flex-wrap md:flex-nowrap">
           
            <div className="w-full flex flex-col gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-60 md:h-80" />
                <div className="flex overflow-hidden">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="relative h-60 md:h-80 w-full md:w-1/3 p-2">
                            <Skeleton className="h-full w-full rounded" />
                        </div>
                    ))}
                </div>
                <hr className="bg-black h-1" />

              
                <div className="flex flex-col gap-4 md:hidden">
                    <Skeleton className="h-6 w-32" />
                    <div className="flex overflow-hidden">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex gap-3 p-4 items-center">
                                <div className="rounded-md w-10 h-10 flex-shrink-0 overflow-hidden">
                                    <Skeleton className="h-full w-full" />
                                </div>
                                <div className="flex flex-col gap-1 w-full">
                                    <Skeleton className="h-4 w-[70%]" />
                                    <Skeleton className="h-4 w-[100%]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

               
                <Skeleton className="h-6 w-32" />
                <div className="flex flex-col gap-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="flex gap-3 cursor-pointer">
                            <div className="rounded-md w-10 h-10 flex-shrink-0 overflow-hidden">
                                <Skeleton className="h-full w-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Skeleton className="h-4 w-[70%]" />
                                <Skeleton className="h-4 w-[100%]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

         
            <div className="hidden md:block">
                <div className="flex flex-col gap-4">
                    <Skeleton className="h-6 w-32" />
                    <div className="flex flex-col gap-4">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="flex gap-3 cursor-pointer">
                                <div className="rounded-md  flex-shrink-0 overflow-hidden">
                                    <Skeleton className="h-full w-full" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Skeleton className="h-4 w-[70%]" />
                                    <Skeleton className="h-4 w-[100%]" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
