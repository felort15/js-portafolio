 import { writeFileSync } from 'fs';

writeFileSync(envFilePath, `NEXT_PUBLIC_API_URL=${process.env.NEXT_PUBLIC_API_URL}\n`); 