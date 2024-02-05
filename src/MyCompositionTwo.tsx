import {AbsoluteFill} from 'remotion';
import {Background} from './Background';
import {Dot} from './Dot';
import {Shrinking} from './Shrinking';
import {Move} from './Move';
import {Trail} from './Trail';
import {Explosion} from './Explosion';

export const MyCompositionTwo: React.FC = () => {
	return (
		<AbsoluteFill>
			<Background />
			<Explosion>
				<Trail amount={4}>
					<Move>
						<Shrinking>
							<Dot />
						</Shrinking>
					</Move>
				</Trail>
			</Explosion>
		</AbsoluteFill>
	);
};
