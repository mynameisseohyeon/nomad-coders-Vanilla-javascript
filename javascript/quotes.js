const quotes = [
    {
        quote:"지면 죽음을 의미하고 이긴다는 건 산다는 걸 의미한다.",
        author:"\n\n-안창림-",
    },
    {
        quote:"우리가 너를 만나서 다행이었던 것처럼,\n바깥세상에 있을 누군가도 너를 만나서 다행이라고 여기게 될 거야",
        author:"\n\n-긴긴밤 中-",
    },
    {
        quote:"모든 것이 되기 위해 모든 일을 할 필요는 없다.\n왜냐하면 우리는 이미 무한하기 때문이다.\n살아있는 동안 우리는 늘 다양한 가능성의 미래를 품고 있다.",
        author:"\n\n-미드나잇 라이브러리 中-",
    },
    {
        quote:"잊고싶지 않아요.\n열일곱의 내 모든 것을\n장래의 꿈을 이루지 못해도 그 꿈을 꾸고 있는 나를 기억하고 싶어요.\n이상한가요?\n\n이상하지 않아.",
        author:"\n\n-오늘도 상처받았나요? 中-",
    },
    {
        quote:"오래 기다릴게 반드시 너를 찾을게",
        author:"\n\n이름에게 -아이유-",
    },
    {
        quote:"반짝반짝 작은 별님 날 조금만 비춰주세요\n이제 어때 좀 봐줄만은 한가요\n동쪽 하늘 서쪽 하늘 둘러보면 모든 하늘은 그렇게 날 향해 있다죠",
        author:"\n\n작은별 -악동뮤지션-"
    },
    {
        quote:"밤하늘에 빛나는 수많은 별들 저마다 아름답지만\n내 맘 속에 빛나는 별 하나\n오직 너만 있을 뿐이야",
        author:"\n\n잊어야 한다는 마음으로 -김광석-",
    },
    {
        quote:"Only if you knew how much I like you",
        author:"\n\nheather -Conan Gray-",
    },
    {
        quote:"Life is a maze and love is a riddle",
        author:"\n\nThe show -Lenka-",
    },
    {
        quote:"To carry on\nWe'll carry on",
        author:"\n\nWelcome To The Black Parade -My Chemical Romance-",
    },
    {
        quote:"내가 어떻게 행복하게 사나 꼭 봐\n다 아무것도 아니야",
        author:"\n\n나의 아저씨 -15화 中-",
    },
    {
        quote:"옛날 일 아무것도 아니야\n내가 아무것도 아니라고 생각하면\n아무것도 아니야",
        author:"\n\n나의 아저씨 -10화 中-",
    },
    {
        quote:"괜찮은 사람이에요\n엄청\n\n좋은 사람이에요\n엄청",
        author:"\n\n나의 아저씨 -12화 中-",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;