//promises

const getData1 = (error) => new Promise((resolve, reject) => {
    if(!error){
        resolve({
            nombre: 'Jair',
            apellido: 'Castaneda',
        })
    }else{
        reject('No pudimos obtener los datos');
    }
})

const getData2 = (error) => new Promise((resolve, reject) => {
    if(!error){
        resolve({
            nombre: 'Berenice',
            apellido: 'Castaneda',
        })
    }else{
        reject('No pudimos obtener los datos 2');
    }
})

getData1(false)
    .then((data) => {
        console.log(data);
        return getData2(false)
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });

// const getData2 = new Promise((resolve, reject) => {
// });

// function getData(){
//     return new Promise((resolve, reject) => {
//     });
// }


//async function
const getData = (error) => new Promise((resolve, reject) => {
    if(!error){
        resolve({
            nombre: 'Jair',
            apellido: 'Castaneda',
        })
    }else{
        reject('No pudimos obtener los datos');
    }
})

const getData3 = (error) => new Promise((resolve, reject) => {
    if(!error){
        resolve({
            nombre: 'Berenice',
            apellido: 'Castaneda',
        })
    }else{
        reject('No pudimos obtener los datos 2');
    }
})

const main = async () => {
    try{
        let result = await getData(false);
        let result2 = await getData3(true);
        console.log(result);
        console.log(result2);
    }catch(error){
        console.log(error);
    }
}

main();