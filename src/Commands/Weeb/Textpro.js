const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')

module.exports = class command extends Command {
    constructor() {
        super('textpro2', {
            description: 'Sends random Textpro image',
            category: 'weeb',
            usage: 'Textpro for 2 query',
            exp: 20,
            cooldown: 5
        })
    }

        execute = async (m,args) => {

if (!text1 || !text2 || !text3) return m.reply(`query not provided!! Example: ${process.env.PREFIX}Textpro Rin Toshaka`)
        let text = "Made by Rin-Toshaka"
        let text1 = args.split(" ")[0]
        let text2 = args.split(" ")[1]
        let text3 = args.split(" ")[2]

        const image = await this.helper.utils.fetch(`https://smiling-hosiery-bear.cyclic.app/weeb/${text1}?text1=${text2}&text2=${text3}`)
        return void (await this.client.sendMessage(m.from, {image: {url: images.data.url} , caption: text},{quoted: m.message}))
    }
}
