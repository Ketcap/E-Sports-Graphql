export default `
  type Platform {
    _id: ID!
    name: String!
    createdAt: String
    games: [Game]
  }
  type Query {
    platform(_id: ID!): Platform
    platforms: [Platform]
  }
`;
