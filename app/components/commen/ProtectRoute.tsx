'use client'

import React, { useEffect } from 'react'
import Cookie from 'js-cookie'
import { useRouter ,usePathname} from "next/navigation";
import { useDispatch } from 'react-redux';
import { setLogged, setToken } from '@/lib/feature/status/statusSlice';
import { Notificationsocket } from '@/socket'


export default function ProtectRoute() {
    const router = useRouter()
    const pathname = usePathname()
    const dispatch  = useDispatch()
   
    useEffect(() => {
      Notificationsocket.on('notification', () => {
        console.log('connected',Notificationsocket)
      })
        const token = Cookie.get("token");
        if (!token && pathname !== "auth/Login") {
          router.push("/");
          dispatch(setLogged(false))
          dispatch(setToken(false))
        }else if(!token && pathname === "auth/Login") {
          router.push('/auth/Login')
        }
        else {
          dispatch(setLogged(true))
          dispatch(setToken(true))
        }
        console.log(`wrong!!`)


        return () => {
          Notificationsocket.off("notification");
        }
      })


   return <div></div>
  
}
