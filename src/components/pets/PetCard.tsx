'use client';

import { Pet } from '@/types/app';
import Link from 'next/link';
import { useState } from 'react';

interface PetCardProps {
  pet: Pet;
}

export default function PetCard({ pet }: PetCardProps) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="group relative flex flex-col text-center bg-white dark:bg-gray-800/60 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Pet Image */}
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover w-full"
        style={{
          backgroundImage: pet.image_url ? `url(${pet.image_url})` : 'url(https://via.placeholder.com/400x400?text=No+Image)'
        }}
        data-alt={`${pet.name} - ${pet.breed}`}
      />

      {/* Pet Info */}
      <div className="p-4">
        <p className="text-gray-900 dark:text-white text-lg font-bold">{pet.name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">{pet.breed}</p>
        <p className="text-gray-500 dark:text-gray-500 text-xs font-normal mt-1">
          {pet.age} years old • {pet.size}
        </p>
      </div>

      {/* Options Button (appears on hover) */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative">
          <button
            className="h-8 w-8 rounded-full bg-white/70 dark:bg-black/50 backdrop-blur-sm text-gray-900 dark:text-white flex items-center justify-center hover:bg-white dark:hover:bg-black/70"
            onClick={() => setShowOptions(!showOptions)}
          >
            <span className="material-symbols-outlined text-lg">more_horiz</span>
          </button>

          {/* Dropdown Menu */}
          {showOptions && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <Link
                href={`/pets/${pet.id}/edit`}
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
              >
                <span className="material-symbols-outlined text-sm mr-2">edit</span>
                Edit Pet
              </Link>
              <button
                className="flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-b-lg w-full text-left"
                onClick={() => {
                  // Handle delete logic here
                  if (confirm(`Are you sure you want to delete ${pet.name}?`)) {
                    // Delete pet logic would go here
                  }
                  setShowOptions(false);
                }}
              >
                <span className="material-symbols-outlined text-sm mr-2">delete</span>
                Delete Pet
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Clickable area for viewing pet details */}
      <Link
        href={`/pets/${pet.id}`}
        className="absolute inset-0 z-0"
      />
    </div>
  );
}