#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkCloudformationStack } from '../lib/aws_cdk_cloudformation-stack';

const app = new cdk.App();
new AwsCdkCloudformationStack(app, 'AwsCdkCloudformationStack', {});
