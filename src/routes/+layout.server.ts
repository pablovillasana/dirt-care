import type { LayoutServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  return { user: locals.user, preferedTheme: locals.preferedTheme };
}) satisfies LayoutServerLoad;
