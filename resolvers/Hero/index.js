import Hero from '../../schemas/Hero/Hero';
import Game from '../../schemas/Game/Game';

export default {
  Query: {
    hero: async (root, { _id }) => await Hero.findById(_id),
    heroes: async () => await Hero.find(),
  },
  Hero: {
    game: async (root, args) => await Game.findById(root.game),
  },
};
