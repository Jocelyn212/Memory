/* // URLs de las imágenes para las cartas
const imagePaths = [
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.02_kvumvd.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.25_ft2cea.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.24.21_bhzkwz.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.36_iaajbe.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.33_w4xugx.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.24.53_szuvo6.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.45_n0aico.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.10_aj2xxg.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978815/Captura_de_pantalla_2024-11-07_a_las_12.25.17_bozbq0.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.43.45_j0c7ve.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.41.49_tnj9io.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.39.12_hlvxyg.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.43.18_phda8e.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980137/Captura_de_pantalla_2024-11-07_a_las_12.48.20_hcaaa3.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980137/Captura_de_pantalla_2024-11-07_a_las_12.47.24_xjvaqj.png',
];
const cardImages = [...imagePaths, ...imagePaths];

// Variables del juego
let flippedCards = [];
let matchedCards = new Set();

// Función para mezclar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Configura el tablero y crea las cartas
function setupBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Limpiar el tablero al reiniciar
    const shuffledCards = shuffle([...cardImages]); // Mezclar cartas en cada restart

    shuffledCards.forEach((imagePath, index) => {
        const card = document.createElement('div');
        card.className = "card bg-gray-400 flex items-center justify-center";
        card.dataset.image = imagePath; // Asigna la URL de la imagen como data-image
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

// Función para voltear una carta y verificar pares
function flipCard(card) {
    if (flippedCards.length === 2 || matchedCards.has(card)) return;

    // Muestra la imagen en lugar de texto
    card.style.backgroundImage = `url(${card.dataset.image})`;
    card.style.backgroundSize = 'cover';
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.dataset.image === card2.dataset.image) {
            matchedCards.add(card1);
            matchedCards.add(card2);
            flippedCards = [];
        } else {
            setTimeout(() => {
                card1.style.backgroundImage = '';
                card2.style.backgroundImage = '';
                flippedCards = [];
            }, 1000); // Espera antes de voltear de nuevo
        }
    }
}

// Reiniciar el juego
document.getElementById('restart').addEventListener('click', () => {
    matchedCards.clear();
    flippedCards = [];
    setupBoard();
});

// Inicializar el tablero al cargar la página
setupBoard(); */
// URLs de las imágenes para las cartas
/* const imagePaths = [
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.02_kvumvd.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.25_ft2cea.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.24.21_bhzkwz.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.36_iaajbe.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.33_w4xugx.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.24.53_szuvo6.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.45_n0aico.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.10_aj2xxg.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978815/Captura_de_pantalla_2024-11-07_a_las_12.25.17_bozbq0.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.43.45_j0c7ve.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.41.49_tnj9io.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.39.12_hlvxyg.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.43.18_phda8e.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980137/Captura_de_pantalla_2024-11-07_a_las_12.48.20_hcaaa3.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980137/Captura_de_pantalla_2024-11-07_a_las_12.47.24_xjvaqj.png',
];
const cardImages = [...imagePaths, ...imagePaths];

// Variables del juego
let flippedCards = [];
let matchedCards = new Set();
let timer;
let timeRemaining = 120; // 120 segundos = 2 minutos

const levels = {
    'level-basic': 8, // 16 cartas (8 pares)
    'level-medium': 10, // 20 cartas (10 pares)
    'level-hard': 15 // 30 cartas (15 pares)
};

// Función para mezclar las cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Configura el tablero y crea las cartas
function setupBoard(level = 'level-hard') {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Limpiar el tablero al reiniciar
    const numPairs = levels[level];
    const levelCards = shuffle([...cardImages.slice(0, numPairs * 2)]); // Seleccionar cartas según el nivel

    levelCards.forEach((imagePath) => {
        const card = document.createElement('div');
        card.className = "card bg-gray-400 flex items-center justify-center";
        card.dataset.image = imagePath; // Asigna la URL de la imagen como data-image
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });

    revealCards(); // Mostrar las cartas al inicio
    startTimer(); // Iniciar el contador de tiempo
}

// Función para mostrar las cartas al inicio
function revealCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundImage = `url(${card.dataset.image})`;
        card.style.backgroundSize = 'cover';
        card.classList.add('flipped');
    });
    setTimeout(() => {
        cards.forEach(card => {
            card.style.backgroundImage = '';
            card.classList.remove('flipped');
        });
    }, 2000); // 2000 ms = 2 segundos
}

document.getElementById('close-modal').addEventListener('click', closeModal);

function closeModal() {
    const modal = document.getElementById('gameover-modal');
    modal.classList.add('hidden');
    restartGame(); // Reiniciar el juego al cerrar el modal
}

function showModal() {
    const modal = document.getElementById('gameover-modal');
    modal.classList.remove('hidden');
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Tiempo restante: ${timeRemaining} segundos`;

    timer = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `Tiempo restante: ${timeRemaining} segundos`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            showModal();
        }
    }, 1000); // 1000 ms = 1 segundo
}

// Removed duplicate function definition

// Función para voltear una carta y verificar pares
function flipCard(card) {
    if (flippedCards.length === 2 || matchedCards.has(card)) return;

    card.style.backgroundImage = `url(${card.dataset.image})`;
    card.style.backgroundSize = 'cover';
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.dataset.image === card2.dataset.image) {
            matchedCards.add(card1);
            matchedCards.add(card2);
            flippedCards = [];
        } else {
            setTimeout(() => {
                card1.style.backgroundImage = '';
                card2.style.backgroundImage = '';
                flippedCards = [];
            }, 1000); // Espera antes de voltear de nuevo
        }
    }
}

document.getElementById('restart').addEventListener('click', () => {
    clearInterval(timer);
    restartGame();
});

// Manejar cambios de nivel
document.querySelectorAll('.level-button').forEach(button => {
    button.addEventListener('click', (event) => {
        clearInterval(timer);
        const level = event.target.id;
        restartGame(level);
    });
});

function restartGame(level = 'level-hard') {
    matchedCards.clear();
    flippedCards = [];
    timeRemaining = 120; // Reiniciar el tiempo
    setupBoard(level);
}

// Inicializar el tablero al cargar la página
setupBoard(); */





const music = new Audio('./juego-de-tronos-1.mp3');
music.loop = true; 


let isMusicPlaying = false;


function startMusic() {
    if (!isMusicPlaying) {
        music.play();
        isMusicPlaying = true;
    }
    
    document.removeEventListener('click', startMusic);
}


document.addEventListener('click', startMusic);


const musicControlButton = document.getElementById('music-control');
musicControlButton.addEventListener('click', () => {
    if (isMusicPlaying) {
        music.pause();
        musicControlButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; 
        isMusicPlaying = false;
    } else {
        music.play();
        musicControlButton.innerHTML = '<i class="fas fa-music"></i>'; 
        isMusicPlaying = true;
    }
});






let currentLevel = 'level-basic';
const imagePaths = [
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.02_kvumvd.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.25_ft2cea.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.24.21_bhzkwz.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.25.36_iaajbe.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.33_w4xugx.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978813/Captura_de_pantalla_2024-11-07_a_las_12.24.53_szuvo6.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.45_n0aico.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978814/Captura_de_pantalla_2024-11-07_a_las_12.24.10_aj2xxg.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730978815/Captura_de_pantalla_2024-11-07_a_las_12.25.17_bozbq0.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.43.45_j0c7ve.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.41.49_tnj9io.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.39.12_hlvxyg.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980029/Captura_de_pantalla_2024-11-07_a_las_12.43.18_phda8e.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980137/Captura_de_pantalla_2024-11-07_a_las_12.48.20_hcaaa3.png',
    'https://res.cloudinary.com/pruebaweb/image/upload/v1730980137/Captura_de_pantalla_2024-11-07_a_las_12.47.24_xjvaqj.png',
];

let flippedCards = [];
let matchedCards = new Set();
let timer;
let timeRemaining = 120;
let score = 0;

const levels = {
    'level-basic': 6,    
    'level-medium': 10,  
    'level-hard': 15     
};

const basePoints = {
    'level-basic': 1000,
    'level-medium': 2000,
    'level-hard': 3000
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function calculateScore(timeLeft, level) {
    const timeBonus = timeLeft * 10; 
    return basePoints[level] + timeBonus;
}

function setupBoard(level) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    const numPairs = levels[level];

    
    const selectedImages = imagePaths.slice(0, numPairs);
    const levelCards = [...selectedImages, ...selectedImages];
    const shuffledCards = shuffle(levelCards);

    
    const columns = level === 'level-basic' ? 4 : level === 'level-medium' ? 5 : 6;
    gameBoard.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    shuffledCards.forEach((imagePath) => {
        const card = document.createElement('div');
        card.className = "card bg-gray-400 flex items-center justify-center";
        card.dataset.image = imagePath;
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });

    revealCards();
    startTimer();
}

function revealCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundImage = `url(${card.dataset.image})`;
        card.style.backgroundSize = 'cover';
        card.classList.add('flipped');
    });
    setTimeout(() => {
        cards.forEach(card => {
            card.style.backgroundImage = '';
            card.classList.remove('flipped');
        });
    }, 2000);
}

function flipCard(card) {
    if (flippedCards.length === 2 || matchedCards.has(card) || card.classList.contains('flipped')) return;

    card.style.backgroundImage = `url(${card.dataset.image})`;
    card.style.backgroundSize = 'cover';
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        if (card1.dataset.image === card2.dataset.image) {
            matchedCards.add(card1);
            matchedCards.add(card2);
            flippedCards = [];

            
            if (matchedCards.size === levels[currentLevel] * 2) {
                showVictoryMessage();
            }
        } else {
            setTimeout(() => {
                card1.style.backgroundImage = '';
                card2.style.backgroundImage = '';
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }
}

function startTimer() {
    clearInterval(timer);
    timeRemaining = 120;
    const timerElement = document.getElementById('timer');

    timer = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `Tiempo restante: ${timeRemaining} segundos`;

        if (timeRemaining <= 0) {
            showGameOverMessage();
        }
    }, 1000);
}

function showVictoryMessage() {
    clearInterval(timer);
    const finalScore = calculateScore(timeRemaining, currentLevel);

    const modal = document.getElementById('gameover-modal');
    const modalContent = modal.querySelector('.bg-white');
    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold text-green-600 mb-4">¡Felicitaciones! ¡Has Ganado!</h2>
        <div class="space-y-2">
            <p class="text-lg">Nivel: ${currentLevel.replace('level-', '').toUpperCase()}</p>
            <p class="text-lg">Tiempo restante: ${timeRemaining} segundos</p>
            <p class="text-lg font-bold">Puntuación: ${finalScore} puntos</p>
            <p class="text-sm text-gray-600">¡Excelente trabajo! Mientras más rápido resuelvas el juego, más puntos obtendrás.</p>
        </div>
        <button id="close-modal" class="mt-6 p-2 bg-green-500 text-white rounded w-full hover:bg-green-600">
            Jugar de nuevo
        </button>
    `;
    modal.classList.remove('hidden');
}

function showGameOverMessage() {
    clearInterval(timer);

    const modal = document.getElementById('gameover-modal');
    const modalContent = modal.querySelector('.bg-white');
    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold text-red-600 mb-4">¡Tiempo Agotado!</h2>
        <div class="space-y-2">
            <p class="text-lg">No lograste encontrar todos los pares a tiempo.</p>
            <p class="text-lg">Pares encontrados: ${matchedCards.size / 2} de ${levels[currentLevel]}</p>
        </div>
        <button id="close-modal" class="mt-6 p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-600">
            Intentar de nuevo
        </button>
    `;
    modal.classList.remove('hidden');
}

function restartGame(level = currentLevel) {
    matchedCards.clear();
    flippedCards = [];
    timeRemaining = 120;
    document.getElementById('gameover-modal').classList.add('hidden');
    setupBoard(level);
}


document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('level-basic').addEventListener('click', function () {
        currentLevel = 'level-basic';
        restartGame('level-basic');
    });

    document.getElementById('level-medium').addEventListener('click', function () {
        currentLevel = 'level-medium';
        restartGame('level-medium');
    });

    document.getElementById('level-hard').addEventListener('click', function () {
        currentLevel = 'level-hard';
        restartGame('level-hard');
    });

    
    document.getElementById('restart').addEventListener('click', () => {
        restartGame(currentLevel);
    });

    
    const modal = document.getElementById('gameover-modal');
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'close-modal') {
            modal.classList.add('hidden');
            restartGame(currentLevel);
        }
    });

    
    setupBoard(currentLevel);
});



