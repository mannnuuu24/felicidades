document.addEventListener("DOMContentLoaded", function () {
    const confettiContainer = document.querySelector(".confetti-container");

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(createConfetti, 200);
});

/* Estilos para el confeti */
const style = document.createElement("style");
style.innerHTML = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: red;
        top: 0;
        opacity: 0.8;
        animation: fall linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
        }
    }
`;
document.head.appendChild(style);
