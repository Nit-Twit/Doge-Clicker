"use client"

import Link from "next/link"

export default function NotFoundPage() {
    return(
        <div>
            <title>Not Found | Doge Clicker</title>
            <div className="flex flex-col w-full h-[88vh] bg-blue-600 items-center justify-center gap-4">
                <h1 className="text-2xl">Error 404 - Could Not Find The Page You&apos;re Looking For :/</h1>
                <Link className="text-xl" href={"/"} >Home</Link>
            </div>
        </div>
    )
}