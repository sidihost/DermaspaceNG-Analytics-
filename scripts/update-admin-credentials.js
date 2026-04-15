import bcrypt from 'bcryptjs';
import pg from 'pg';

const { Pool } = pg;

async function updateAdminCredentials() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    // Generate bcrypt hash for the new password
    const newPassword = 'Derma2025@@';
    const newUsername = 'Dermaadmin';
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);

    console.log('Generated password hash:', hashedPassword);

    // First, check if admin user exists
    const checkResult = await pool.query(
      `SELECT user_id, username, role FROM "user" WHERE role = 'admin' LIMIT 1`,
    );

    if (checkResult.rows.length === 0) {
      console.log('No admin user found. Creating new admin user...');
      // Create new admin user
      const createResult = await pool.query(
        `INSERT INTO "user" (user_id, username, role, password) 
         VALUES (gen_random_uuid(), $1, 'admin', $2)
         RETURNING user_id, username`,
        [newUsername, hashedPassword],
      );
      console.log('Created admin user:', createResult.rows[0]);
    } else {
      console.log('Found existing admin user:', checkResult.rows[0]);
      // Update existing admin user
      const updateResult = await pool.query(
        `UPDATE "user" 
         SET username = $1, password = $2 
         WHERE role = 'admin'
         RETURNING user_id, username`,
        [newUsername, hashedPassword],
      );
      console.log('Updated admin user:', updateResult.rows[0]);
    }

    console.log('\n=== Admin credentials updated successfully ===');
    console.log('Username: Dermaadmin');
    console.log('Password: Derma2025@@');
  } catch (error) {
    console.error('Error updating admin credentials:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

updateAdminCredentials();
