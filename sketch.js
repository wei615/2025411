let circles = [];
let colors = ['#d8e2dc', '#ffcad4', '#f4acb7', '#9d8189'];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffe5d9'); // 背景顏色

  // 生成 40 個圓的資料
  for (let i = 0; i < 60; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(30, 100);
    let color = random(colors);
    circles.push({ x, y, size, color });
  }
}

function draw() {
  background('#ffe5d9'); // 每次重繪背景

  // 根據滑鼠位置調整圓的大小
  let sizeFactor = map(mouseX, 0, width, 0.5, 2);

  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
