import React, { Component } from "react";
import {
	HorizontalLayout,
	VerticalLayout,
	Panel,
	Separator,
	Spacer,
} from "../lib/components/Layout";
import { FormLayout, TableLayout } from "../lib/components/Layout/panel_layouts";

class App extends Component {
	render() {
		const styles = {
			collapseButton: {
				background: "azure",
				border: 0,
				float: "right",
				outline: "none",
			},
			exampleContent: {
				width: "100px",
				height: "100px",
				border: "1px solid gray",
				background: "lightgray",
				borderRadius: "4px",
			},
			tableTop: {
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				textAlign: "center",
			},
			tableBottom: {
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.2)",
				textAlign: "center",
			},
		};
		return (
			<HorizontalLayout mockup collapseSize="60px">
				<Panel
					proportion={1}
					sidebar
					collapsible
					collapseButtonStyle={styles.collapseButton}
				>
					<VerticalLayout mockup separatorsRefreshInterval={200}>
						<Panel fixed fixedHeight={100}>
							Top nested fixed panel
						</Panel>
						<Separator />
						<Panel proportion={2}>
							Center nested panel. The separator below has a refresh rate of
							200ms.
						</Panel>
						<Separator />
						<Panel minHeight={200} proportion={1} centered>
							<div style={styles.exampleContent}>Example centered content</div>
						</Panel>
					</VerticalLayout>
				</Panel>
				{/* If you double-click this separator it will give a size of 200px to the left panel */}
				<Separator defaultDblClickPos={200} />
				<Panel proportion={2}>
					<TableLayout
						topBarComponent={<div style={styles.tableTop}>This is a TableLayout...</div>}
						bottomTableComponent={
							<div style={styles.tableBottom}>...with topBarComponent and bottomTableComponent</div>
						}
					/>
				</Panel>
				{/* Use Spacer to add a blank space to the layout (it may help in positioning other elements) */}
				<Spacer size={50} />
				<Panel proportion={1}>
					{/* You can add a mockup prop for quick table prototyping */}
					<TableLayout mockup />
				</Panel>
				<Separator defaultDblClickPos={200} />
				<Panel proportion={1}>
					<FormLayout mockup />
				</Panel>
				<Separator />
				<Panel fixed fixedWidth={300} centered>
					Fixed panel. I can't be resized.
				</Panel>
			</HorizontalLayout>
		);
	}
}

export default App;
