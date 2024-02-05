import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Move} from './Move';
export const Trail: React.FC<{
	amount: number;
	children: React.ReactNode;
}> = ({amount, children}) => {
	return (
		<AbsoluteFill>
			{new Array(amount).fill(true).map((a, i) => {
				return (
					<Sequence from={i * 3}>
						<AbsoluteFill>
							<Move>
								<AbsoluteFill
									style={{
										scale: String(1 - i / amount),
									}}
								>
									{children}
								</AbsoluteFill>
							</Move>
						</AbsoluteFill>
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};
