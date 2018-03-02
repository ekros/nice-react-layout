import React from "react";
import Layout from "./Layout.jsx";

const VerticalLayout = ({ ...props }) => {
	return <Layout {...props} orientation="vertical" />;
};

export default VerticalLayout;
