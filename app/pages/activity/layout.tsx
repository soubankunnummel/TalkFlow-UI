import React from 'react'
import TopBar from './components/TopBar'

export default function layout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <div>
        <TopBar />

        <div>
            {children}
        </div>
    </div>
  )
}
