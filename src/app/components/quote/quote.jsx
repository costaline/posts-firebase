import React, { useEffect, useState } from "react";
import Quotes from "inspirational-quotes";
import PropTypes from "prop-types";
import styled from "styled-components";

const Blockquote = styled.blockquote`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }

  & cite {
    align-self: flex-end;

    font-size: 1.3rem;
  }
`;

const Quote = ({ refreshTimeoutSec }) => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    setQuote({ ...Quotes.getQuote() });

    getQuote();

    return () => clearInterval(quoteRefreshId);
  }, []);

  let quoteRefreshId;

  const getQuote = () => {
    quoteRefreshId = setInterval(() => {
      const currentQuote = Quotes.getQuote();

      setQuote({ ...currentQuote });
    }, refreshTimeoutSec * 10 ** 3);
  };

  return (
    <Blockquote>
      <p>{quote.text}</p>
      <cite>{quote.author}</cite>
    </Blockquote>
  );
};

Quote.propTypes = {
  refreshTimeoutSec: PropTypes.number.isRequired
};

export default Quote;
