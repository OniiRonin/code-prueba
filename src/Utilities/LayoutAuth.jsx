import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAuth = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 layout-auth-container">
            LayoutAuth
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutAuth