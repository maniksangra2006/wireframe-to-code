"use client"
import { auth } from '@/configs/firebaseConfig';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuthContext } from '../provider';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

function ProfileAvatar() {
    const user = useAuthContext();
    const router = useRouter();
    const [imageError, setImageError] = useState(false);
    
    const onButtonPress = () => {
        signOut(auth).then(() => {
            console.log("Logout successful");
            router.replace('/');
            router.refresh();
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    }

    // Determine what to show
    const showFallback = !user?.user?.photoURL || imageError;
    const photoURL = user?.user?.photoURL || '';
    
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <button className='focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full'>
                        {!showFallback && photoURL ? (
                            <img 
                                src={photoURL} 
                                alt='profile' 
                                className='w-[35px] h-[35px] rounded-full cursor-pointer hover:opacity-80 transition-opacity border-2 border-gray-200 object-cover' 
                                onError={() => setImageError(true)}
                                referrerPolicy="no-referrer"
                            />
                        ) : (
                            <div className="w-[35px] h-[35px] rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all shadow-md">
                                {user?.user?.email?.[0]?.toUpperCase() || user?.user?.displayName?.[0]?.toUpperCase() || 'U'}
                            </div>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent 
                    className='w-auto min-w-[200px] p-3' 
                    align="end" 
                    sideOffset={5}
                >
                    <div className='flex flex-col gap-2'>
                        {/* User Info with Avatar */}
                        <div className='pb-2 border-b flex items-center gap-3'>
                            {!showFallback && photoURL ? (
                                <img 
                                    src={photoURL} 
                                    alt='profile' 
                                    className='w-10 h-10 rounded-full border-2 border-gray-200 object-cover' 
                                    onError={() => setImageError(true)}
                                    referrerPolicy="no-referrer"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold shadow-md">
                                    {user?.user?.email?.[0]?.toUpperCase() || user?.user?.displayName?.[0]?.toUpperCase() || 'U'}
                                </div>
                            )}
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-semibold text-gray-800 truncate'>
                                    {user?.user?.displayName || 'User'}
                                </p>
                                <p className='text-xs text-gray-500 truncate'>
                                    {user?.user?.email}
                                </p>
                            </div>
                        </div>
                        
                        {/* Logout Button */}
                        <Button 
                            variant={'destructive'} 
                            onClick={onButtonPress} 
                            className='w-full justify-start'
                            size="sm"
                        >
                            <svg 
                                className="w-4 h-4 mr-2" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                                />
                            </svg>
                            Logout
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default ProfileAvatar