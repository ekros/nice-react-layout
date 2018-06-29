import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import Separator from "./Separator.jsx";
import Panel from "./Panel.jsx";
import Spacer from "./Spacer.jsx";

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.layout = React.createRef();
		this.mockupColors = [
			"#ffcccc",
			"#ccffff",
			"#ffe4cc",
			"#ccceff",
			"#fffbcc",
			"#ecccff",
			"#d6ffcc",
			"#ffccf2",
		];
		let initialLayout = [];
		let totalFixedWidth = 0;
		let totalFixedHeight = 0;
		let totalSpacerSize = 0;
		React.Children.map(props.children, c => {
			if (c.type === Panel) {
				if (c.props.fixed) {
					initialLayout.push(0);
					if (c.props.fixedWidth) {
						totalFixedWidth += c.props.fixedWidth;
					} else if (c.props.fixedHeight) {
						totalFixedHeight += c.props.fixedHeight;
					}
				} else {
					initialLayout.push(c.props.proportion);
				}
			} else if (c.type === Spacer) {
				totalSpacerSize += c.props.size;
			}
		});
		this.state = {
			collapsedPanels: [], // array of indexes
			draggingSeparator: false,
			draggingSeparatorIndex: undefined,
			isBusyOnDragging: false, // sidebar dragging throttle
			layout: initialLayout,
			totalFixedWidth,
			totalFixedHeight,
			totalSpacerSize,
		};
		this.collapsePanel = this.collapsePanel.bind(this);
		this.handleSeparatorMouseMove = this.handleSeparatorMouseMove.bind(this);
		this.handleSeparatorMouseUp = this.handleSeparatorMouseUp.bind(this);
		this.onSeparatorDoubleClick = this.onSeparatorDoubleClick.bind(this);
		this.onSeparatorMouseDown = this.onSeparatorMouseDown.bind(this);
	}

	collapsePanel(layoutIndex) {
		const { collapsedPanels } = this.state;
		if (!collapsedPanels.includes(layoutIndex)) {
			this.setState({ collapsedPanels: collapsedPanels.concat([layoutIndex]) });
		} else {
			this.setState({
				collapsedPanels: _.reject(collapsedPanels, p => p === layoutIndex),
			});
		}
	}
	onSeparatorDoubleClick(draggingSeparatorIndex, defaultDblClickPos) {
		this.setState({ draggingSeparatorIndex }, () => {
			this.handleSeparatorMouseMove(
				this.props.orientation === "vertical"
					? { pageY: defaultDblClickPos }
					: { pageX: defaultDblClickPos }
			);
			this.handleSeparatorMouseUp();
		});
	}
	onSeparatorMouseDown(draggingSeparatorIndex) {
		document.addEventListener("mouseup", this.handleSeparatorMouseUp);
		document.addEventListener("mousemove", this.handleSeparatorMouseMove);
		this.setState({ draggingSeparatorIndex });
	}
	handleSeparatorMouseMove(e) {
		const { orientation, reverse, separatorsRefreshInterval } = this.props;
		const rect = this.layout.current.getBoundingClientRect();
		const { top, left, width, height } = rect;
		const {
			draggingSeparatorIndex,
			isBusyOnDragging,
			layout,
			totalFixedWidth,
			totalFixedHeight,
			totalSpacerSize,
		} = this.state;
		const newLayout = layout.slice(0);
		if (!isBusyOnDragging) {
			let separatorPos;
			if (reverse) {
				separatorPos =
					orientation === "vertical"
						? height - e.layerY
						: width - e.layerX;
			} else {
				separatorPos = orientation === "vertical" ? e.pageY - top : e.pageX - left;
			}

			// separator pos limits
			if (separatorPos <= 0) {
				separatorPos = 1;
			} else if (separatorPos >= width) {
				separatorPos = width;
			}

			let flexUnitsSum = 0;
			let currentFlexValue = 0;
			const layoutSize =
				orientation === "vertical"
					? height - totalFixedHeight - totalSpacerSize
					: width - totalFixedWidth - totalSpacerSize;
			newLayout.forEach(panel => {
				flexUnitsSum += panel;
			});
			const newFlexValue = separatorPos * flexUnitsSum / layoutSize;
			for (let i = 0; i <= draggingSeparatorIndex; i++) {
				currentFlexValue += newLayout[i];
			}
			const relation = newFlexValue / currentFlexValue;
			for (let i = 0; i <= draggingSeparatorIndex; i++) {
				newLayout[i] = newLayout[i] * relation;
			}
			this.setState({
				draggingSeparator: true,
				layout: newLayout,
				isBusyOnDragging: true,
			});
			setTimeout(() => {
				this.setState({ isBusyOnDragging: false });
			}, separatorsRefreshInterval);
		}
	}
	handleSeparatorMouseUp() {
		document.removeEventListener("mouseup", this.handleSeparatorMouseUp);
		document.removeEventListener("mousemove", this.handleSeparatorMouseMove);
		this.setState({
			draggingSeparator: false,
			draggingSeparatorIndex: undefined,
		});
	}

	render() {
		const {
			children,
			className,
			customCss,
			collapseSize,
			mockup,
			orientation,
			reverse,
		} = this.props;
		const { collapsedPanels, draggingSeparator, layout } = this.state;
		const styles = {
			horizontalLayout: {
				cursor: draggingSeparator ? "col-resize" : "default",
				display: "flex",
				flexDirection: reverse ? "row-reverse" : "row",
				height: "100%",
			},
			verticalLayout: {
				cursor: draggingSeparator ? "row-resize" : "default",
				display: "flex",
				flexDirection: reverse ? "column-reverse" : "column",
				height: "100%",
			},
		};
		let panelIndex = 0;
		const childrenWithProps = React.Children.map(children, (c, index) => {
			let child;
			if (c.type === Separator) {
				child = React.cloneElement(c, {
					disabled:
						(index - 1 === 0 && children[index - 1].props.fixed) ||
						(index + 1 === children.length - 1 &&
							children[index + 1].props.fixed) ||
						(collapsedPanels.includes(index - 1) ||
							collapsedPanels.includes(index + 1)),
					draggingSeparator,
					onSeparatorDoubleClick: this.onSeparatorDoubleClick,
					onSeparatorMouseDown: this.onSeparatorMouseDown,
					orientation,
					layoutIndex: panelIndex - 1,
				});
			} else if (c.type === Panel) {
				if (orientation === "vertical") {
					child = React.cloneElement(c, {
						collapseSize,
						collapsed: collapsedPanels.includes(panelIndex),
						collapsePanel: this.collapsePanel,
						draggingSeparator,
						flex: c.props.fixed ? "none" : layout[panelIndex],
						height: c.props.fixedHeight,
						layoutIndex: panelIndex,
						mockupStyle: mockup
							? { background: this.mockupColors[index] }
							: null,
						orientation,
					});
				} else {
					child = React.cloneElement(c, {
						collapseSize,
						collapsed: collapsedPanels.includes(panelIndex),
						collapsePanel: this.collapsePanel,
						draggingSeparator,
						width: c.props.fixedWidth,
						flex: c.props.fixed ? "none" : layout[panelIndex],
						layoutIndex: panelIndex,
						mockupStyle: mockup
							? { background: this.mockupColors[index] }
							: null,
						orientation,
					});
				}
				panelIndex += 1;
			} else if (c.type === Spacer) {
				child = React.cloneElement(c, {
					orientation,
				});
			} else {
				child = c;
			}
			return child;
		});
		return (
			<div
				ref={this.layout}
				style={Object.assign(
					{},
					orientation === "vertical"
						? styles.verticalLayout
						: styles.horizontalLayout,
					customCss
				)}
				className={className}
			>
				{childrenWithProps}
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	className: PropTypes.string,
	customCss: PropTypes.object,
	collapseSize: PropTypes.string,
	mockup: PropTypes.bool,
	orientation: PropTypes.string,
	reverse: PropTypes.bool,
};

Layout.defaultProps = {
	className: "",
	mockup: false,
	orientation: "horizontal",
	reverse: false,
	separatorsRefreshInterval: 0,
};
