export default `
  type Hero {
    _id: ID!
    name: String!
    image: String
    createdAt: String
    game: Game!
  }
  type Query {
    hero(_id: ID!): Hero
    heroes: [Hero]
  }
`;
