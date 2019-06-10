import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import SearchAnimeView from '../../components/SearchAnime';
import { SearchAnimeQuery } from '../../grahql/quries.js';

class SearchAnime extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    const { SearchAnimeQuery, navigation } = this.props;
    return <SearchAnimeView SearchAnimeQuery={SearchAnimeQuery} navigation={navigation} />
  }
}

export default graphql(SearchAnimeQuery, {
  name: 'SearchAnimeQuery',
  options: () => ({
    variables: {
      page: 1,
      perPage: 6,
      search: 'a',
    },
  })
})(SearchAnime);