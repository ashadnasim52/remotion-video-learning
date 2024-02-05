import React from 'react';
import {AbsoluteFill} from 'remotion';
export const Background: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(to bottom, red, green)',
			}}
		/>
	);
};
