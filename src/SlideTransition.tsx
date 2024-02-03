import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {FONT_FAMILY} from './HelloWorld/constants';
export const SlideTransition = () => {
	return (
		<TransitionSeries>
			<TransitionSeries.Sequence durationInFrames={40}>
				<h1
					style={{
						color: '0b84f3',
						backgroundColor: 'white',
						fontFamily: FONT_FAMILY,
						fontSize: 40,
						textAlign: 'center',
						position: 'absolute',
						bottom: 140,
						width: '100%',
					}}
				>
					A
				</h1>
			</TransitionSeries.Sequence>
			<TransitionSeries.Transition
				presentation={slide()}
				timing={linearTiming({durationInFrames: 30})}
			/>
			<TransitionSeries.Sequence durationInFrames={60}>
				<h1
					style={{
						color: 'pink',
						backgroundColor: 'green',
						fontFamily: FONT_FAMILY,
						fontSize: 40,
						textAlign: 'center',
						position: 'absolute',
						bottom: 140,
						width: '100%',
					}}
				>
					B
				</h1>
			</TransitionSeries.Sequence>
		</TransitionSeries>
	);
};
