// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
const butt_1 = document.querySelector(".button_1")
const qw_1 = document.createElement("div")
butt_1.after(qw_1)
qw_1.style.width = "300px"
qw_1.style.height = "300px"
qw_1.style.backgroundColor = "red"

butt_1.addEventListener("click", function () {
    qw_1.style.width = "100px"
    qw_1.style.height = "100px"
    qw_1.style.marginLeft = "50px"
    qw_1.style.backgroundColor = "green"
}
)
// Создать кнопку и розовый квадрат с размерами 200х200px.При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.
const butt_2 = document.querySelector(".button_2")
const qw_2 = document.createElement("div")
qw_2.classList.add("qwadr_2")
butt_2.after(qw_2)

butt_2.addEventListener("click", function () {
    let backC = "blue"
    qw_2.style.backgroundColor = backC
    console.log(backC)
}
)
// Создать кнопку и квадрат с размерами 150х150px.При клике на кнопку увеличивать высоту и ширину квадрата на 20px.
const butt_3 = document.querySelector(".button_3")
const qw_3 = document.createElement("div")
let razm = 150
qw_3.style.width = `${razm}px`
qw_3.style.height = `${razm}px`

qw_3.style.backgroundColor = "rgb(200, 200, 128)"
butt_3.after(qw_3)

butt_3.addEventListener("click", function () {
    qw_3.style.width = `${razm + 20}px`
    qw_3.style.height = `${razm + 20}px`
})

// Создать кнопку и div с классом root.При клике на кнопку в div создается параграф синего цвета.Текст параграфа произвольный.
const butt_4 = document.querySelector(".button_4")
const newD = document.createElement("div")
newD.classList.add("root")
butt_4.after(newD)

butt_4.addEventListener("click", function () {
    const newP = document.createElement("p")
    newP.style.backgroundColor = "blue"
    newP.style.padding = "10px"
    newP.innerText = "text to paragraf"
    newD.append(newP)
})

// Создать кнопку и div с классом root.При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов.Первый цвет синий.

const butt_5 = document.querySelector(".button_5")
const div_butt5 = document.createElement("div")
div_butt5.classList.add("root")
butt_5.after(div_butt5)
let i = 1

butt_5.addEventListener("click", function () {
    const p_butt5 = document.createElement("p")
    p_butt5.innerText = "text to paragraf"
    if (i % 2 != 0) {
        p_butt5.style.backgroundColor = "blue"
        div_butt5.append(p_butt5)
        i++
    } else {
        p_butt5.style.backgroundColor = "green"
        div_butt5.append(p_butt5)
        i++
    }

})

//---------------------------------------------------
//Дополнительное задание.
// Написать цикл, который создает множество div - ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255).У дивов цвет должен меняться с шагом 5.
// Т.е.
//     rgb(128, 128, 0)
// rgb(128, 128, 5)
// rgb(128, 128, 10)
// …
// rgb(128, 128, 255)
const containerD = document.querySelector(".container")
for (let sch = 0; sch <= 255; sch += 5) {
    const creatDiv = document.createElement("div")
    creatDiv.style.width = "100px"
    creatDiv.style.height = "100px"
    creatDiv.style.marginLeft = "10px"
    creatDiv.style.marginBottom = "10px"
    creatDiv.style.backgroundColor = `rgb(128, 128, ${sch})`
    containerD.append(creatDiv)
}