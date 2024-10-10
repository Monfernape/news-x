import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
    return (
        <div className="p-4 flex justify-center md:justify-between items-center gap-4 max-w-7xl mx-auto flex-wrap md:flex-nowrap">
           <div className='flex flex-col gap-4 '>
           <Skeleton className=" h-4 w-[250px]" />
            <Skeleton className="h-4 w-[250px]" />
            
            <Skeleton className=" h-60 w-[250px] md:h-44" />
           
           </div>
           
           
        </div>
    )
}

export default Loading
