const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "blessed",
    category: "fun",
    description: "Sends a blessed image",
    run: async (client, message, args) => {
        const subReddits = ["blessedimages","Blessed_Images","blessedcomments","BlessedJoJo","cursed_or_blessed"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}