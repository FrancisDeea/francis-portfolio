const { sql } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

(async () => {
  const hashedPassword = await bcrypt.hash("nalalilykiradeea", 10);
  const result = await sql`
    INSERT INTO users (name, email, password)
    VALUES ('francisdeea', 'francisbernal14@gmail.com', ${hashedPassword})
    ON CONFLICT (id) DO NOTHING;
  `;
  return result
})()