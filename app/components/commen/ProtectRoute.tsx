'use client'

import React, { useEffect } from 'react'
import Cookie from 'js-cookie'
import { useRouter ,usePathname} from "next/navigation";


export default function ProtectRoute() {
    const router = useRouter()
    const pathname = usePathname()
   
    useEffect(() => {
        const token = Cookie.get("token");
        if (!token && pathname !== "auth/Login") {
          router.push("auth/Login");
        }
        console.log(`wrong!!`)
      })
   return <div></div>
  
}
// TODO: isssu aftr the login not redierct to the home page
