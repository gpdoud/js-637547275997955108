const tf = (b) => {
    return new Promise( (res, rej) => {
        if(b) {
            setTimeout(()=>{res("Yes")}, 1000); 
        } else {
            setTimeout(()=>{rej("No");}, 250);
        }
    });
}

const ps = async () => {
    await tf(true).then( (res)=> console.log(res) );
    await tf(false).catch( (rej)=> console.log(rej) );
    console.log("End.");
}

ps();