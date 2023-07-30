import axios from 'axios'


export  const seacrhLocation = async (search)=>{
    const searchLoc = await axios.get(`https://geocode.maps.co/search?q={${search}}`)
    return searchLoc
}