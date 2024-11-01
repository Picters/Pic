// ������� ��� �������������� ������
function transformButton() {
    const generatorButton = document.getElementById('generatorButton');
    const buttonContainer = document.getElementById('buttonContainer');
    
    // �������� ��� ������� ������ "���������"
    generatorButton.style.transition = "transform 0.5s ease, opacity 0.5s ease";
    generatorButton.style.transform = "scale(0)";
    generatorButton.style.opacity = "0";
    
    // �������� ����� ������ ����� ���������� �������� �������
    setTimeout(() => {
        generatorButton.style.display = 'none'; // �������� ������ "���������"
        buttonContainer.style.opacity = '1'; // ���������� ��������� � ������ ��������
        buttonContainer.style.pointerEvents = 'auto';
        
        // ��������� ����� ��������� ��� ������ ������ � ��������� ��� ������� ���������
        const buttons = document.querySelectorAll('.transform-button');
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('visible');
            }, index * 100); // �������� ����� ���������� ������
        });
    }, 500); // �������� � 500 �� ��� ���������� ��������
}

// ������� ��� ��������� ������� ������
function generate(type) {
    console.log(`��������� ${type}`);
}
