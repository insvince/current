const locate = document.querySelector('output')
const timeZone = locate.getAttribute('data-timezone')

const updateTime= () => {
    const now = luxon.DateTime.now().setZone(timeZone)

    locate.innerHTML = now.toFormat("HH:mm:ss")
}

updateTime()

setInterval(updateTime, 1000)