// ������� ��������
const codeInput = document.getElementById('codeInput');
const submitButton = document.getElementById('submitButton');

// ���������� ������� �� ������ ��������
submitButton.addEventListener('click', () => {
    const code = codeInput.value;

    if (code === "666") {
        activateBlackout();
    } else if (code === "333") {
        simulateHighLoad();
    } else {
        alert("�������� ���. ���������� �����.");
    }
});

// ������� ��� ������� ������ � �������� "���"
function activateBlackout() {
    document.body.innerHTML = "<div id='blackout'>���.</div>";
    localStorage.setItem('siteBlocked', 'true');
}

// ������� ��� ��������� ������� ��������
function simulateHighLoad() {
    let heavyCalculation = 0;

    // ����������� ����
    for (let i = 0; i < 1e8; i++) {
        heavyCalculation += Math.sqrt(i);
    }

    alert("���� ��������. �������� ������������.");
}

// �������� ���������� ��� �������� ��������
if (localStorage.getItem('siteBlocked') === 'true') {
    activateBlackout();
}
