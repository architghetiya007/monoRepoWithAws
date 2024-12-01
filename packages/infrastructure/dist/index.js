"use strict";
// import { someFunction } from "lambda-function";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LambdaStack = void 0;
// console.log("Hello from the Infrastructure package!");
// console.log(someFunction());
const cdk = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class LambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Define the Lambda function
        const lambdaFunction = new lambda.Function(this, "HelloLambda", {
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: "index.handler",
            code: lambda.Code.fromAsset("../lambda-function/dist"), // Path to compiled Lambda code
        });
        // Create an API Gateway to trigger the Lambda function
        new apigateway.LambdaRestApi(this, "HelloApi", {
            handler: lambdaFunction,
        });
    }
}
exports.LambdaStack = LambdaStack;
// Define an entry point for the CDK app
const app = new cdk.App();
new LambdaStack(app, "LambdaStack");
