// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema.d";

const { Dish, Restaurant } = initSchema(schema);

export { Dish, Restaurant };
