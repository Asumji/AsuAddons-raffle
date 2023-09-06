const display = new Display()
let seconds = 1200
let timestamp = new Date(Date.now())

register("Chat", (type) => {
    if (type =="ACTIVE PLAYER") {
        timestamp = new Date(Date.now()+1200000)
        const stepRegister = register("step", () => {
            display.clearLines()
            display.setLine(0, "§c" + String(seconds) + "s Time: " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
            display.setRenderLoc(10,100)
            seconds--

            if (seconds < 0) {
                display.clearLines()
                display.setLine(0, "§a" + String(seconds) + "s Time: " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds());
                display.setRenderLoc(10,100)

                Client.Companion.showTitle("§a§lACTIVE PLAYER TICKET READY!", "", 0, 50, 0)

                seconds = 1200

                stepRegister.unregister()
            }
        }).setFps(1)
    }
}).setCriteria(/(.*)! You gained \+1 Raffle Ticket!/)
