function walkCat(callback){
    setTimeout(()=>{
        console.log("you walk the cat");
        callback()
    },1500)
}

function cleanKitchen(callback){
    setTimeout(()=>{
        console.log("Clean the kitchen");
        callback()
    },2500)
}

function cleanTrash(callback){
    setTimeout(()=>{
        console.log("Take out the trash");
        callback()
    },500)
}

walkCat(()=>{
    cleanKitchen(()=>{
        cleanTrash(()=>console.log("You finished all the chores"))
    })
})
