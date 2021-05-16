module.exports = {
    kod: "not-temizle",
    async run (client, message){
      if(!message.guild) return;
       const Discord = require('discord.js')
       const db = require('../database/index')
       const sonuç = message.content.split(" ").slice(1);
       const sil = sonuç.join(" ");
       if(db.kontrol(message.author.id)){db.sil(message.author.id)} 
       if(db.kontrol("2_" + message.author.id)){db.sil("2_" + message.author.id)} 
       if(db.kontrol("3_" + message.author.id)){db.sil("3_" + message.author.id)} 
       if(db.kontrol("4_" + message.author.id)){db.sil("4_" + message.author.id)} 
       if(db.kontrol("5_" + message.author.id)){db.sil("5_" + message.author.id)} 
       if(db.kontrol("6_" + message.author.id)){db.sil("6_" + message.author.id)} 
       if(db.kontrol("7_" + message.author.id)){db.sil("7_" + message.author.id)} 
       if(db.kontrol("8_" + message.author.id)){db.sil("8_" + message.author.id)} 
       if(db.kontrol("9_" + message.author.id)){db.sil("9;_" + message.author.id)} 
       if(db.kontrol("10_" + message.author.id)){db.sil("10_" + message.author.id)} 
       if(db.kontrol("11_" + message.author.id)){db.sil("11_" + message.author.id)} 
       if(db.kontrol("12_" + message.author.id)){db.sil("12_" + message.author.id)} 
       if(db.kontrol("13_" + message.author.id)){db.sil("13_" + message.author.id)} 
       if(db.kontrol("14_" + message.author.id)){db.sil("14_" + message.author.id)} 
       if(db.kontrol("15_" + message.author.id)){db.sil("15_" + message.author.id)} 
       if(db.kontrol("16_" + message.author.id)){db.sil("16_" + message.author.id)} 
       if(db.kontrol("17_" + message.author.id)){db.sil("17_" + message.author.id)} 
       if(db.kontrol("18_" + message.author.id)){db.sil("18_" + message.author.id)} 
       if(db.kontrol("19_" + message.author.id)){db.sil("19_" + message.author.id)} 
       if(db.kontrol("20_" + message.author.id)){db.sil("20_" + message.author.id)} 
message.reply('Notlarınızın hepsi başarıyla temizlendi')

      
       
    }
  }
  
