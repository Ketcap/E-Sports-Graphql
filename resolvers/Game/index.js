import Game from "../../schemas/Game/Game";
import Genre from "../../schemas/Genre/Genre";
import Hero from "../../schemas/Hero/Hero";

export default {
  Query: {
    game: async (root, { _id }) => await Game.findById(_id),
    games: async () => await Game.find()
  },
  Game: {
    genres: async (root, args) => await Genre.find({
      _id: { "$in": root.genres }
    }),
    heroes: async (root, args) => await Hero.find({
      game: root._id
    })
  }
};