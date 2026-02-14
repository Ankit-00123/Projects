const text = ["Tax Accountant", "GST Specialist", "Automation Builder"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];
    document.querySelector(".typing").textContent = currentText.substring(0, j);

    if (!isDeleting && j < currentText.length) {
        j++;
    } else if (isDeleting && j > 0) {
        j--;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % text.length;
    }
    setTimeout(type, 100);
}

type();
