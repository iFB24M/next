// 'use client';

import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = ({ children }: { children: ReactNode }): ReactNode => {
	return (
		<QueryClientProvider client={JSON.parse(JSON.stringify(queryClient))}>
			{children}
		</QueryClientProvider>
	);
};