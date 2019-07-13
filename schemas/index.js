import { mergeTypes } from 'merge-graphql-schemas';
import Game from './Game';
import Genre from './Genre';
import Hero from './Hero';
import Platform from './Platform';


const typeDefs = [Game, Genre, Hero, Platform];

export default mergeTypes(typeDefs, { all: true });
