//#region OpenAI Image API Config

const NUMBER_OF_IMAGES = 1
const IMAGE_SIZE = "1024x1024"
const RESPONSE_FORMAT = "b64_json"
const MODEL = "dall-e-3"
const QUALITY = "hd"
const STYLE = "vivid"
const BASE_PROMPT = "Create an image of a whimsical, animated baby dragon. The dragon has large, expressive eyes that give it a charming appearance. Its scales are black, with a hint of dark grey, and they cover its body in a pattern that suggests toughness yet remains cute. The dragon's underbelly should be a soft, cream color, creating a striking contrast with its darker scales. It has small, pointed horns atop its head and tiny wisps of smoke drifting from its nostrils, suggesting its fiery breath. The dragon's pose is innocent and endearing, with a slight tilt of the head that conveys curiosity. The background should be a neutral, nondescript gradient that allows the character to be the main focus of the image. The overall feel of the picture is warm and endearing, suitable for a character in a family-friendly animated film."

export const OpenAIImageAPIConfig = {
    NUMBER_OF_IMAGES,
    IMAGE_SIZE,
    RESPONSE_FORMAT,
    MODEL,
    QUALITY,
    STYLE,
    BASE_PROMPT
}

//#endregion


