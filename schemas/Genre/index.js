export default `
  type Genre {
    _id: ID!
    name: String!
    short_name: String!
    createdAt: String!
    games: [Game]
  }
  type Query {
    genre(_id: ID!): Genre
    genres: [Genre]
  }
`;