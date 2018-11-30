import React from "react";
import PropTypes from "prop-types";
import { SizeMe } from "react-sizeme";

export default class Panel extends React.Component {
  static propTypes = {
    id: PropTypes.string, // internal use only
    centered: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    customCss: PropTypes.object,
    draggingSeparator: PropTypes.bool,
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
    layoutIndex: PropTypes.number,
    minHeight: PropTypes.number,
    minWidth: PropTypes.number,
    mockupStyle: PropTypes.object,
    proportion: PropTypes.number,
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
    proportion: 1,
    showSize: false
  };

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
      draggingSeparator,
      flex,
      height,
      minHeight,
      minWidth,
      mockupStyle,
      showSize,
      orientation,
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
            style={Object.assign(
              {},
              { transition: draggingSeparator ? "none" : "flex 0.3s" },
              orientation === "vertical"
                ? styles.verticalPanel
                : styles.horizontalPanel,
              centered ? styles.centered : null,
              columns ? { columnCount: columns } : null,
              customCss,
              collapsed ? styles.collapsedPanel : null,
              mockupStyle
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
            {children}
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
