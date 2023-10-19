const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    // Define your S3 bucket and object key
    const bucketName = 'your-bucket-name';
    const objectKey = 'your-object-key';

    try {
        // Use the getObject method to retrieve the S3 object
        const data = await s3.getObject({ Bucket: bucketName, Key: objectKey }).promise();
        
        // Access the object content
        const objectContent = data.Body.toString('utf-8');
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Object retrieved from S3', content: objectContent })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error retrieving object from S3', error: error.message })
        };
    }
};
