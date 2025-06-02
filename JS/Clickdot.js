function createClickDot(x, y) {
    const colors = ['#FF5252', '#4CAF50', '#2196F3', '#FFC107', '#9C27B0'];
    const dot = document.createElement('div');
    dot.className = 'click-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(dot);
    
    setTimeout(() => {
        dot.remove();
    }, 1000);
}

// Event listener for click effects
document.addEventListener('click', (e) => {
    createClickDot(e.clientX, e.clientY);
});






