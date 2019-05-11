import Genre from "../../schemas/Genre/Genre";
import Game from "../../schemas/Game/Game";

export default {
  Query: {
    genre: async (root, { _id }) => await Genre.findById(_id),
    genres: async () => await Genre.find()
  },
  Genre: {
    games: async (root, args) => await Game.find({ genres: { $in: [root._id] } })
  }
};