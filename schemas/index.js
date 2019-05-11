import { mergeTypes } from "merge-graphql-schemas";

import Game from "./Game";
import Genre from "./Genre";
import Hero from "./Hero";

const typeDefs = [Game, Genre, Hero];

export default mergeTypes(typeDefs, { all: true });