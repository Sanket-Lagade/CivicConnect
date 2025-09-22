/*
  # Create issues table and storage bucket

  1. New Tables
    - `issues`
      - `id` (uuid, primary key)
      - `name` (text) - Reporter's full name
      - `email` (text) - Reporter's email
      - `description` (text) - Issue description
      - `category` (text) - Issue category
      - `priority` (text) - Priority level (low, medium, high)
      - `status` (text) - Status (pending, in_progress, resolved)
      - `photo_url` (text, optional) - URL to uploaded photo
      - `latitude` (numeric, optional) - GPS latitude
      - `longitude` (numeric, optional) - GPS longitude
      - `address` (text, optional) - Human-readable address
      - `created_at` (timestamp) - When issue was created
      - `updated_at` (timestamp) - When issue was last updated

  2. Security
    - Enable RLS on `issues` table
    - Add policies for public read access and authenticated admin write access
    - Create storage bucket for issue photos

  3. Storage
    - Create 'issues' bucket for photo storage
    - Allow public read access for photos
    - Allow authenticated users to upload photos
*/

-- Create issues table
CREATE TABLE IF NOT EXISTS issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  priority text DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'resolved')),
  photo_url text,
  latitude numeric,
  longitude numeric,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE issues ENABLE ROW LEVEL SECURITY;

-- Allow public to read all issues (for transparency)
CREATE POLICY "Anyone can view issues"
  ON issues
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to insert issues (for reporting)
CREATE POLICY "Anyone can report issues"
  ON issues
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users (admins) to update issues
CREATE POLICY "Authenticated users can update issues"
  ON issues
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users (admins) to delete issues if needed
CREATE POLICY "Authenticated users can delete issues"
  ON issues
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for issue photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('issues', 'issues', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public to view photos
CREATE POLICY "Public can view issue photos"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'issues');

-- Allow anyone to upload photos (for issue reporting)
CREATE POLICY "Anyone can upload issue photos"
  ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'issues');

-- Allow authenticated users to delete photos if needed
CREATE POLICY "Authenticated users can delete issue photos"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'issues');