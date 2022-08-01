#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { HelloworldStack } from '../lib/helloworld-stack';

const app = new cdk.App();
new HelloworldStack(app, 'HelloworldStack');
