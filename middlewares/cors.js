const allowedCors = [
    'http://localhost:4000',
    'http://80.93.180.116'
  ];
  
  const cors = (req, res, next) => {
    const { origin } = req.headers;
    const { method } = req;
    const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
    const requestHeaders = req.headers['access-control-request-headers'];
  
    if (allowedCors.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Credentials', 'true');
    }
  
    if (method === 'OPTIONS') {
      // разрешаем кросс-доменные запросы любых типов (по умолчанию)
      res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
      // разрешаем кросс-доменные запросы с заголовками исходного запроса
      res.header('Access-Control-Allow-Headers', requestHeaders);
      return res.end();
    }
  
    return next();
  };
  
  module.exports = cors;