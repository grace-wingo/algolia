
const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  '5E9I8BHF1S',
  'acad53e5530357dc1dad743a362cb623'
);

const search = instantsearch({
  indexName: 'dev_movies',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search musicals by movie title, year or score and see corresponding reviews"
  }),
  instantsearch.widgets.hits({
    container: '#hits-movies-search',
    templates: {
      item: (hit, { html, components }) =>        
        html`
        <article>
            <div>
            <a href=${hit.movieURL}>
            <h1>${components.Highlight({ hit, attribute: 'movieTitle' })}</h1></a>
            <p> year: ${components.Highlight({ hit, attribute: 'movieYear' })}</p>
            <p>audience score: ${components.Highlight({ hit, attribute: 'audience_score' })}</p>
            <p>critic score: ${components.Highlight({ hit, attribute: 'critic_score' })}</p>
          </div>
        </article>
      `,
      empty(results, { html }) {
        return html`No movie results found`;
      },
    },
  }),
  instantsearch.widgets
  .index({ indexName: 'dev_review' })
  .addWidgets([
    instantsearch.widgets.hits({
      container: '#hits-movies-review-search',
      templates: {
        item: (hit, { html, components }) => 
        html 
        `<article>
            <div>
            <p> critic name: ${components.Highlight({ hit, attribute: 'criticName' })}</p>
            <p> quote: "${components.Highlight({ hit, attribute: 'quote' })}"</p>
            <p>date: ${components.Highlight({ hit, attribute: 'creationDate' })}</p>
            <p>score sentiment: ${components.Highlight({ hit, attribute: 'scoreSentiment' })}</p>
            <p>publication name: ${hit.publicationName}</p>
            </div>
        </article>`
      },
      empty(results, { html }) {
        return html`No critics review results found`;
      },
    }),
  ]),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.refinementList({
    container: '#range-input',
    attribute: 'critic_score',
    showMore: true,
  }),
]);



search.start();
