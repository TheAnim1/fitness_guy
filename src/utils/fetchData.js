export const excerciseOption ={

        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
            'X-RapidAPI-Key': 'ac886ecc9cmsha0ad7cf3814ac9dp1dbe18jsn784548e1530c',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json()
    return data; 
}