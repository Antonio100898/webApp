import axios from "axios"


const newsInstance = axios.create({
    baseURL: "https://newsapi.org/",
    headers: {
        "x-api-key": "9c6478fa0cd24f7bb23e419587698f95"
    }
})

export const api = {
    async getNews() {
        try {
            const response = await newsInstance.get("v2/top-headlines?country=us")
            if (response.status === 200) return response.data
        } catch(error) {
            console.log(error)
        }
    }

}