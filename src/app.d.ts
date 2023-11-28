// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { User, Session } from '@auth/core/types';
import type { Todo } from '@prisma/client';

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
		interface PageData {
			todos: Todo[];
			session: Session | null;
		}
	}
}

export {};
