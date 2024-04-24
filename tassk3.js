const delay = ( ms)=>{
    return new Promise ((resolve)=> setTimeout(resolve,ms))
}

const asyncfunction1 = async()=>{
    console.log("starting fun1")
    await delay(1000)
    console.log("function 1 complete")
}

const asyncfunction2 = async()=>{
    console.log("starting fun1")
    await delay(1000)
    console.log("function 2 complete")
}

const asyncfunction3 = async()=>{
    console.log("starting fun1")
    await delay(1000)
    console.log("function 3 complete")
}

const chainedAsyncFunctions = async ()=>{

    await asyncfunction1()
    await asyncfunction2()
    await asyncfunction3()

}
chainedAsyncFunctions()