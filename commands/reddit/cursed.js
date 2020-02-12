const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "cursed",
    category: "reddit",
    description: "Sends an cursed image",
    run: async (client, message, args) => {
<<<<<<< HEAD
        const subReddits = ["Cursed_Images", "cursedimages", "MakeMeSuffer","cursed_cats", "cursedvideos", "cursedcomments", "cursed_or_blessed", "cursedmemes", "CursedMinecraft"];
=======
        const subReddits = ["Cursed_Images", "cursedimages", "MakeMeSuffer","cursed_cats", "cursedvideos", "cursedcomments", "cursed_or_blessed", "cursedmemes"];
>>>>>>> 8eb7e6f23c3e2fb89b7e1b210e89d3ee959c86e2
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