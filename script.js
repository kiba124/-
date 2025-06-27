const responses = [
    "أنا هنا لأفهم مشاعرك، تحدث إليّ بحرية.",
    "هل تشعر بالحزن؟ يمكنك مشاركتي.",
    "السعادة جميلة، شاركني بها أيضًا.",
    "أنا دائمًا موجود عندما تحتاج إلى التحدث.",
    "أخبرني كيف تشعر الآن؟",
    "أحيانًا التعبير يخفف من الضغط، جرب!"
];

function respond() {
    const input = document.getElementById("input").value.trim();
    const chat = document.getElementById("chat");
    if (!input) return;
    const userMsg = `<div style='color:blue;'>👤: ${input}</div>`;
    const botResponse = `<div style='color:green;'>🤖: ${responses[Math.floor(Math.random() * responses.length)]}</div>`;
    chat.innerHTML += userMsg + botResponse;
    document.getElementById("input").value = "";
    chat.scrollTop = chat.scrollHeight;
}
