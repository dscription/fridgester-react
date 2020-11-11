import React, { Component } from 'react';
import ResultItem from '../../components/ResultItem/ResultItem';
import * as fridgeItemAPI from '../../services/fridgeItemService';
import styled from 'styled-components';

class Results extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const results = await fridgeItemAPI.searchApi(
      this.props.location.state.generalSearchTerms
    );
    this.setState({ results: results });
  }

  render() {
    const { results } = this.state;

    return (
      <>
        <Container>
          {results.map((result) => (
            <ResultItem details={result} />
          ))}
        </Container>
      </>
    );
  }
}

export default Results;

const Container = styled.div`
  border: solid black 1px;
  padding: 5px;
`;
