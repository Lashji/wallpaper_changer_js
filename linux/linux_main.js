// Get Desktop enviroment

const util = require("util")
const path = require("path")
const os = require("os")
const homeDir = os.homedir()
const fs = require("fs")
const exec = require("child_process").exec
const TEMP_URL = "/home/lashj/wallpapers/oGfzG7T.jpg"

async function setWallpaper(url) {
    const de = await getDesktopEnviroment()
    console.log(de)
    switch (de) {
        case "xfce4-session":
            let success = changeWP("xfce4", url)
            console.log(success ? "Wallpaper changed" : "Wallpaper not changed")
            break
    }
}


function getDesktopEnviroment() {

    exec("ls /usr/bin/*session", (err, stdout, stderr) => {
        console.log("executing command in get DesktopE")
        if (err) {
            console.log(err, "errrrr")
            return "error"
        }

        const de = filterResult(stdout)
        console.log(de, "after filter")
        return de
    })

}

function filterResult(stdout) {
    console.log("filtering")
    return stdout.split("\n")[1].substring(9)
}

function changeWP(de, image_url) {
    console.log("Changing wp")

    const enviroments = {
        xfce4: "xfconf-query -c xfce4-desktop -p /backdrop/screen0/monitorLVDS-0/workspace0/last-image -s " + url
    }

    exec(enviroments.xfce4, (err, stdout, stderr) => {
        if (!err) {
            return true;
        }
        return false;
    })
}

setWallpaper(TEMP_URL)