function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16 )];
    }
    return color;
}

function changeColor() {
    const colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = getRandomColor();
}

setInterval(changeColor, 1)