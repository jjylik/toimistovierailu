// Require the framework and instantiate it
const fastify = require("fastify")({ logger: false });

const vision = require("@google-cloud/vision");

const client = new vision.ImageAnnotatorClient();

const fetchLabels = async (imageBuffer) => {
  const [result] = await client.labelDetection({
    image: { content: imageBuffer}
  });
  return result.labelAnnotations
}

const fetchFaces = async (imageBuffer) => {
  const [result] = await client.faceDetection({
    image: { content: imageBuffer}
  });
  return result.faceAnnotations
}

fastify.post("/labels", async (request, reply) => {
  const labels = await fetchLabels(new Buffer(request.body.image.split(",")[1], "base64"))
  reply.send({ labels });
});

fastify.post("/faces", async (request, reply) => {
  const faces = await fetchFaces(new Buffer(request.body.image.split(",")[1], "base64"))
  reply.send({ faces });
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3002);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
