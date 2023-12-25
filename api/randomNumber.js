let cachedNumber = getCachedNumber(); // 获取缓存的随机数
let lastGeneratedTime = getCachedTime(); // 获取缓存的时间

export default async function handler(req, res) {
  const currentTime = new Date().getTime();
  const oneHour = 3600000; // 1小时的毫秒数

  // 如果距上次生成时间已经过去了1小时，则生成新的随机数
  if (currentTime - lastGeneratedTime > oneHour) {
    cachedNumber = generateRandomNumber();
    lastGeneratedTime = currentTime;
    cacheNumber(cachedNumber);
    cacheTime(lastGeneratedTime);
  }

  res.setHeader('Cache-Control', 'no-store'); // 禁用缓存
  //res.status(200).json({ number: cachedNumber });
  res.status(200).send( cachedNumber );
}

function getCachedNumber() {
  // 从持久化存储（例如数据库）中获取缓存的随机数
  // 这里简化为直接生成一个随机数
  return generateRandomNumber();
}

function getCachedTime() {
  // 从持久化存储（例如数据库）中获取缓存的时间
  // 这里简化为返回当前时间
  return new Date().getTime();
}

function cacheNumber(number) {
  // 将随机数存储到持久化存储中
  // 这里简化为无操作
}

function cacheTime(time) {
  // 将时间存储到持久化存储中
  // 这里简化为无操作
}

function generateRandomNumber() {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return String(randomNumber).substring(0, 8);
}
