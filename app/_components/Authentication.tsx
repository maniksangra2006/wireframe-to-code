"use client"
import { auth } from '@/configs/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

function Authentication({ children }: any) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    
    const onButtonPress = async () => {
        setLoading(true);
        const loadingToast = toast.loading('Signing in...');
        
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            
            toast.success('Login successful!', { id: loadingToast });
            
            // Small delay for better UX
            setTimeout(() => {
                router.push('/dashboard');
            }, 500);
            
        } catch (error: any) {
            console.error("Login error:", error);
            
            if (error.code === 'auth/popup-closed-by-user') {
                toast.error('Login cancelled', { id: loadingToast });
            } else if (error.code === 'auth/popup-blocked') {
                toast.error('Please allow popups', { id: loadingToast });
            } else {
                toast.error('Login failed. Try again', { id: loadingToast });
            }
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div>
            <div 
                onClick={!loading ? onButtonPress : undefined} 
                className={loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            >
                {children}
            </div>
        </div>
    )
}

export default Authentication