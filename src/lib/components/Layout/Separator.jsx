import React from "react";
import PropTypes from "prop-types";

const Separator = ({
	defaultDblClickPos,
	disabled,
	layoutIndex,
	onSeparatorDoubleClick,
	onSeparatorMouseDown,
	orientation,
}) => {
	const styles = {
		horizontalSeparator: {
			display: "inline-block",
			width: "100%",
			height: "3px",
			background: "hsl(0, 0%, 80%)",
			cursor: disabled ? "not-allowed" : "row-resize",
		},
		verticalSeparator: {
			display: "inline-block",
			width: "3px",
			height: "100%",
			background: "hsl(0, 0%, 80%)",
			cursor: disabled ? "not-allowed" : "col-resize",
		},
	};
	return (
		<div
			style={
				orientation === "vertical"
					? styles.horizontalSeparator
					: styles.verticalSeparator
			}
			onMouseDown={disabled ? null : () => onSeparatorMouseDown(layoutIndex)}
			onDoubleClick={
				disabled
					? null
					: () => onSeparatorDoubleClick(layoutIndex, defaultDblClickPos)
			}
		/>
	);
};

Separator.propTypes = {
	defaultDblClickPos: PropTypes.number,
	disabled: PropTypes.bool,
	layoutIndex: PropTypes.number,
	onSeparatorDoubleClick: PropTypes.func,
	onSeparatorMouseDown: PropTypes.func,
	orientation: PropTypes.string,
};

export default Separator;
