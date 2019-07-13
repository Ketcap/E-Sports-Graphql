import Game from '../../schemas/Game/Game';
import Platform from '../../schemas/Platform/Platform';

export default {
  Query: {
    platform: async (root, { _id }) => await Platform.findById(_id),
    platforms: async () => await Platform.find(),
  },
  Platform: {
    games: async (root, args) => await Game.find({
      platforms: { '$in': [root._id] },
    }),
  },
};
