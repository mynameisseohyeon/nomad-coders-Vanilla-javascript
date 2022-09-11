const images = ["umi003.jpg", "karigurashi032.jpg", "majo010.jpg","umi011.jpg","umi005.jpg","baron049.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");
/* javascript에서 html elements를 생성함*/

bgImages.src = `images/${choseImage}`;

document.body.appendChild(bgImages);
/* appendChild는 body 맨 뒤에 bgImages를 연결시켜줌 */

/* 만약 element가 들어갈 위치를 지정해주고 싶다면 html에서 element를 생성하고
insetBefore()메소드를 사용하면 된다
document.body.insertBefore(bgImages,h1); 
h2요소 앞에 bgImages가 추가됨*/