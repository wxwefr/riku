const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "cursed",
    category: "fun",
    description: "Sends an cursed image",
    run: async (client, message, args) => {
        const subReddits = ["Cursed_Images"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/Cursed_Images/`)
            .setURL(`https://reddit.com/r/Cursed_Images/`);

        message.channel.send(embed);
    }
}