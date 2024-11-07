// URLs de las imágenes para las cartas
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
setupBoard();



