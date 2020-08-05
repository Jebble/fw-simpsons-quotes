import React from "react";
import styled from "styled-components";

const StyledScreenReaderText = styled.div`
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	height: 1px;
	width: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
`;

const ScreenReaderText = props => {
	return <StyledScreenReaderText>{props.children}</StyledScreenReaderText>
};

export default ScreenReaderText;
