import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js/dist/instantsearch.production.min';

import '@algolia/autocomplete-theme-classic';

declare global {
  interface Window {
    algoliasearch: typeof algoliasearch;
    instantsearch: typeof instantsearch;
  }
}
