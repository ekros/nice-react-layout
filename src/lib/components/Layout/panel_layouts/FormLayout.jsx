import React from "react";
import PropTypes from "prop-types";
import { VerticalLayout, Panel } from "../";

const FormLayout = ({ bottomActionsComponent, mockup, topFormComponent }) => {
	const styles = {
		buttonMockup: {
			display: "inline-block",
			width: "60px",
			height: "40px",
			background: "lightgray",
			borderRadius: "2px",
			margin: "0 10px 0 10px",
			textAlign: "right",
		},
		formMockup: {
			display: "inline-block",
			textAlign: "right",
			whiteSpace: "nowrap",
			width: "100%",
		},
		inputMockup: {
			display: "block",
			height: "40px",
			background: "lightgray",
			borderRadius: "5px",
			margin: "5px",
		},
		actionsBarMockup: {
			position: "absolute",
			width: "calc(100% - 10px)",
			height: "calc(100% - 10px)",
			textAlign: "right",
		},
	};
	const formMockup = [];
	let i = 0;
	for (i; i < 30; i++) {
		formMockup.push(<div key={i} style={styles.inputMockup} />);
	}
	const actionsBarMockup = (
		<div style={styles.actionsBarMockup}>
			<div style={styles.buttonMockup} />
			<div style={styles.buttonMockup} />
		</div>
	);
	return (
		<VerticalLayout>
			<Panel height={1}>{mockup ? formMockup : topFormComponent}</Panel>
			<Panel fixed fixedHeight={60} centered>
				{mockup ? actionsBarMockup : bottomActionsComponent}
			</Panel>
		</VerticalLayout>
	);
};

FormLayout.propTypes = {
	bottomActionsComponent: PropTypes.element,
	mockup: PropTypes.bool,
	topFormComponent: PropTypes.element,
};

export default FormLayout;
