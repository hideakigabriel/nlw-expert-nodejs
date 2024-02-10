import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnePoll } from "./routes/vote-one-poll";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie, {
  secret: "polls-app-nlw-hds", // for cookies signature
  hook: "onRequest", // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnePoll);

app.listen({ port: 3333 }).then(() => {
  console.log(`HTTP server running!`);
});
