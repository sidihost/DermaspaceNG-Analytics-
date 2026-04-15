-- Update admin user credentials for DermaspaceNG Analytics
-- Username: Dermaadmin
-- Password: Derma2025@@ (bcrypt hashed)

UPDATE "user" 
SET 
  username = 'Dermaadmin',
  password = '$2b$10$dGJFOaFTz4qWwJDK8n0Quu2JzL3gN5X7mZ1qA8rK5tH2wE6yU4vCe'
WHERE role = 'admin';
