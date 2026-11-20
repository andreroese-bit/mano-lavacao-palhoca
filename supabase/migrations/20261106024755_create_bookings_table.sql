/*
# Create bookings table for landing page appointment requests

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `name` (text, required, 2-100 chars)
  - `phone` (text, required, 8-20 chars)
  - `vehicle` (text, required, 2-100 chars)
  - `service` (text, required, 2-100 chars)
  - `preferred_date` (date, optional)
  - `notes` (text, optional, max 500 chars)
  - `created_at` (timestamptz, defaults to now)

2. Security
- Enable RLS on `bookings`.
- Grant INSERT only to `anon` and `authenticated`, so visitors can submit requests but cannot read other customers' data.
- A single INSERT policy allows anyone to submit a request. No SELECT, UPDATE or DELETE access is granted to public roles.

3. Important Notes
- Length checks on text columns protect the table from oversized or empty submissions.
- Phone numbers are stored as typed by the visitor.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 8 AND 20),
  vehicle text NOT NULL CHECK (char_length(vehicle) BETWEEN 2 AND 100),
  service text NOT NULL CHECK (char_length(service) BETWEEN 2 AND 100),
  preferred_date date,
  notes text CHECK (notes IS NULL OR char_length(notes) <= 500),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON bookings TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);
