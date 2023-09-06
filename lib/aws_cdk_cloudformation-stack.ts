import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkCloudformationStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// Create an s3 bucket

		new CfnBucket(this, 'MyFirstL1Bucket', {
			lifecycleConfiguration: {
				rules: [
					{
						expirationInDays: 2,
						status: 'Enabled',
					},
				],
			},
		});

		new Bucket(this, 'MyFirstL2Bucket', {
			lifecycleRules: [
				{
					expiration: cdk.Duration.days(2),
				},
			],
		});
	}
}
