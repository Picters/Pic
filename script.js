// ������� ��� ������������� ������ "���������" � ��� ������
function transformButton() {
    const generatorButton = document.getElementById('generatorButton');
    const buttonContainer = document.getElementById('buttonContainer');

    // ��������� ����� ��� �������� ����������
    generatorButton.classList.add('expand');

    // ������ ���������� ��� ������ ����� �������� ��������
    setTimeout(() => {
        generatorButton.style.display = 'none'; // �������� ������ "���������"
        buttonContainer.classList.add('visible'); // ���������� ��� ������
    }, 500); // �������� � 500 �� ��� ���������� ��������
}

// ������� ��� ��������� ������� ������
function generate(type) {
    console.log(`��������� ${type}`);
}
