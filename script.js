// ������� ��������
const mainScreen = document.getElementById('mainScreen');
const questionScreen = document.getElementById('questionScreen');
const startButton = document.getElementById('startButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

// ������� ��� �������� ������������ �������
function switchScreen(from, to) {
    from.style.opacity = '0';
    setTimeout(() => {
        from.style.display = 'none';
        to.style.display = 'block';
        setTimeout(() => {
            to.style.opacity = '1';
        }, 50);
    }, 500);
}

// ���������� ������� �� ������ "������ ����"
startButton.addEventListener('click', () => {
    switchScreen(mainScreen, questionScreen);
});

// ���������� ������� �� ������ "��"
yesButton.addEventListener('click', () => {
    alert('�� �������: ��');
    // ����� ����� �������� ������ ��� ������ �����
});

// ���������� ������� �� ������ "���"
noButton.addEventListener('click', () => {
    alert('�� �������: ���');
    // ����� ����� �������� ������ ��� ������ �����
    switchScreen(questionScreen, mainScreen); // ����������� �� ��������� �����
});
