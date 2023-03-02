import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";

require("dotenv").config();

import { Construct } from "constructs";

export class SecurityGroupStack extends cdk.Stack {
  public readonly securityGroup: ec2.SecurityGroup;

  constructor(scope: Construct, id: string, vpc: ec2.Vpc) {
    super(scope, id);

    this.securityGroup = new ec2.SecurityGroup(this, "MySecurityGroup", {
      vpc,
      allowAllOutbound: true,
      securityGroupName: "MySecurityGroup",
    });

    this.securityGroup.addIngressRule(
      ec2.Peer.ipv4(`${process.env.MY_IP}`),
      ec2.Port.tcp(22),
      "Allow ssh access from MyIp"
    );

    cdk.Tags.of(this.securityGroup).add("Name", "sg-test-public");
  }
}
