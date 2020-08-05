import React, { useState } from "react";
import styled from "styled-components";
import fetchQuotes from "../fetchQuotes";

import Button from "./Button";
import Header from "./Header";
import Loader from "./Loader";
import ScreenReaderText from "./ScreenReaderText";
import Quote from "./Quote";
import { CONTENT_WIDTH, SPACING } from "../constants";

const StyledContentWrapper = styled.div`
    margin: 0 auto;
    max-width: ${CONTENT_WIDTH};
    padding: ${SPACING.L};
`;

const StyledQuotesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: ${SPACING.M};
`;

const App = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(false);

    const onButtonClick = () => {
        setLoading(true);
        fetchQuotes()
        .then( result => {
            setLoading(false);
            setQuotes(result.data.concat(quotes));
        });
    }

    return (<>
        <Header />

        <StyledContentWrapper>
            <Button
                onClick={onButtonClick}
                disabled={loading}
            >
                {loading ? <Loader/> : 'Load quotes'}
            </Button>

            <StyledQuotesWrapper
                aria-busy={loading}
            >
                {loading && <ScreenReaderText>Loading</ScreenReaderText>}
                {quotes.map( (quote, idx) => {
                    return <Quote
                        key={idx}
                        {...quote}
                    />;
                })}
            </StyledQuotesWrapper>
        </StyledContentWrapper>
    </>);
};

export default App;
