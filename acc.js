
function get_web_info() {

    const generatestuff = document.getElementById("generatestuff")
    const offcanvas_body = document.getElementsByClassName("offcanvas_body")
    const card_img_top = document.getElementsByClassName("card_img_top")[0]
    const card_title = document.getElementsByClassName("card_title")[0]
    const card_text = document.getElementsByClassName("card_text")[0]
    const listgroup_listgroupflush = document.getElementsByClassName("list-group list-group-flush")[0]
    const saveactivity = document.getElementById("saveactivity")
    const alert_danger = document.getElementById("alert_danger")
    const card = document.getElementsByClassName("card")[0]
    return { generatestuff, offcanvas_body, card_img_top, card_title, card_text, listgroup_listgroupflush, saveactivity, alert_danger, card }
}
/// here get api data

async function fetchdata(url) {
    const element = get_web_info()
    try {
        const res = await fetch(url)
        return await res.json();

    } catch (error) {
        ///if error output message
        element.alert_danger.style.display = "block"
        console.error("your api address has something wrong!");
    }

}

/// here save api data into array

async function data() {
    let apidetail = 0
    const data = await fetchdata("https://random-activity-sigmo.vercel.app/api/random")
    apidetail = ({ activity: data.activity, type: data.type, participants: data.participants, price: data.price, duration: data.duration })

    //console.log(apidetail)
    return apidetail
}

//data()

function initialize() {
    const element = get_web_info()
    element.card_img_top.src = ""
    element.card_title.textContent = ""
    element.card_text.textContent = ""
    element.listgroup_listgroupflush.innerHTML = ""

}

async function generate() {
    const element = get_web_info()
    element.card.style.display = "block"
    const apidata = await data()

    initialize()

    const imgsrc = ["image/you.PNG", "image/2friend.PNG", "image/3friend.PNG"]

    element.card_img_top.src = imgsrc[Math.floor(Math.random() * 3)];
    element.card_title.textContent = apidata.activity
    element.card_text.textContent = `Hey you found this amazing thing to do with ${apidata.participants} people, Now go spend some ${apidata.duration} to try it out`

    const type = document.createElement("li");
    type.className = "list-group-item"
    type.textContent = `type: ${apidata.type}`
    const participants = document.createElement("li");
    participants.className = "list-group-item"
    participants.textContent = `participants: ${apidata.participants} people`
    const price = document.createElement("li")
    price.className = "list-group-item"
    price.textContent = `price: $${apidata.price * 10}`

    element.listgroup_listgroupflush.appendChild(type)
    element.listgroup_listgroupflush.appendChild(participants)
    element.listgroup_listgroupflush.appendChild(price)
}

function save_activity() {
    const element = get_web_info()

    const apidata = await data()

}

window.get_web_info = get_web_info

window.fetchdata = fetchdata
window.data = data
window.initialize = initialize
window.generate = generate
window.save_activity = save_activity


