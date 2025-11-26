// Simple test script to verify pet list functionality
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://manpcvuobmyyvdkyxtop.supabase.co',
  'sb_publishable__wkhO6BeEJ3OsSfAfzgYkQ_BRQ9tm_B'
);

async function testPetList() {
  try {
    // Sign in with test user
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: 'test@walkpaws.com',
      password: 'password123'
    });

    if (authError) {
      console.error('Auth error:', authError);
      return;
    }

    console.log('✅ Authentication successful');
    console.log('User ID:', authData.user.id);

    // Fetch pets for the authenticated user
    const { data: pets, error: petsError } = await supabase
      .from('pets')
      .select('*')
      .eq('owner_id', authData.user.id)
      .order('created_at', { ascending: false });

    if (petsError) {
      console.error('Pets fetch error:', petsError);
      return;
    }

    console.log('✅ Pets fetched successfully');
    console.log(`Found ${pets.length} pets:`);
    pets.forEach(pet => {
      console.log(`- ${pet.name} (${pet.breed}, ${pet.age} years old)`);
    });

  } catch (error) {
    console.error('Test failed:', error);
  }
}

testPetList();