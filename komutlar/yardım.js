module.exports = {
  kod: "yardım",
  async run (client, message){
    if(!message.guild) return;

    const Discord = require('discord.js')
    const kanal = new Discord.MessageEmbed()

      .setTitle("Bot Komutları")
      .setColor("RANDOM")
      .setThumbnail(" ")
      .addField("`*yardım`", "Botun kodlarını gösterir.")
      .addField("`*not-oluştur <notunuz>`", "Not almanızı sağlar.")
      .addField("`*notlarım`", "Notlarınızı gösterir.")
      .addField("`*not-temizle`", "Notlarınızın hepsini temizler.")


    .addField("Linkler:", "**[Davet Et](https://discord.com/api/oauth2/authorize?client_id=835480508129214465&permissions=71680&scope=bot) | [Destek](https://discord.gg/vk4pcuK8Y9)**")
    message.channel.send(kanal);

  }
}
