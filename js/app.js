console.log('App was loaded...')

// axios
//     .get('https://zloyleva-imt.github.io/lesson_09/js/data.json')
fetch('https://zloyleva-imt.github.io/lesson_09/js/data.json')
    .then(res => res.json())
    .then(res => {
        const { devices } = res
        // const devices = res.devices;

        const obj = new Object;
        devices.map(el => Array.isArray(obj[el.placeRu]) 
            ? 
                obj[el.placeRu].push(el) 
            : 
                obj[el.placeRu] = [el])

        console.log(obj);
    })