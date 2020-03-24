function changeLight(flag) {
    if (flag) { // light mode
        document.getElementById('onlyLight').href = '/style.css';
    } else { // dark mode
        document.getElementById('onlyDark').href = '/style.css';
    }
}