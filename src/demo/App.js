import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator
} from "../lib/components/Layout";
import "./App.css";
import version from "../version.json";

const mockupContent = (
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
    lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
    dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
    dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
    feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
    congue nihil imperdiet doming id quod mazim placerat facer possim assum.
  </p>
);

const catUrls = [
  `http://placekitten.com/${300 + Math.floor(Math.random() * 5)}/${200 +
    Math.floor(Math.random() * 5)}`,
  `http://placekitten.com/${300 + Math.floor(Math.random() * 5)}/${200 +
    Math.floor(Math.random() * 5)}`,
  `http://placekitten.com/${300 + Math.floor(Math.random() * 5)}/${200 +
    Math.floor(Math.random() * 5)}`,
  `http://placekitten.com/${300 + Math.floor(Math.random() * 5)}/${200 +
    Math.floor(Math.random() * 5)}`,
  `http://placekitten.com/${300 + Math.floor(Math.random() * 5)}/${200 +
    Math.floor(Math.random() * 5)}`,
  `http://placekitten.com/${300 + Math.floor(Math.random() * 5)}/${200 +
    Math.floor(Math.random() * 5)}`
];

const catPanel = (proportion, imageIndex) => (
  <Panel
    customCss={{
      backgroundImage: `url('${catUrls[imageIndex]}')`,
      backgroundPosition: "center",
      flex: "0 0 200px",
      flexWrap: "wrap",
      height: "200px",
      overflow: "hidden"
    }}
    draggable
    droppable
    proportion={proportion}
    render={({ size }) => <div style={{ width: "100%", height: "100%" }} />}
  />
);

const Header = ({ backgroundColor, message, niceReactLayoutProps }) => (
  <div style={{ backgroundColor, flex: "0 0 40px" }}>{message}</div>
);

const CustomPanel = ({ children, niceReactLayoutProps: { mockupStyle } }) => (
  <div
    style={{
      backgroundColor: (mockupStyle && mockupStyle.background) || "black",
      flex: "3"
    }}
  >
    {children}
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPanels: [
        {
          proportion: 1
        },
        { proportion: 2 }
      ]
    };
  }
  addSmallPanel = () => {
    this.setState({
      dynamicPanels: this.state.dynamicPanels.concat({ proportion: 1 })
    });
  };

  addBigPanel = () => {
    this.setState({
      dynamicPanels: this.state.dynamicPanels.concat({ proportion: 2 })
    });
  };

  removePanel = () => {
    this.setState({
      dynamicPanels: this.state.dynamicPanels.slice(
        0,
        this.state.dynamicPanels.length - 1
      )
    });
  };
  render() {
    const { dynamicPanels } = this.state;
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
      app: {
        display: "flex",
        alignItems: "flex-start"
      },
      main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px"
      },
      navList: {
        listStyle: "none"
      },
      scrollSpy: {
        position: "sticky",
        right: "0px",
        top: "0px",
        width: "225px",
        height: "300px"
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
      <div style={styles.app}>
        <div style={styles.scrollSpy}>
          <ScrollspyNav
            scrollTargetIds={[
              "basic",
              "nested-layouts",
              "separator",
              "panels-with-size",
              "collapsible-sidebar",
              "multiple-collapsible-panels",
              "multi-column-panel",
              "render-prop",
              "drag-and-drop",
              "dynamic-panels",
              "custom-panels"
            ]}
            offset={100}
            activeNavClass="is-active"
            scrollDuration="500"
            headerBackground="true"
          >
            <ul style={styles.navList}>
              <li>
                <a href="#basic">Basic example</a>
              </li>
              <li>
                <a href="#nested-layouts">Nested layouts</a>
              </li>
              <li>
                <a href="#separator">Separator</a>
              </li>
              <li>
                <a href="#panels-with-size">Panels with size</a>
              </li>
              <li>
                <a href="#collapsible-sidebar">Collapsible sidebar</a>
              </li>
              <li>
                <a href="#multiple-collapsible-panels">
                  Multiple collapsible panels
                </a>
              </li>
              <li>
                <a href="#multi-column-panel">Multi-column panel</a>
              </li>
              <li>
                <a href="#render-prop">Panels with render prop</a>
              </li>
              <li>
                <a href="#drag-and-drop">Drag and drop panels</a>
              </li>
              <li>
                <a href="#dynamic-panels">Dynamic panels</a>
              </li>
              <li>
                <a href="#custom-panels">Custom panels</a>
              </li>
            </ul>
          </ScrollspyNav>
        </div>
        <div style={styles.main}>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              width: "600px"
            }}
          >
            <div style={{ width: "600px" }}>
              <img src="./logo.png" />
              <h1 style={{ display: "inline-block", marginLeft: "10px" }}>
                nice-react-layout
                <small style={{ marginLeft: "20px" }}>{version.number}</small>
              </h1>
              <a
                style={{ float: "right" }}
                href="https://github.com/ekros/nice-react-layout"
              >
                <img
                  style={styles.github}
                  src="https://github.com/favicon.ico"
                  alt="github"
                />
              </a>
              <p>
                A set of React components to create complex flexbox-based
                layouts without knowing what flexbox is.
              </p>
            </div>
            <br />
            <div id="basic" className="pt-card">
              <h4>Basic example</h4>
              <pre className="prettyprint">
                {`
  <HorizontalLayout mockup>
    <Panel proportion={1} />
    <Panel proportion={3}>Lorem ipsum...</Panel>
  </HorizontalLayout>
                  `}
              </pre>
              <div style={styles.example}>
                <HorizontalLayout mockup>
                  <Panel proportion={1} />
                  <Panel proportion={3}>
                    {mockupContent}
                    {mockupContent}
                    {mockupContent}
                  </Panel>
                </HorizontalLayout>
              </div>
            </div>
            <br />
            <div id="nested-layouts" className="pt-card">
              <h4>Nested layouts</h4>
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
            <div id="separator" className="pt-card">
              <h4>Separator</h4>
              <h6>Horizontal</h6>
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
              <h6>Vertical</h6>
              <pre className="prettyprint">
                {`
  <VerticalLayout mockup>
    <Panel fixed fixedHeight={50} />
    <Panel>
      <VerticalLayout mockup>
        <Panel />
        <Separator />
        <Panel />
        <Panel fixed fixedHeight={100} />
      </VerticalLayout>
    </Panel>
  </VerticalLayout>
                        `}
              </pre>
              <div style={styles.example}>
                <VerticalLayout mockup>
                  <Panel fixed fixedHeight={50} />
                  <Panel>
                    <VerticalLayout mockup>
                      <Panel />
                      <Separator />
                      <Panel />
                      <Panel fixed fixedHeight={100} />
                    </VerticalLayout>
                  </Panel>
                </VerticalLayout>
              </div>
            </div>
            <br />
            <div id="panels-with-size" className="pt-card">
              <h4>Panels with size (drag separators to see it)</h4>
              <pre className="prettyprint">
                {`
  <VerticalLayout mockup>
    <Panel fixed fixedHeight={50} />
    <Panel>
      <HorizontalLayout mockup>
        <Panel>
          <VerticalLayout mockup>
            <Panel showSize />
            <Separator />
            <Panel showSize />
          </VerticalLayout>
        </Panel>
        <Separator />
        <Panel showSize />
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
                      <Panel>
                        <VerticalLayout mockup>
                          <Panel showSize />
                          <Separator />
                          <Panel showSize />
                        </VerticalLayout>
                      </Panel>
                      <Separator />
                      <Panel showSize />
                      <Panel fixed fixedWidth={100} />
                    </HorizontalLayout>
                  </Panel>
                </VerticalLayout>
              </div>
            </div>
            <br />
            <div id="collapsible-sidebar" className="pt-card">
              <h4>Collapsible sidebar</h4>
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
            <div id="multiple-collapsible-panels" className="pt-card">
              <h4>Multiple collapsible panels</h4>
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
            <div id="multi-column-panel" className="pt-card">
              <h4>Multi-column panel</h4>
              Note you can pass a custom style using the customCss prop
              <pre className="prettyprint">
                {`
  <VerticalLayout mockup>
    <Panel fixed fixedHeight={50} />
    <Panel>
      <HorizontalLayout mockup>
        <Panel />
        <Separator />
        <Panel
          columns={2}
          customCss={{
            columnRuleStyle: 'solid',
            columnRule: '2px solid gray' }}>
            Lorem ipsum...
          </Panel>
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
                      <Panel
                        columns={2}
                        customCss={{
                          columnRuleStyle: "solid",
                          columnRule: "2px solid gray"
                        }}
                      >
                        {mockupContent}
                      </Panel>
                    </HorizontalLayout>
                  </Panel>
                </VerticalLayout>
              </div>
            </div>
            <br />
            <div id="render-prop" className="pt-card">
              <h4>Panels with render prop</h4>
              In this example, we use the panel size to change its background
              <pre className="prettyprint">
                {`
  <VerticalLayout mockup>
    <Panel fixed fixedHeight={50} />
    <Panel>
      <HorizontalLayout mockup>
        <Panel>
          <VerticalLayout mockup>
            <Panel
              render={({ size }) => (
                <div
                  style={{
                    position: "absolute",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    lineHeight: \`\${size.height}px\`,
                    background: \`rgb(0, \${size.width /
                      4}, \${size.height / 4})\`,
                      textAlign: "center"
                    }}
                    >
                    Resize me
                  </div>
                )}
                />
              <Separator />
              <Panel />
            </VerticalLayout>
          </Panel>
          <Separator />
          <Panel />
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
                      <Panel>
                        <VerticalLayout mockup>
                          <Panel
                            render={({ size }) => (
                              <div
                                style={{
                                  position: "absolute",
                                  color: "white",
                                  width: "100%",
                                  height: "100%",
                                  lineHeight: `${size.height}px`,
                                  background: `rgb(0, ${size.width /
                                    4}, ${size.height / 4})`,
                                  textAlign: "center"
                                }}
                              >
                                Resize me
                              </div>
                            )}
                          />
                          <Separator />
                          <Panel />
                        </VerticalLayout>
                      </Panel>
                      <Separator />
                      <Panel />
                    </HorizontalLayout>
                  </Panel>
                </VerticalLayout>
              </div>
            </div>
            <br />
            <div id="drag-and-drop" className="pt-card">
              <h4>Drag and drop panels</h4>
              Note: only works on panels in the same layout
              <pre className="prettyprint">
                {`
  <HorizontalLayout
    customCss={{
      width: "600px",
      overflow: "hidden",
      flexWrap: "wrap"
    }}
    >
    <Panel
      customCss={{
        backgroundImage: url(http://placekitten.com/301/202),
        backgroundPosition: "center",
        flex: "0 0 200px",
        flexWrap: "wrap",
        height: "200px",
        overflow: "hidden"
      }}
      draggable
      droppable
      proportion={proportion}
      render={({ size }) => (
        <div style={{ width: "100%", height: "100%" }} />
      )}
      />
    ...
  </HorizontalLayout>
                                          `}
              </pre>
              <h6>
                Images provided by{" "}
                <a
                  href="http://placekitten.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  placekitten
                </a>
              </h6>
              <div style={styles.example}>
                <HorizontalLayout
                  customCss={{
                    width: "600px",
                    overflow: "hidden",
                    flexWrap: "wrap"
                  }}
                >
                  {catPanel(0, 0)}
                  {catPanel(0, 1)}
                  {catPanel(0, 2)}
                  {catPanel(0, 3)}
                  {catPanel(0, 4)}
                  {catPanel(0, 5)}
                </HorizontalLayout>
              </div>
            </div>
            <br />
            <div id="dynamic-panels" className="pt-card">
              <h4>Drag and drop - 2</h4>
              <pre className="prettyprint">
                {`
  <HorizontalLayout
    mockup
    customCss={{
      width: "600px",
      overflow: "hidden",
      flexWrap: "wrap"
    }}
    >
    <Panel draggable droppable centered>
      Drag and drop!
    </Panel>
    <Panel draggable droppable centered>
      Drag and drop!
    </Panel>
    <Panel proportion={2} draggable centered>
      Only drag
    </Panel>
    <Panel droppable centered>
      Only drop
    </Panel>
  </HorizontalLayout>
                                            `}
              </pre>
              <div style={styles.example}>
                <HorizontalLayout
                  mockup
                  customCss={{
                    width: "600px",
                    overflow: "hidden",
                    flexWrap: "wrap"
                  }}
                >
                  <Panel draggable droppable centered>
                    Drag and drop!
                  </Panel>
                  <Panel draggable droppable centered>
                    Drag and drop!
                  </Panel>
                  <Panel proportion={2} draggable centered>
                    Only drag
                  </Panel>
                  <Panel droppable centered>
                    Only drop
                  </Panel>
                </HorizontalLayout>
              </div>
            </div>
            <div className="pt-card">
              <h4>Dynamic panels</h4>
              <button onClick={this.addSmallPanel}>Add SMALL panel</button>
              <button onClick={this.addBigPanel}>Add BIG panel</button>
              <button onClick={this.removePanel}>Remove panel</button>
              <div style={styles.example}>
                <HorizontalLayout
                  mockup
                  customCss={{
                    width: "600px",
                    overflow: "hidden",
                    flexWrap: "wrap"
                  }}
                >
                  {dynamicPanels &&
                    dynamicPanels.map((p, index) => (
                      <Panel
                        key={index}
                        proportion={(p && p.proportion) || undefined}
                        draggable
                        droppable
                      />
                    ))}
                </HorizontalLayout>
              </div>
            </div>
            <div id="custom-panels" className="pt-card">
              <h4>
                Custom panel components <b>(EXPERIMENTAL)</b>
              </h4>
              <p>
                Instead of using the Panel component, you can use your own
                component (<b>Header</b> and <b>CustomPanel</b> are
                user-created)
              </p>
              <p>
                It will receive a niceReactLayoutProps prop with (almost) all
                you need to make it work as a normal panel.
              </p>
              <pre className="prettyprint">
                {`
  <VerticalLayout mockup>
    <Header
      backgroundColor="crimson"
      message={"I'm a custom header"}
    />
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
      <CustomPanel>I'm a custom panel and I'm getting the mockup
        background color as a prop.</CustomPanel>
      </HorizontalLayout>
    </Panel>
  </VerticalLayout>
       `}
              </pre>
              <div style={styles.example}>
                <VerticalLayout mockup>
                  <Header
                    backgroundColor="crimson"
                    message={"I'm a custom header"}
                  />
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
                      <CustomPanel>
                        I'm a custom panel and I'm getting the mockup background
                        color as a prop.
                      </CustomPanel>
                    </HorizontalLayout>
                  </Panel>
                </VerticalLayout>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
