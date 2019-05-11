export default `
  type Game {
    _id: ID!
    name: String!
    release_date: String!
    genres: [Genre]
    company: String
    platforms: String
    createdAt: String!
    heroes:[Hero]
  }
  type Query {
    game(_id: ID!): Game
    games: [Game]
  }
`;