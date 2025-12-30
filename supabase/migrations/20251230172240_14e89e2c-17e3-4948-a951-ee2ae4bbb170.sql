-- Create leads table to store form submissions
CREATE TABLE public.leads (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    marketing_consent BOOLEAN DEFAULT false,
    order_consent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (public - anyone can submit)
CREATE POLICY "Anyone can submit a lead" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading leads (only for authenticated admin users later)
-- For now, we'll make it restrictive - no one can read via client
CREATE POLICY "No public read access" 
ON public.leads 
FOR SELECT 
USING (false);