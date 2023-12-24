let cachedNumber = generateRandomNumber(); // 初始随机数

export default async function handler(req, res) {
  const currentHour = new Date().getHours();

  // 如果当前时间是整点且缓存的随机数不是本小时生成的，则更新随机数
  if (new Date().getMinutes() === 0 && cachedNumber.generatedHour !== currentHour) {
    cachedNumber = {
      number: generateRandomNumber(),
      generatedHour: currentHour,
    };
  }

  res.status(200).json({ number: cachedNumber.number });
}

function generateRandomNumber() {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return String(randomNumber).substring(0, 8);
}