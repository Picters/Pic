// ������� ��������
const scareText = document.getElementById('scareText');
const questionContainer = document.getElementById('questionContainer');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const whiteNoise = document.getElementById('whiteNoise');

// ������������� ��������� ������ ���� �� 100%
whiteNoise.volume = 1.0;

// �������� ������ ����� 1 �������
setTimeout(() => {
    scareText.style.display = 'none';
    questionContainer.style.display = 'block';

    // ������������� ��������� �� 50% ����� ������������ ������ "��������"
    whiteNoise.volume = 0.5;
}, 1000); // ����� "��������" ����� ������� ������ 1 �������

// ���������� ������� �� ������ "��"
yesButton.addEventListener('click', () => {
    // ������� �� ��������� �������� �������
    window.location.href = '../question5/index.html';
});

// ���������� ������� �� ������ "���"
noButton.addEventListener('click', () => {
    // ������� �� ��������� �������� �������
    window.location.href = '../question5/index.html';
});
