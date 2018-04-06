import React, { Component } from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator,
  Spacer
} from "../lib/components/Layout";
import { View } from "../lib/components/View";
import {
  FormLayout,
  TableLayout
} from "../lib/components/Layout/panel_layouts";
import "./App.css";

class App extends Component {
  render() {
    const styles = {
      collapseButton: {
        background: "azure",
        border: 0,
        float: "right",
        outline: "none"
      },
      example: {
        width: "600px",
        height: "400px",
        border: "1px solid gray",
        borderRadius: "4px",
        margin: "10px 0px"
      },
      github: {
        width: "32px",
        height: "32px"
      },
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      tableTop: {
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        textAlign: "center"
      },
      tableBottom: {
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.2)",
        textAlign: "center"
      }
    };
    return (
      <div style={styles.main}>
        <br />
        <div style={{ width: "600px" }}>
          <h1 style={{ display: "inline-block" }}>nice-react-layout</h1>
          <a style={{ float: "right" }} href="https://github.com/ekros/nice-react-layout">
            <img style={styles.github} src="https://github.com/favicon.ico" alt="github" />
          </a>
          <p>A set of React components to create complex flexbox-based layouts without knowing what flexbox is.</p>
        </div>
        <br />
        <div className="pt-card">
          <h5>Basic example</h5>
          <pre className="prettyprint">
            {`
            <HorizontalLayout mockup>
              <Panel proportion={1} />
              <Panel proportion={3} />
            </HorizontalLayout>
            `}
          </pre>
          <div style={styles.example}>
            <HorizontalLayout mockup>
              <Panel proportion={1} />
              <Panel proportion={3} />
            </HorizontalLayout>
          </div>
        </div>
        <br />
        <div className="pt-card">
          <h5>Nested layouts</h5>
          <pre className="prettyprint">
            {`
              <VerticalLayout mockup>
                <Panel fixed fixedHeight={50} />
                <Panel>
                  <HorizontalLayout mockup>
                    <Panel />
                    <Panel proportion={3} />
                  </HorizontalLayout>
                </Panel>
              </VerticalLayout>
            `}
          </pre>
          <div style={styles.example}>
            <VerticalLayout mockup>
              <Panel fixed fixedHeight={50} />
              <Panel>
                <HorizontalLayout mockup>
                  <Panel />
                  <Panel proportion={3} />
                </HorizontalLayout>
              </Panel>
            </VerticalLayout>
          </div>
        </div>
        <br />
        <div className="pt-card">
          <h5>Separator</h5>
          <pre className="prettyprint">
            {`
              <VerticalLayout mockup>
                <Panel fixed fixedHeight={50} />
                <Panel>
                  <HorizontalLayout mockup>
                    <Panel />
                    <Separator />
                    <Panel />
                    <Panel fixed fixedWidth={100} />
                  </HorizontalLayout>
                </Panel>
              </VerticalLayout>
            `}
          </pre>
          <div style={styles.example}>
            <VerticalLayout mockup>
              <Panel fixed fixedHeight={50} />
              <Panel>
                <HorizontalLayout mockup>
                  <Panel />
                  <Separator />
                  <Panel />
                  <Panel fixed fixedWidth={100} />
                </HorizontalLayout>
              </Panel>
            </VerticalLayout>
          </div>
        </div>
        <br />
        <div className="pt-card">
          <h5>Collapsible sidebar</h5>
          <pre className="prettyprint">
            {`
              <VerticalLayout mockup>
                <Panel fixed fixedHeight={50} />
                <Panel>
                  <HorizontalLayout mockup>
                    <Panel
                      sidebar
                      collapsible
                      collapseButtonContent="<"
                      collapseButtonCollapsedContent=">"
                      collapseButtonStyle={{
                        background: "white",
                        border: "1px solid lightgray"
                      }}
                    />
                    <Separator />
                    <Panel proportion={3} />
                  </HorizontalLayout>
                </Panel>
              </VerticalLayout>
            `}
          </pre>
          <div style={styles.example}>
            <VerticalLayout mockup>
              <Panel fixed fixedHeight={50} />
              <Panel>
                <HorizontalLayout mockup>
                  <Panel
                    sidebar
                    collapsible
                    collapseButtonContent="<"
                    collapseButtonCollapsedContent=">"
                    collapseButtonStyle={{
                      background: "white",
                      border: "1px solid lightgray"
                    }}
                  />
                  <Separator />
                  <Panel proportion={3} />
                </HorizontalLayout>
              </Panel>
            </VerticalLayout>
          </div>
        </div>
        <br />
        <div className="pt-card">
          <h5>Multiple collapsible panels</h5>
          <pre className="prettyprint">
            {`
              <VerticalLayout mockup>
                <Panel fixed fixedHeight={50} />
                <Panel>
                  <HorizontalLayout mockup>
                    <Panel
                      sidebar
                      collapsible
                      collapseButtonContent="-"
                      collapseButtonCollapsedContent="+"
                      collapseButtonStyle={{
                        background: "white",
                        border: "1px solid lightgray"
                      }}
                    />
                    <Panel
                      sidebar
                      collapsible
                      collapseButtonContent="-"
                      collapseButtonCollapsedContent="+"
                      collapseButtonStyle={{
                        background: "white",
                        border: "1px solid lightgray"
                      }}
                    />
                    <Panel
                      sidebar
                      collapsible
                      collapseButtonContent="-"
                      collapseButtonCollapsedContent="+"
                      collapseButtonStyle={{
                        background: "white",
                        border: "1px solid lightgray"
                      }}
                    />
                  </HorizontalLayout>
                </Panel>
              </VerticalLayout>
            `}
          </pre>
          <div style={styles.example}>
            <VerticalLayout mockup>
              <Panel fixed fixedHeight={50} />
              <Panel>
                <HorizontalLayout mockup>
                  <Panel
                    sidebar
                    collapsible
                    collapseButtonContent="-"
                    collapseButtonCollapsedContent="+"
                    collapseButtonStyle={{
                      background: "white",
                      border: "1px solid lightgray"
                    }}
                  />
                  <Panel
                    sidebar
                    collapsible
                    collapseButtonContent="-"
                    collapseButtonCollapsedContent="+"
                    collapseButtonStyle={{
                      background: "white",
                      border: "1px solid lightgray"
                    }}
                  />
                  <Panel
                    sidebar
                    collapsible
                    collapseButtonContent="-"
                    collapseButtonCollapsedContent="+"
                    collapseButtonStyle={{
                      background: "white",
                      border: "1px solid lightgray"
                    }}
                  />
                </HorizontalLayout>
              </Panel>
            </VerticalLayout>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default App;
