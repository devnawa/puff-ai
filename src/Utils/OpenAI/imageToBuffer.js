import "dotenv/config"

export default async (response) => {
    try {
        if (response.b64_json) {
            return Buffer.from(response.b64_json, "base64")
        } else if (response.url) {
            const image = await fetch(response.url)
            return Buffer.from(await image.arrayBuffer())
        } else {
            if (process.env.NODE_ENV === "development") console.error("Invalid response format")
            return null
        }
    } catch (e) {
        if (process.env.NODE_ENV === "development") console.error(e)
        return null
    }
}