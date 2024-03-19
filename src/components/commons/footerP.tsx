import React from 'react'

export const FooterP = () => {
  return (
    <>
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 bg-gradient-to-b from-slate-300 via-transparent to-gray-300">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center font-bold text-red-900">© 2024 <a href="/public" className="hover:underline">HordeSolutions™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-bold text-red-900 sm:mt-0">
                <li>
                    <a href="/public/about" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    </>
  )
}