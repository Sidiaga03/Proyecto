'use client'
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export const Search = ({ placeholder }: { placeholder: string}) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term){
            params.set('query', term)
        }else {
          params.delete('query')  
        }
        replace(`${pathname}?${params.toString()}`)
    }
  return (
    <>
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                onChange={(event) => handleSearch(event.target.value)}
                className="peer block w-full rounded-md border border-gray-200 py-1
                 pl-10 text-sm outline-2 placeholder:text-gray-500"
                 placeholder={placeholder}
                 defaultValue={searchParams.get('query')?.toString()}
            ></input>
        </div>
    </>
  )
}