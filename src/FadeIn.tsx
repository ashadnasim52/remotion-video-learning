import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const FadeIn = () => {
	const frame = useCurrentFrame();
	const opacity = Math.min(1, frame / 60);
	return <div style={{opacity: opacity}}>Hello World!</div>;
};
