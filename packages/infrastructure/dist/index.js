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
    const lambdaFunction = new lambda.Function(this, "HelloLambda", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("../lambda-function/dist"),
    });
    new apigateway.LambdaRestApi(this, "HelloApi", {
      handler: lambdaFunction,
    });
  }
}
exports.LambdaStack = LambdaStack;
const app = new cdk.App();
new LambdaStack(app, "LambdaStack");
