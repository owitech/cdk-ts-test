import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class VpcStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.vpc = new ec2.Vpc(this, "MyVpc", {
      ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/25"),
      maxAzs: 1,
      natGateways: 0,
    });

    cdk.Tags.of(this.vpc).add("Name", "vpc-test");
  }
}
