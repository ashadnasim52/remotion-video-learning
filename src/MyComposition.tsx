import {
	AbsoluteFill,
	Audio,
	Sequence,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import logo from './logo.png';

import {FadeIn} from './FadeIn';
const Title: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{opacity, textAlign: 'center', fontSize: '7em', color: 'black'}}
		>
			{title}
		</div>
	);
};
export const MyVideo = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				<Audio src="https://download.samplelib.com/mp3/sample-15s.mp3" />

				<Sequence durationInFrames={40}>
					<Title title="Hello" />
				</Sequence>
				<Sequence from={40}>
					<Title title="World" />
				</Sequence>
				<AbsoluteFill style={{}}>
					<FadeIn />
				</AbsoluteFill>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
