module.exports = {
  kod: "not-oluştur",
  async run (client, message, args){
    const db = require('../database/index')
    if(!message.guild) return;
    const sonuç = message.content.split(" ").slice(1);
    const not = sonuç.join(" ");
    
    if(!not) return message.reply("Herhangi bir not girmedin.")
 
    


if(not.length > 100) return message.reply('Not oluştururken en fazla 100 karakter limit bulunmaktadır.')



    if(!db.kontrol(message.author.id)) {
      db.yaz(message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("2_" + message.author.id)) {
      db.yaz("2_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("3_" + message.author.id)) {
      db.yaz("3_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("4_" + message.author.id)) {
      db.yaz("4_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("5_" + message.author.id)) {
      db.yaz("5_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("6_" + message.author.id)) {
      db.yaz("6_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("7_" + message.author.id, not)) {
      db.yaz("7_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("8_" + message.author.id, not)) {
      db.yaz("8_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("9_" + message.author.id, not)) {
      db.yaz("9_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("10_" + message.author.id, not)) {
      db.yaz("10_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("11_" + message.author.id, not)) {
      db.yaz("11_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("12_" + message.author.id, not)) {
      db.yaz("12_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("13_" + message.author.id, not)) {
      db.yaz("13_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("14_" + message.author.id, not)) {
      db.yaz("14_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("15_" + message.author.id, not)) {
      db.yaz("15_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("16_" + message.author.id, not)) {
      db.yaz("16_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("17_" + message.author.id, not)) {
      db.yaz("17_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("18_" + message.author.id, not)) {
      db.yaz("18_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("19_" + message.author.id, not)) {
      db.yaz("19_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else if (!db.kontrol("20_" + message.author.id, not)) {
      db.yaz("20_" + message.author.id, not)
      message.reply(`Notunuz başarıyla oluşturuldu. Önizleme:\n${not}`)

    } else {
      message.reply('En fazla 20 adet not oluşturabilirsiniz.')
    }
 }}
