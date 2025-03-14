const cube = document.querySelector('.cube');
let currentRotation = 0;

const rotations = [
    { x: 0, y: 0 },       // Front
    { x: 0, y: 90 },      // Right
    { x: 0, y: 180 },     // Back
    { x: 0, y: 270 },     // Left
    { x: 90, y: 0 },      // Top
    { x: -90, y: 0 }      // Bottom
];

// Начальный наклон
const initialTilt = { x: -15, y: 15 };

cube.addEventListener('click', () => {
    // Останавливаем анимацию
    cube.style.animationPlayState = 'paused';

    currentRotation = (currentRotation + 1) % rotations.length;
    const { x, y } = rotations[currentRotation];
    
    // Добавляем начальный наклон к текущему повороту
    cube.style.transform = `
        rotateX(${x + initialTilt.x}deg) 
        rotateY(${y + initialTilt.y}deg)
    `;

    // Возобновляем анимацию через 1 секунду (после завершения поворота)
    setTimeout(() => {
        cube.style.animationPlayState = 'running';
    }, 1000);
});
