import { OpenAIImageAPIConfig } from "../../config.js"
import client from "./client.js"
import "dotenv/config"

export default async (userPrompt, userId) => {

    return await client.images.generate({
        prompt: `This is a Puff Dragon Generation machine. People describe their Puff Dragons and I generate them. Here is the foundation of a Puff Dragon : ${OpenAIImageAPIConfig.BASE_PROMPT}. And user prompt is : ${userPrompt}. Now, generate this Puff Dragon.`,
        n: OpenAIImageAPIConfig.NUMBER_OF_IMAGES,
        size: OpenAIImageAPIConfig.IMAGE_SIZE,
        response_format: OpenAIImageAPIConfig.RESPONSE_FORMAT,
        model: OpenAIImageAPIConfig.MODEL,
        quality: OpenAIImageAPIConfig.QUALITY,
        style: OpenAIImageAPIConfig.STYLE,
        user: userId
    }).then((response) => {
        return response.data[0]
    }).catch(error => {
        if(process.env.NODE_ENV === "development") console.error(error)
        return null
    })

    }