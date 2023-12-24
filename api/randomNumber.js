let cachedNumber = getCachedNumber(); // ��ȡ����������
let lastGeneratedTime = getCachedTime(); // ��ȡ�����ʱ��

export default async function handler(req, res) {
  const currentTime = new Date().getTime();
  const oneHour = 3600000; // 1Сʱ�ĺ�����

  // ������ϴ�����ʱ���Ѿ���ȥ��1Сʱ���������µ������
  if (currentTime - lastGeneratedTime > oneHour) {
    cachedNumber = generateRandomNumber();
    lastGeneratedTime = currentTime;
    cacheNumber(cachedNumber);
    cacheTime(lastGeneratedTime);
  }

  res.setHeader('Cache-Control', 'no-store'); // ���û���
  res.status(200).json({ number: cachedNumber });
}

function getCachedNumber() {
  // �ӳ־û��洢���������ݿ⣩�л�ȡ����������
  // �����Ϊֱ������һ�������
  return generateRandomNumber();
}

function getCachedTime() {
  // �ӳ־û��洢���������ݿ⣩�л�ȡ�����ʱ��
  // �����Ϊ���ص�ǰʱ��
  return new Date().getTime();
}

function cacheNumber(number) {
  // ��������洢���־û��洢��
  // �����Ϊ�޲���
}

function cacheTime(time) {
  // ��ʱ��洢���־û��洢��
  // �����Ϊ�޲���
}

function generateRandomNumber() {
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  return String(randomNumber).substring(0, 8);
}