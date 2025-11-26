/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Pet } from '@/types/app';
import PetCard from '@/components/pets/PetCard';
import Header from '@/components/layout/Header';

export default function PetListPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    fetchPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPets = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push('/auth/login');
        return;
      }

      // Fetch pets for the current user
      const { data, error: petsError } = await supabase
        .from('pets')
        .select('*')
        .eq('owner_id', user.id)
        .order('created_at', { ascending: false });

      if (petsError) {
        throw petsError;
      }

      setPets(data || []);
    } catch (err) {
      console.error('Error fetching pets:', err);
      setError('Failed to load pets. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-1">
          <div className="px-4 md:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <div className="flex flex-col gap-2">
                <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
              <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="flex-1">
          <div className="px-4 md:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-gray-900 dark:text-white text-4xl font-extrabold tracking-tight">
                  My Pawsome Friends
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-base font-normal">
                  Manage your pets' profiles to help walkers get to know them.
                </p>
              </div>
              <Link
                href="/pets/add"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors gap-2"
              >
                <span className="material-symbols-outlined text-xl">add</span>
                <span className="truncate">Add a New Pet</span>
              </Link>
            </div>
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400 text-lg mb-4">{error}</p>
              <button
                onClick={fetchPets}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Try Again
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1">
        <div className="px-4 md:px-8 lg:px-12 py-10 max-w-7xl mx-auto">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-900 dark:text-white text-4xl font-extrabold tracking-tight">
                My Pawsome Friends
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal">
                Manage your pets' profiles to help walkers get to know them.
              </p>
            </div>
            <Link
              href="/pets/add"
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors gap-2"
            >
              <span className="material-symbols-outlined text-xl">add</span>
              <span className="truncate">Add a New Pet</span>
            </Link>
          </div>

          {/* Pet Grid or Empty State */}
          {pets.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl mt-8">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="text-primary opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.63,21.94C12.37,22 12,22 11.6,22a10,10 0 0,1 0,-20c0.4,0 0.77,0 1.13,0.06C13.1,2.05 13.5,2 14,2a1,1 0 0,1 1,1c0,0.24 -0.08,0.47 -0.22,0.66c-0.21,0.29 -0.5,0.5 -0.82,0.64c-1.05,0.45 -1.9,1.17 -2.57,2.09c-2.13,2.94 -1.43,7.09 1.5,9.22c0.2,0.14 0.38,0.3 0.54,0.45c0.35,0.35 0.63,0.78 0.73,1.26c0.12,0.58 -0.1,1.18 -0.52,1.56Z M4.16,11.5c-0.23,-0.51 -0.37,-1.06 -0.42,-1.63c-0.05,-0.54 -0.04,-1.09 0.03,-1.63c0.18,-1.41 0.73,-2.73 1.58,-3.82c0.24,-0.32 0.54,-0.59 0.88,-0.79c0.43,-0.25 0.94,-0.25 1.37,-0.02c0.47,0.25 0.8,0.71 0.86,1.22c0.05,0.51 -0.1,1 -0.42,1.38c-0.51,0.62 -1.25,1 -2.04,1.03c-0.2,0 -0.4,0.06 -0.58,0.15c-0.53,0.27 -0.89,0.8 -0.99,1.39c-0.09,0.55 0.09,1.12 0.48,1.52c0.39,0.41 0.94,0.61 1.5,0.52c0.57,-0.09 1.08,-0.43 1.41,-0.9c0.23,-0.32 0.51,-0.58 0.82,-0.77c0.49,-0.3 1.05,-0.35 1.58,-0.13c0.57,0.23 1,0.72 1.1,1.3c0.12,0.66 -0.11,1.31 -0.59,1.75z"/>
                  </svg>
                </div>
                <div className="flex max-w-sm flex-col items-center gap-2">
                  <p className="text-gray-900 dark:text-white text-xl font-bold">No pets here yet!</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                    Add your furry friend to get started and find the perfect walker for them.
                  </p>
                </div>
                <Link
                  href="/pets/add"
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors gap-2"
                >
                  <span className="material-symbols-outlined text-xl">add</span>
                  <span className="truncate">Add a New Pet</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}