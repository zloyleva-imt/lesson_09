console.log('App was loaded...')

axios
    .get('https://rickandmortyapi.com/api/character/',)
    .then(res => {
        // const { devices } = res
        // // const devices = res.devices;

        // const obj = new Object;
        // devices.forEach(el => Array.isArray(obj[el.placeRu]) 
        //     ? 
        //         obj[el.placeRu].push(el) 
        //     : 
        //         obj[el.placeRu] = [el])

        // console.log();
        const {pages} = res.data.info

        // 'https://rickandmortyapi.com/api/character/?page=1';

        // const linksArr = [...new Array(pages)].map((el,i) => `https://rickandmortyapi.com/api/character/?page=${i+1}`)
        // console.log(linksArr);

        // Promise.all(linksArr.map(el => axios.get(el)))
        //     .then(res => console.log(res));

        localStorage.setItem('password', 'super strong password')

        Promise.all([...new Array(pages)].map((el,i) => axios.get(`https://rickandmortyapi.com/api/character/?page=${i+1}`)))
            .then(res => console.log(res));
    })