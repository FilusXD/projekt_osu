const startGame = document.getElementById("startGame")
const point = document.getElementById("point")
const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;



let pointInterval;

startGame.onclick = () =>{
    startGame.style.display = "none";
    startPointInterval();
};

const movePoint = (element, x, y) =>{
    element.style.top =`${y}px`;
    element.style.left =`${x}px`;
};



 const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);
    pointInterval = setInterval (() =>{
        setSize(point, getRandomNumber(40,70));
        movePoint(point, getRandomNumber(100, 600), getRandomNumber(100, 600));
    },800 )
 };

 const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
    }
 };

 const setSize = (element, size) =>{
    element.style.with = `${size}px`
    element.style.height = `${size}px`
}
