import { SlashCommandBuilder } from "discord.js";
import generate from "../../Utils/OpenAI/generate.js";
import imageToBuffer from "../../Utils/OpenAI/imageToBuffer.js";
import "dotenv/config"

export default {
    data : new SlashCommandBuilder()
    .setName("generate")
    .setDescription("Generate an PUFF DRAGON based on your prompt")
    .addStringOption(option => option
        .setName("prompt")
        .setDescription("Describe the PUFF DRAGON you want to generate")
        .setRequired(true)
        .setMaxLength(2000)
    ),
    execute : async interaction => {

        const userPrompt = interaction.options.getString("prompt")

        if(!userPrompt) return interaction.reply({ content : "Please provide a prompt", ephemeral : true })

        await interaction.deferReply({ ephemeral : true})

        const image = await generate(userPrompt, interaction.user.id)

        if(!image) return interaction.editReply({ content : "An error occurred while generating the image", ephemeral : true })

        const buffer = await imageToBuffer(image)

        if(!buffer) return interaction.editReply({ content : "An error occurred while converting the image", ephemeral : true })

        await interaction.channel.send({ content : `${interaction.user}'s Puff Dragon!`, files : [buffer] }).then(async () => {
            await interaction.editReply({ content : "Image generated successfully", ephemeral : true })
        }).catch(async (err) => {
            if(process.env.NODE_ENV === "development") console.error(err)
            await interaction.editReply({ content : "An error occurred while sending the image", ephemeral : true })
        })

    }
}