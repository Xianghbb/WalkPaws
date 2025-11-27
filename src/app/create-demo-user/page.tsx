'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function CreateDemoUser() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const createDemoUser = async () => {
    setLoading(true);
    setMessage('');

    try {
      // Try to sign up with a new demo user
      const { data, error } = await supabase.auth.signUp({
        email: 'demo@walkpaws.com',
        password: 'demo123',
        options: {
          data: {
            full_name: 'Demo User',
            role: 'owner'
          }
        }
      });

      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('✅ Demo user created successfully!');

        // Add some sample pets for the new user
        if (data.user) {
          const samplePets = [
            {
              name: 'Charlie',
              breed: 'Labrador Retriever',
              age: 4,
              size: 'large' as const,
              special_instructions: 'Very energetic, loves swimming',
              owner_id: data.user.id,
              image_url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop'
            },
            {
              name: 'Bella',
              breed: 'French Bulldog',
              age: 2,
              size: 'small' as const,
              special_instructions: 'Needs short walks due to breathing issues',
              owner_id: data.user.id,
              image_url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop'
            }
          ];

          for (const pet of samplePets) {
            await supabase.from('pets').insert(pet);
          }

          setMessage('✅ Demo user and sample pets created! Redirecting to pet list...');
          setTimeout(() => {
            router.push('/pets');
          }, 2000);
        }
      }
    } catch (error) {
      setMessage('An unexpected error occurred');
      console.error('Error creating demo user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create Demo Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Set up a demo account with sample pets
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">Demo Account Details</h3>
              <p className="text-sm text-green-800">
                <strong>Email:</strong> demo@walkpaws.com<br />
                <strong>Password:</strong> demo123<br />
                <strong>Includes:</strong> 2 sample pets
              </p>
            </div>

            {message && (
              <div className={`text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </div>
            )}

            <button
              onClick={createDemoUser}
              disabled={loading}
              className="flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create Demo Account'}
            </button>

            <div className="text-center">
              <a href="/" className="text-sm text-blue-600 hover:text-blue-500">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}