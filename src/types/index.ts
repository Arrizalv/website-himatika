// Types for HIMATIKA UNU Jogja Website
// Updated to match new database schema

export interface Division {
  id: number;
  name: string;
  slug: string;
  description?: string;
  icon_name?: string;
  order?: number;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  image_url: string | null;
  division_id: number;
  instagram?: string;
  linkedin?: string;
  division?: Division;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  thumbnail_url: string | null;
  published_at: string;
  is_featured: boolean;
}

export interface Feedback {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}
