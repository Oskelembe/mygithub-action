import boto3

s3 = boto3.client('s3')

def lambda_handler(event, context):
    # Define your S3 bucket and object details
    bucket_name = 'your-bucket-name'
    object_key = 'your-object-key'
    object_content = 'Hello, S3! This is the content of your object.'

    try:
        # Put the object into the S3 bucket
        s3.put_object(
            Bucket=bucket_name,
            Key=object_key,
            Body=object_content
        )

        return {
            'statusCode': 200,
            'body': 'Object successfully uploaded to S3.'
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': f'Error uploading object to S3: {str(e)}'
        }
