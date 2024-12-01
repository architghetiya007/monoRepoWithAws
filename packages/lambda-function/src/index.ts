import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import * as swaggerDocument from "./swagger.json";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const path = event.path;

  if (path === "/docs") {
    return {
      statusCode: 200,
      body: JSON.stringify(swaggerDocument),
      headers: { "Content-Type": "application/json" },
    };
  }
  const name = event.queryStringParameters?.name || "World";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}` }),
  };
};

// Export a utility function for local testing.
export const someFunction = () => {
  return "Hello from the Lambda function!";
};
