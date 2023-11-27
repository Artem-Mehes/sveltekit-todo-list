// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User, Session } from '@auth/core/types';

declare global {
	namespace App {
		interface Locals {
			getSession: () => Promise<
				| ({
						user: User;
				  } & Session)
				| null
			>;
		}
	}
}

export {};
