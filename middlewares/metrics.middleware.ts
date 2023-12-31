const promMid = require("express-prometheus-middleware");

exports.metricsMiddleware = promMid({
  metricsPath: "/metrics",
  collectDefaultMetrics: true,
  collectGCMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
});
