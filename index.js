const dotenv = require('dotenv');
import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import graphql from './graphql';

dotenv.config();

const server = new ApolloServer({ schema: graphql });

const app = express();
server.applyMiddleware({ app });

const init = async () => {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    console.log(`${!!process.env.MONGO_URL}`);
  });
};

init();
