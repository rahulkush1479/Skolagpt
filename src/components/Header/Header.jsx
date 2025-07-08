
import React from 'react'
import { Heart, House } from "lucide-react"

export default function Header() {
    return (
        <div className="absolute top-0 right-0 m-4 flex flex-col items-end gap-6 z-50">
            <div className="cursor-pointer group flex items-center justify-center rounded-full  w-12 h-12 transition-all duration-300 ease-in-out hover:w-32 hover:scale-105 hover:shadow-xl bg-blue-500 ">
                <div className="overflow-hidden w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm font-semibold text-white">HOME</div>
                <House size={20} className="group-hover:hidden text-white" />
            </div>

            <div className="cursor-pointer group flex items-center justify-center rounded-full  w-12 h-12 transition-all duration-300 ease-in-out hover:w-32 hover:scale-105 hover:shadow-xl bg-green-500 ">
                <div className="overflow-hidden w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-300 ease-in-out text-sm font-semibold text-white">FAVORITES</div>
                <Heart size={20} className="group-hover:hidden text-white" />
            </div>
            
        </div>
    )
}
