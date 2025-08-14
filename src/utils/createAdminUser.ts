import { supabase } from '@/integrations/supabase/client';

export const createAdminUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.functions.invoke('create-admin-user', {
      body: { email, password }
    });

    if (error) {
      console.error('Error creating admin user:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error creating admin user:', error);
    return { success: false, error: 'Failed to create admin user' };
  }
};

// Call this function to create the admin user
export const initializeAdminUser = async () => {
  const adminEmail = 'yurchuk.anatoliy@gmail.com';
  const adminPassword = 'NT2026@@1';
  
  const result = await createAdminUser(adminEmail, adminPassword);
  
  if (result.success) {
    console.log('Admin user created successfully:', result.data);
  } else {
    console.error('Failed to create admin user:', result.error);
  }
  
  return result;
};