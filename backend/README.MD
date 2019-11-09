# GCP Cloud vision API proxy
Call GCP Cloud vision label and face detection APIs
[https://cloud.google.com/vision/docs/quickstarts](https://cloud.google.com/vision/docs/quickstarts)

## Usage

### Set service account file environment variable
Linux/Mac```export GOOGLE_APPLICATION_CREDENTIALS="[PATH_TO_FILE]"```
Windows: ```set GOOGLE_APPLICATION_CREDENTIALS=[PATH_TO_FILE]```

### Using YARN
1. ```yarn install ```
3. ```yarn start```
### Using NPM
1. ```npm install ```
2. ```npm start```

## API
``````
curl -d '{"image":"[base64 encoded image]"}' -H "Content-Type: application/json" -X POST http://localhost:3002/labels
``````

``````
curl -d '{"image":"[base64 encoded image]"}' -H "Content-Type: application/json" -X POST http://localhost:3002/faces
``````
  
