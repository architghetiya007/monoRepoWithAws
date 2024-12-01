"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someFunction = exports.handler = void 0;
const handler = async (event) => {
    const name = event.queryStringParameters?.name || "World";
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, ${name}` }),
    };
};
exports.handler = handler;
// Export a utility function for local testing.
const someFunction = () => {
    return "Hello from the Lambda function!";
};
exports.someFunction = someFunction;
