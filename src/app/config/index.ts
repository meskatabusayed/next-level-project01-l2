import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    prot : process.env.PORT,
    db_url: process.env.DATABASE_URL,
    bcrypt_salt_round : process.env.BCRYPT_SALT_ROUNDS,
    default_pass : process.env.DEFAULT_PASS
}
