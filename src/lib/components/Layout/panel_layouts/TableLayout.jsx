import React from "react";
import PropTypes from "prop-types";
import { VerticalLayout, Panel } from "../";

const TableLayout = ({ bottomTableComponent, mockup, topBarComponent }) => {
	const styles = {
		buttonMockup: {
			display: "inline-block",
			width: "60px",
			height: "40px",
			background: "lightgray",
			borderRadius: "2px",
			margin: "0 10px 0 10px",
		},
		filterBarMockup: {
			display: "inline-block",
			textAlign: "right",
			whiteSpace: "nowrap",
			width: "100%",
		},
		inputMockup: {
			display: "inline-block",
			width: "50%",
			height: "40px",
			background: "lightgray",
			borderRadius: "5px",
		},
		tableMockup: {
			position: "absolute",
			width: "calc(100% - 10px)",
			height: "calc(100% - 10px)",
		},
		tableRowMockup: {
			height: "20px",
			background: "lightgray",
			margin: "4px",
		},
	};
	const filterBarMockup = (
		<div style={styles.filterBarMockup}>
			<div style={styles.inputMockup} />
			<div style={styles.buttonMockup} />
		</div>
	);
	let tableRowsMockup = [];
	let i = 0;
	for (i; i < 50; i++) {
		tableRowsMockup.push(<div key={i} style={styles.tableRowMockup} />);
	}
	const tableMockup = <div style={styles.tableMockup}>{tableRowsMockup}</div>;
	return (
		<VerticalLayout>
			<Panel fixed fixedHeight={80} centered>
				{mockup ? filterBarMockup : topBarComponent}
			</Panel>
			<Panel height={1} centered>
				{mockup ? tableMockup : bottomTableComponent}
			</Panel>
		</VerticalLayout>
	);
};

TableLayout.propTypes = {
	bottomTableComponent: PropTypes.element,
	mockup: PropTypes.bool,
	topBarComponent: PropTypes.element,
};

export default TableLayout;
