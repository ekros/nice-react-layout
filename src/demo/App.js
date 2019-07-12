import React, { Component } from "react";
import {
  HorizontalLayout,
  VerticalLayout,
  Panel,
  Separator
} from "../lib/components/Layout";
import "./App.css";

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
        margin: "10px 0px",
        overflow: "hidden"
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
            A set of React components to create complex flexbox-based layouts
            without knowing what flexbox is.
          </p>
        </div>
        <br />
        <div className="pt-card">
          <h5>Basic example</h5>
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
                  <Header message={"Hello"} />
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
        <div className="pt-card">
          <h5>Panels with size (drag separators to see it)</h5>
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
        <div className="pt-card">
          <h5>Multi-column panel</h5>
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
        <div className="pt-card">
          <h5>Panels with render prop</h5>
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
        <div className="pt-card">
          <h5>Drag and drop panels</h5>
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
        <div className="pt-card">
          <h5>Drag and drop - 2</h5>
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
        <div style={{ width: "600px" }} className="pt-card">
          <h5>
            Custom panel components <b>(experimental)</b>
          </h5>
          <p>
            Instead of using the Panel component, you can use your own
            component.
          </p>
          <p>
            It will receive a niceReactLayoutProps prop with (almost) all you
            need to make it work as a normal panel.
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
                    <CustomPanel>
                      I'm a custom panel and I'm getting the
                      mockup background color as a prop.
                    </CustomPanel>
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
                <CustomPanel>I'm a custom panel and I'm getting the mockup background color as a prop.</CustomPanel>
                </HorizontalLayout>
              </Panel>
            </VerticalLayout>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
