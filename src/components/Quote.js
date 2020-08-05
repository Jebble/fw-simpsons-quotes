import React from "react";
import styled from "styled-components";

import { COLOR, BORDER, FONT, SPACING } from "../constants";

const StyledQuote = styled.div`
	background: ${COLOR.WHITE};
	border-radius: ${BORDER.RADIUS.S};
	flex: 1 1 50%;
	max-width: calc(50% - ${SPACING.XS});
	margin: ${SPACING.XS} 0;
	padding: ${SPACING.M};
	box-shadow: ${BORDER.SHADOW.M};

	display: flex;
	align-items: center;
	flex-direction: ${props => props.characterDirection === 'Left' ? 'row' : 'row-reverse'};

	p {
		flex: 1;
		font-weight: ${FONT.WEIGHT.MEDIUM};
		font-size: ${FONT.SIZE.M};
		line-height: 1.5em;
		&::selection {
			background: ${COLOR.ACCENT.PRIMARY};
			color: ${COLOR.BLACK};
		}
	}

	img {
		width: 25%;
		margin: 0 ${SPACING.S};
		user-select: none;
	}

	@media screen and (max-width: 768px) {
		flex: 1 1 100%;
		max-width: 100%;
		flex-direction: column;

		img {
			width: auto;
			height: 150px;
		}
	}
`;

const Quote = props => {
	return <StyledQuote {...props}>
		<img src={props.image} alt={props.character} />
		<p>{props.quote}</p>
	</StyledQuote>;
};

export default Quote;
