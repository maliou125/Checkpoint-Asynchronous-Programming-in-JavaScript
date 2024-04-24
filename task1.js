const delay = ( ms)=>{
    return new Promise ((resolve)=> setTimeout(resolve,ms))
}
const iterateWithAsyncAwait = async (arr) => {
for(const value of arr){
    console.log(value)
    await delay(1000)
}
}
iterateWithAsyncAwait(["arr1","arr2","arr3"])
