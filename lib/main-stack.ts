import * as cdk from "aws-cdk-lib";

import { VpcStack } from "./vpc-test";
import { SecurityGroupStack } from "./sg-test";

import { Construct } from "constructs";

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpcStack = new VpcStack(this, "MyVpcStack");
    const securityGroupStack = new SecurityGroupStack(
      this,
      "MySecurityGroupStack",
      vpcStack.vpc
    );
  }
}
