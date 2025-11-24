export interface Pet {
  id: string
  name: string
  breed: string
  age: number
  size: 'small' | 'medium' | 'large'
  special_instructions?: string
  owner_id: string
  created_at: string
  updated_at: string
}

export interface Walker {
  id: string
  name: string
  email: string
  rating: number
  experience_years: number
  price_per_walk: number
  availability: string[]
  bio: string
  created_at: string
}

export interface WalkRequest {
  id: string
  owner_id: string
  pet_id: string
  walker_id?: string
  date: string
  time: string
  duration: number
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  notes?: string
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  full_name: string
  role: 'owner' | 'walker'
  created_at: string
}