const fetchData = ()=>{
    return new Promise ((resolve,reject)=> 
    {
        setTimeout(()=>{
          reject(new Error("api call faild"))
        }, 1000)
    }
    )
}




const awaitCall = async() =>{
    try{
        const response = await fetchData()
        
        console.log(response.data)
    }
    catch(error){
        console.log("oops , domething went wrong",error.message)

    }
}
awaitCall()