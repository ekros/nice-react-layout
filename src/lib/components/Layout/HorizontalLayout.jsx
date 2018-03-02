import React from "react";
import Layout from "./Layout.jsx";

const HorizontalLayout = ({ ...props }) => {
	return <Layout {...props} orientation="horizontal" />;
};

export default HorizontalLayout;
