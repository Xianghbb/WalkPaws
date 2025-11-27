'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function TestAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function checkAuth() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);

        if (user) {
          // Test fetching pets
          const { data: pets } = await supabase
            .from('pets')
            .select('*')
            .eq('owner_id', user.id);

          console.log('Pets found:', pets);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Authentication</h1>
      {user ? (
        <div>
          <p>✅ Authenticated as: {user.email}</p>
          <p>User ID: {user.id}</p>
          <p>Full Name: {user.user_metadata?.full_name || 'Not set'}</p>
          <p>Role: {user.user_metadata?.role || 'Not set'}</p>
        </div>
      ) : (
        <p>❌ Not authenticated</p>
      )}
    </div>
  );
}