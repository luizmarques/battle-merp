/**
 * ! Executing this script will delete all data in your database and seed it with 10 character.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const main = async () => {
  const seed: any = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();


  // Seed the database with 10 character
  await seed.character((x) => x(100));

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  process.exit();
};

main();