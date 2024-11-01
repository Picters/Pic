// ������� ������
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// ���������� ������� �� ������ "��"
yesButton.addEventListener('click', () => {
    // ������� darkMode, ���� �� ��� ����������
    localStorage.removeItem('darkMode');
    // ������� �� ��������� �������� �������
    window.location.href = '../question4/index.html';
});

// ���������� ������� �� ������ "���"
noButton.addEventListener('click', () => {
    // ������������� darkMode � true
    localStorage.setItem('darkMode', 'true');
    // ������� �� ��������� �������� �������
    window.location.href = '../question4/index.html';
});
