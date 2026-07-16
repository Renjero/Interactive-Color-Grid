let container = document.querySelector("#container");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

const Colors = [
  "#FF3B30", "#FF9500", "#FFCC00", "#34C759", "#00C7BE",
  "#007AFF", "#5856D6", "#AF52DE", "#FF2D55", "#FF6B6B",
  "#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F",
  "#90BE6D", "#43AA8B", "#4D908E", "#577590", "#277DA1",
  "#E63946", "#F72585", "#B5179E", "#7209B7", "#560BAD",
  "#480CA8", "#3A0CA3", "#3F37C9", "#4361EE", "#4895EF",
  "#4CC9F0", "#06D6A0", "#1B9AAA", "#EF476F", "#FFD166",
  "#118AB2", "#8338EC", "#3A86FF", "#FB5607", "#FF006E",
  "#A8E10C", "#39FF14", "#00FF7F", "#00E5FF", "#00B8D9",
  "#651FFF", "#7C4DFF", "#C51162", "#D500F9", "#FF1744",
  "#FF9100", "#FFEA00", "#76FF03", "#64DD17", "#00E676",
  "#1DE9B6", "#00B0FF", "#2979FF", "#304FFE", "#6200EA",
  "#AA00FF", "#F50057", "#FF4081", "#FF5252", "#FF6E40",
  "#FFD740", "#C6FF00", "#AEEA00", "#69F0AE", "#18FFFF",
  "#40C4FF", "#448AFF", "#536DFE", "#7C4DFF", "#E040FB",
  "#FF80AB", "#FFAB40", "#FFFF00", "#B2FF59", "#00FFCC",
  "#00F5D4", "#00BBF9", "#9B5DE5", "#F15BB5", "#FEE440",
  "#00F0B5", "#00D9F5", "#5E60CE", "#7400B8", "#FF1493",
  "#FF4500", "#32CD32", "#00CED1", "#1E90FF", "#8A2BE2",
  "#FF69B4", "#FF6347", "#ADFF2F", "#7FFF00", "#00FA9A"
];

let selectedColor = null;

function getColor() {
    if (selectedColor) {
        return selectedColor;
    }
    return Colors[Math.floor(Math.random() * Colors.length)];
}

for (let i = 0; i <= 98; i++) {
    let box = document.createElement("div");
    box.className = "h-20 w-20 border border-white bg-gray-800";
    container.appendChild(box);

    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = getColor();
        box.style.borderRadius = "25px";

        setTimeout(() => {
            box.style.backgroundColor = "#1f2937";
            box.style.borderRadius = "";
        }, 300);
    });
}

// Red button
btn1.addEventListener("click", () => {
    selectedColor = "yellow";
});

btn2.addEventListener("click", () => {
    selectedColor = null;
});



// key points for advancement in futuree
// columns = containerWidth / boxWidth
// rows = containerHeight / boxHeight
// totalBoxes = columns * rows
// columns = containerWidth / boxWidth
// rows = containerHeight / boxHeight
// totalBoxes = columns * rows

// const boxSize = 80; // 80px × 80px

// const containerWidth = container.clientWidth;
// const containerHeight = container.clientHeight;

// const cols = Math.floor(containerWidth / boxSize);
// const rows = Math.floor(containerHeight / boxSize);

// const totalBoxes = cols * rows;

// for (let i = 0; i < totalBoxes; i++)
// Container (800 × 400)

// ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
// │  │  │  │  │  │  │  │  │  │  │  ← 10 columns
// ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
// │  │  │  │  │  │  │  │  │  │  │
// ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
// │  │  │  │  │  │  │  │  │  │  │
// ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
// │  │  │  │  │  │  │  │  │  │  │
// ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┤
// │  │  │  │  │  │  │  │  │  │  │  ← 5 rows
// └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘

// 10 × 5 = 50 boxes