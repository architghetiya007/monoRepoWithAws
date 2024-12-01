// import { someFunction } from "lambda-function";

// console.log("Hello from the Infrastructure package!");
// console.log(someFunction());
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
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

// Define an entry point for the CDK app
const app = new cdk.App();
new LambdaStack(app, "LambdaStack");
