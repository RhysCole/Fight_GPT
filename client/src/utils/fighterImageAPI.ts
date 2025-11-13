import axios from "axios"; 

const BASE_URL = "https://api.octagon-api.com/fighter/";

export const fetchImageURL = async (fighterName: string) => {
    try{
        const names = fighterName.toLowerCase().split(" ");
    
        const response = await axios.get(`${BASE_URL}${names[0]}-${names[1]}`)
        return response.data.imgUrl
    }catch(err){
        console.log("fight is not good enough to have an image, skill issue :(");
        return "https://static.wikia.nocookie.net/villains/images/8/83/Fat_Bastard.PNG/revision/latest?cb=20180902160300"
    }
}
