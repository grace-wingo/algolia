# Best Musicals of All Time (according to 🍅 Rotten Tomatoes) instantsearch-app

_This project was generated with [create-instantsearch-app](https://github.com/algolia/instantsearch/tree/master/packages/create-instantsearch-app) by [Algolia](https://algolia.com)._

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm start
```

Alternatively, you may use [Yarn](https://http://yarnpkg.com/):

```sh
yarn
yarn start
```

Open http://localhost:3000 to see the app!

About the project:

Outline: This is an application for everyone, especially lovers of musicals will appreciate this app. This application allows users to search and obtain information such as rotten tomatoes critic and audience score, user reviews, and other data on the top 50 musicals of all time. There are two separate datasets that I used from Kaggle [source](https://www.kaggle.com/datasets/bwandowando/rotten-tomatoes-best-musicals-of-all-time?select=user_reviews.csv). I’m using two indices: dev_movies and dev_reviews to enhance the search experience by providing the user with the critic and audience score as well as a list of quotes by critics pertaining to the query. The application includes the ability to filter by critic score, which allows users ease of finding musicals based on higher or lower score. 

Intended to accomplish: I wanted to accomplish giving users the ability to look up a musical of their choice by title, year, or score, and to find critics reviews that associated with that musical. I wanted this app to provide an easy way for users to read reviews and see user and critics scores of the top 50 musicals (according to Rotten Tomatoes), all in one place. The critic quote, critic name, date, and publication source are intended to give users further context on the musical to improve their selection and decision making. 

Feedback: I love the user interface of the Algolia dashboard and find it incredibly easy to use. It’s very easy to use, setup, and configure settings and relevance. The integration with React made development easy. The documentation was helpful and clear, however, a few things could improve the experience: more examples of customization. For example, I wanted collate results from two different indexes so that I get the results from the single query in a single hit. I had difficulty finding out how to do that in the docs. Some code samples of how this can be implemented would be useful.
