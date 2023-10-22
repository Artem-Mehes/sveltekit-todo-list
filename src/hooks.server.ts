import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/core/providers/google';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, AUTH_SECRET } from '$env/static/private';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '$lib/prisma';

export const handle = SvelteKitAuth({
	providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })],
	secret: AUTH_SECRET,
	adapter: PrismaAdapter(prisma)
});
