#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Package the application
echo "Creating deployment package..."
zip -r build.zip . -x "*.git*" "node_modules/*"

# Set the certificate ARN
CERTIFICATE_ARN="arn:aws:acm:us-west-2:982534393775:certificate/c2cbf58b-95b2-485a-ae02-96839adc3602"

# Deploy CloudFormation stack
echo "Deploying CloudFormation stack..."
aws cloudformation deploy \
  --template-file cloudformation.yaml \
  --stack-name artist-portfolio-stack \
  --parameter-overrides \
    EnvironmentName=production \
    DomainName=joncaraveo.com \
    CertificateArn=$CERTIFICATE_ARN \
  --capabilities CAPABILITY_IAM \
  --region us-west-2

# Upload the application package to S3
echo "Uploading application package..."
aws s3 cp build.zip s3://elasticbeanstalk-us-west-2-982534393775/

# Clean up
echo "Cleaning up..."
rm build.zip

echo "Deployment complete! Please check the AWS Console for stack status." 