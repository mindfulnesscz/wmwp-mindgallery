/**
 * Set the attributes for the Background transformations
 * @type {Object}
 */
function BackgroundTransforms( props ) {

	const transforms = {
		backgroundColor: props.backgroundColor,
		customBackgroundColor: props.customBackgroundColor,
		backgroundImg: props.backgroundImg,
		backgroundOverlay: props.backgroundOverlay,
		backgroundPosition: props.backgroundPosition,
		backgroundRepeat: props.backgroundRepeat,
		backgroundSize: props.backgroundSize,
		backgroundPadding: props.backgroundPadding,
		backgroundPaddingMobile: props.backgroundPaddingMobile,
		backgroundRadius: props.backgroundRadius,
		hasParallax: props.hasParallax,
		captionStyle: props.captionStyle,
	};

	return transforms;
}

export default BackgroundTransforms;