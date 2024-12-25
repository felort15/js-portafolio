import { writeFileSync } from 'fs';

const envFilePath = './.env';  // or whatever path you need
writeFileSync(envFilePath, `NEXT_PUBLIC_API_URL=${process.env.NEXT_PUBLIC_API_URL}\n`);
