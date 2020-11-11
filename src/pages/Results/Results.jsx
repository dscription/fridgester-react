import React, { Component } from 'react';
import * as fridgeItemAPI from '../../services/fridgeItemService';
import styled from 'styled-components';
import RecipeResult from '../../components/ResultItem/ResultItem';

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
    const { generalSearchTerms: fridgeItems } = this.props.location.state;

    return (
      <>
        <Container>
          {results.map((result) => (
            <RecipeResult
              details={result}
              fridgeIngredients={fridgeItems}
            />
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
