const noblox = require("noblox.js") // Credits to the module creators for making this project easier 
const fs = require("fs")
var prompt = require('prompt-sync')();
const chalk = require('chalk');
const cookiefile = require('./cookies.json'); // where all the cookies go LOL
const singlecookie = cookiefile.cookie /// Insert one cookie to schedule, might add mass upload schedule command later




// Stiizzy cat was here LOL \\
console.clear()
console.log(" ")
console.log(chalk.yellow("[1]", chalk.white("Mass Upload",  chalk.yellow("        [2]", chalk.white("Mass Buy")))))
console.log(chalk.yellow("[3]", chalk.white("Mass Remove Asset",  chalk.yellow("  [4]", chalk.white("Check Cookies")))))
console.log(chalk.yellow("[5]", chalk.white("Schedule a Decal",  chalk.yellow("   [6]", chalk.white("Mass Freind Request")))))
console.log(" ")
console.log(chalk.white("     coded by",chalk.red("S",chalk.blue("t",chalk.cyan("i",chalk.yellow("i",chalk.green("z",chalk.magenta("z",chalk.red("y",chalk.blue("C",chalk.cyan("a",chalk.yellow("t"))))))))))))
console.log(" ")
console.log(" ")

    var choice = prompt(chalk.cyan("[+]", chalk.white("Enter a Choice: ")))

    if (choice === "1"){
        var name = prompt(chalk.cyan("[+]", chalk.white("Enter a decal Name: ")))
        for (const cookies of cookiefile.cookies) {  
        async function MassUpload () {
            const currentUser = await noblox.setCookie(cookies) 
            console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
            noblox.uploadItem(name, 13, fs.createReadStream("./ToUpload.png"))
        }
        MassUpload()
    }
}
if (choice === "2"){
    var assetid = prompt(chalk.cyan("[+]", chalk.white("Enter an asset id: ")))
    for (const cookies of cookiefile.cookies) {  
    async function MassUpload () {
        const currentUser = await noblox.setCookie(cookies) 
        console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
        noblox.buy(assetid)
    }
    MassUpload()
}
}
if (choice === "3"){
    var assetid = prompt(chalk.cyan("[+]", chalk.white("Enter an asset id: ")))
    for (const cookies of cookiefile.cookies) {  
    async function Delete () {
        const currentUser = await noblox.setCookie(cookies) 
        console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
        await noblox.deleteFromInventory(assetid)
    }
    Delete()
}
}
if (choice === "4"){
    console.log("checking cookies...")
    for (const cookies of cookiefile.cookies) {  
    async function cookiecheck () {
        const currentUser = await noblox.setCookie(cookies) 
        console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    }
    cookiecheck()
    process.on('unhandledRejection', error => {
        if ((error + '').includes('Error: You are not logged in.')) {
          console.log(chalk.red('Invalid Cookie in list'));
        }
      });
}
}
if (choice === "5"){
    var name = prompt(chalk.cyan("[+]", chalk.white("Enter an decal name id: ")))
    var time = prompt(chalk.cyan("[+]", chalk.white("Enter a time in miliseconds: ")))
        async function Schedule () {
            const currentUser = await noblox.setCookie(singlecookie)
            await new Promise(resolve => setTimeout(resolve, time));
            console.log()
            noblox.uploadItem(`${Name}`, 13, fs.createReadStream("./decal.png")) ///// name your finished decal, decal.png
        }
        Schedule()
}
if (choice === "6"){
    var userid = prompt(chalk.cyan("[+]", chalk.white("Enter an user id: ")))
    for (const cookies of cookiefile.cookies) {  
    async function MassUpload () {
        const currentUser = await noblox.setCookie(cookies) 
        console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
        noblox.sendFriendRequest(userid)
    }
    MassUpload()
}
}
