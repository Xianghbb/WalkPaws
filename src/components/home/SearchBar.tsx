'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [location, setLocation] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (location.trim()) {
      // Navigate to walkers page with location parameter
      router.push(`/walkers?location=${encodeURIComponent(location)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex w-full max-w-lg flex-col items-center gap-4 sm:flex-row">
      <label className="flex flex-col h-14 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-full h-full bg-white shadow-md border border-gray-100 overflow-hidden">
          <div className="text-subtle-light dark:text-subtle-dark flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <input
            type="text"
            placeholder="Enter your suburb..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-0 bg-transparent text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 h-full placeholder:text-subtle-light dark:placeholder:text-subtle-dark px-2 text-base font-normal leading-normal"
          />
          <div className="flex items-center pr-1">
            <button
              type="submit"
              className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-5 bg-primary text-white text-sm font-medium leading-normal tracking-wide transition-transform hover:scale-105"
            >
              <span className="truncate">Find Walkers</span>
            </button>
          </div>
        </div>
      </label>
    </form>
  )
}