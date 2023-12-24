let cachedNumber = generateRandomNumber(); // ��ʼ�����

export default async function handler(req, res) {
  const currentHour = new Date().getHours();

  // �����ǰʱ���������һ������������Ǳ�Сʱ���ɵģ�����������
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