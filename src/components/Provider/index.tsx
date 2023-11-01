import React from 'react';

export const Provider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
	return (
		<>
			{children}
		</>
	);
};