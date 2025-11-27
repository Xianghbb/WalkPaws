'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Pet } from '@/types/app';
import PetCard from '@/components/pets/PetCard';

export default function TestPetList() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchPets() {
      try {
        setLoading(true);
        setError(null);

        // Use the hardcoded test user ID for testing
        const testUserId = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';

        // Fetch pets for the test user
        const { data, error: petsError } = await supabase
          .from('pets')
          .select('*')
          .eq('owner_id', testUserId)
          .order('created_at', { ascending: false });

        if (petsError) {
          throw petsError;
        }

        console.log('Pets data:', data);
        setPets(data || []);
      } catch (err) {
        console.error('Error fetching pets:', err);
        setError('Failed to load pets. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchPets();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Test Pet List</h1>
        <div className="text-gray-600 dark:text-gray-400">Loading pets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Test Pet List</h1>
        <div className="text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Test Pet List</h1>

      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400">
          Testing with hardcoded user ID: a1b2c3d4-e5f6-7890-abcd-ef1234567890
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Found {pets.length} pets in database
        </p>
      </div>

      {pets.length === 0 ? (
        <div className="text-gray-600 dark:text-gray-400">
          No pets found for this user
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      )}
    </div>
  );
}