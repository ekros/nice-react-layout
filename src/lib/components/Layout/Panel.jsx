import React from "react";
import PropTypes from "prop-types";
import { SizeMe } from "react-sizeme";

export default class Panel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.panel = React.createRef();
    this.lastDragX;
    this.lastDragY;
  }

  static propTypes = {
    id: PropTypes.string, // internal use only
    centered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    customCss: PropTypes.object,
    draggable: PropTypes.bool,
    draggingOver: PropTypes.func,
    draggingPanelIndex: PropTypes.number,
    draggingSeparator: PropTypes.bool,
    droppable: PropTypes.bool,
    collapsed: PropTypes.bool,
    collapsible: PropTypes.bool,
    collapseButtonClass: PropTypes.string,
    collapseSize: PropTypes.string,
    collapseButtonStyle: PropTypes.object,
    collapseButtonContent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    collapseButtonCollapsedContent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    collapsePanel: PropTypes.func,
    collapseSwitch: PropTypes.element,
    columns: PropTypes.number,
    // contentAlign: PropTypes.oneOf([
    //   "center",
    //   "top",
    //   "right",
    //   "bottom",
    //   "left",
    //   "top right",
    //   "bottom right",
    //   "bottom left",
    //   "top left"
    // ]),
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isDraggingOver: PropTypes.bool,
    layoutIndex: PropTypes.number,
    minHeight: PropTypes.number,
    minWidth: PropTypes.number,
    mockupStyle: PropTypes.object,
    order: PropTypes.number,
    proportion: PropTypes.number,
    render: PropTypes.func,
    startDragging: PropTypes.func,
    stopDragging: PropTypes.func,
    showSize: PropTypes.bool,
    sidebar: PropTypes.bool
  };

  static defaultProps = {
    id: "panel",
    centered: false,
    className: "",
    collapseSize: "30px",
    collapseButtonContent: "Collapse",
    collapseButtonCollapsedContent: "Extend",
    columns: undefined,
    draggable: false,
    droppable: false,
    isDraggingOver: false,
    proportion: 1,
    render: undefined,
    showSize: false
  };

  componentDidMount() {
    if (this.props.draggable) {
      setTimeout(() => {
        this.panel.current.addEventListener("mousedown", this.startDragging);
      }, 400);
    }
    if (this.props.droppable) {
      setTimeout(() => {
        this.panel.current.addEventListener("mousemove", this.draggingOver);
      }, 500);
    }
  }

  componentWillUnmount() {
    if (this.props.draggable) {
      this.panel.current.removeEventListener("mousedown", this.startDragging);
      this.panel.current.removeEventListener("mouseup", this.cancelDragging);
    }
    if (this.props.droppable) {
      this.panel.current.removeEventListener("mousemove", this.draggingOver);
    }
  }

  calculatePanelFlex = () => {
    const { sidebar, collapsed, collapsible, collapseSize } = this.props;
    let flex;
    if (sidebar && collapsible) {
      if (collapsed) {
        flex = collapseSize;
      } else {
        flex = this.calculatePanelLength();
      }
    } else {
      flex = this.calculatePanelLength();
    }
    return flex;
  };

  calculatePanelLength = () => this.props.proportion;

  // cancelDragging = ev => {
  //   let ghost = document.getElementById("panel-dragging-ghost");
  //   if (ghost) {
  //     document.body.removeChild(ghost);
  //   }
  //   // WORKAROUND: is there a second ghost??
  //   ghost = document.getElementById("panel-dragging-ghost");
  //   if (ghost) {
  //     document.body.removeChild(ghost);
  //   }
  //
  //   document.removeEventListener("mouseup", this.cancelDragging);
  //   // document.removeEventListener("dragend", this.stopDragging);
  //   this.props.stopDragging();
  // };

  draggingOver = ev => {
    if (
      this.props.draggingPanelIndex !== null &&
      this.props.draggingPanelIndex !== undefined
    ) {
      const dragEl = document.getElementById("panel-dragging-ghost");
      if (dragEl) {
        dragEl.style.top = `${ev.clientY + 10}px`;
        dragEl.style.left = `${ev.clientX + 10}px`;
        if (ev.clientX - this.lastDragX > 0) {
          dragEl.style.transform = "rotateZ(10deg)";
        } else if (ev.clientX - this.lastDragX < 0) {
          dragEl.style.transform = "rotateZ(-10deg)";
        } else if (ev.clientY - this.lastDragY > 0) {
          dragEl.style.transform = "rotateZ(-10deg)";
        } else if (ev.clientY - this.lastDragY < 0) {
          dragEl.style.transform = "rotateZ(10deg)";
        } else {
          dragEl.style.transform = "rotateZ(0deg)";
        }
        this.lastDragX = ev.clientX;
        this.lastDragY = ev.clientY;
      }
      const { draggingOver, layoutIndex } = this.props;
      draggingOver(layoutIndex);
    }
  };

  // onMouseMove = ev => {
  //   const dragEl = document.getElementById("panel-dragging-ghost");
  //   if (dragEl) {
  //     dragEl.style.top = `${ev.clientY + 10}px`;
  //     dragEl.style.left = `${ev.clientX + 10}px`;
  //   }
  // };

  startDragging = ev => {
    // clone the panel element
    const panelClone = this.panel.current.cloneNode(true);
    panelClone.id = "panel-dragging-ghost";
    panelClone.style.position = "fixed";
    panelClone.style.opacity = 0.5;
    panelClone.style.width = `${
      this.panel.current.getBoundingClientRect().width
    }px`;
    panelClone.style.height = `${
      this.panel.current.getBoundingClientRect().height
    }px`;
    panelClone.style.transition = "transform 0.2s";
    panelClone.style.transformOrigin = "0% 0%";
    panelClone.style.zIndex = 10;
    document.body.appendChild(panelClone);

    document.addEventListener("mouseup", this.stopDragging);
    const { layoutIndex, startDragging } = this.props;
    startDragging(layoutIndex);
  };

  stopDragging = ev => {
    let ghost = document.getElementById("panel-dragging-ghost");
    if (ghost) {
      document.body.removeChild(ghost);
    }
    // WORKAROUND: is there a second ghost??
    ghost = document.getElementById("panel-dragging-ghost");
    if (ghost) {
      document.body.removeChild(ghost);
    }

    document.removeEventListener("mouseup", this.stopDragging);
    this.props.stopDragging();
  };

  toggleCollapse = () => {
    const { collapsePanel, layoutIndex } = this.props;
    collapsePanel(layoutIndex);
  };

  render() {
    const {
      centered,
      children,
      className,
      customCss,
      collapsed,
      collapsible,
      collapseButtonClass,
      collapseButtonContent,
      collapseButtonCollapsedContent,
      collapseSize,
      collapseButtonStyle,
      collapseSwitch,
      columns,
      draggingPanelIndex,
      draggingSeparator,
      flex,
      height,
      isDraggingOver,
      minHeight,
      minWidth,
      mockupStyle,
      order,
      showSize,
      orientation,
      render,
      sidebar,
      width
    } = this.props;
    const styles = {
      sidebarActions: {
        height: "20px"
      },
      centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      horizontalPanel: {
        position: "relative",
        borderRight: sidebar ? "1px solid #445161" : "none",
        cursor: draggingSeparator ? "col-resize" : "default",
        flex:
          flex !== null && flex !== undefined
            ? flex
            : this.calculatePanelFlex(), // TODO: remove local calculation???
        minWidth: sidebar && collapsible && collapsed ? collapseSize : minWidth,
        overflowX: "auto",
        overflowY: "auto",
        width: width || "auto"
      },
      draggingPanel: {
        cursor: "grab"
      },
      isDraggingOver: {
        filter: "brightness(120%)"
      },
      panelSize: {
        position: "absolute",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "4px",
        color: "#222222",
        fontSize: "11px",
        right: "5px",
        bottom: "5px",
        width: "90px",
        height: "15px",
        textAlign: "center"
      },
      verticalPanel: {
        position: "relative",
        borderRight: sidebar ? "1px solid #445161" : "none",
        cursor: draggingSeparator ? "row-resize" : "default",
        flex:
          flex !== null && flex !== undefined
            ? flex
            : this.calculatePanelFlex(),
        height: height || "auto",
        minHeight:
          sidebar && collapsible && collapsed ? collapseSize : minHeight,
        overflowX: "hidden",
        overflowY: "auto"
      },
      collapsedPanel: {
        position: "relative",
        boxShadow: "1px 0px 4px black",
        flex: 0
      }
    };
    return (
      <SizeMe monitorHeight refreshRate={200}>
        {({ size }) => (
          <div
            ref={this.panel}
            style={Object.assign(
              {},
              {
                order,
                transition: draggingSeparator ? "none" : "flex 0.3s"
              },
              orientation === "vertical"
                ? styles.verticalPanel
                : styles.horizontalPanel,
              centered ? styles.centered : null,
              columns ? { columnCount: columns } : null,
              customCss,
              collapsed ? styles.collapsedPanel : null,
              mockupStyle,
              isDraggingOver ? styles.isDraggingOver : null,
              draggingPanelIndex !== null && draggingPanelIndex !== undefined
                ? styles.draggingPanel
                : null
            )}
            className={className}
          >
            {collapsible ? (
              <div
                style={Object.assign(
                  {},
                  styles.sidebarActions,
                  customCss && customCss.sidebarActions
                    ? customCss.sidebarActions
                    : null
                )}
              >
                {collapseSwitch || (
                  <button
                    style={collapseButtonStyle || { float: "right" }}
                    onClick={this.toggleCollapse}
                    className={collapseButtonClass}
                  >
                    {!collapsed
                      ? collapseButtonContent
                      : collapseButtonCollapsedContent}
                  </button>
                )}
              </div>
            ) : null}
            {render ? render({ size }) : children}
            {draggingSeparator && showSize ? (
              <div style={styles.panelSize}>
                {size
                  ? `${Math.floor(size.width)} x ${Math.floor(size.height)}`
                  : null}
              </div>
            ) : null}
          </div>
        )}
      </SizeMe>
    );
  }
}
