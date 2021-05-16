const fs = require('fs')

class DB {

  constructor(){

  }

  yaz(veri, değer){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] = değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
  }

  bul(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[veri]
  }

  kontrol(veri){
    if(!veri) throw new TypeError("Veri Girmediniz")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[veri] ? true : false
  }

  sil(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    delete dosya[veri]
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
  }

 yedekle(dosyaAdı){
  if(!dosyaAdı) throw new TypeError("Dosya Adı Girmediniz")
  const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
  return fs.writeFileSync(`${dosyaAdı}.json`, JSON.stringify(dosya, null, 2))
}

topla(veri, değer){
  if(!veri) throw new TypeError("Veri Girmediniz")
  if (typeof değer !== 'number') throw new TypeError('Değer Olarak Lütfen Bir Sayı Giriniz')
  if (!this.kontrol(veri)) throw new TypeError('Veri Olarak Giriğiniz Değer Veri Tabanında Bulunmamaktadır')
  if (typeof this.bul(veri) !== 'number') throw new TypeError('Sayı Ekleyeceğiniz Değer Bir Sayı Olmalı')
  const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
  dosya[veri] += değer
  return fs.writeFileSync(`database.json`, JSON.stringify(dosya, null, 2))
}

çıkar(veri, değer){
  if(!veri) throw new TypeError("Veri Girmediniz")
  if (typeof değer !== 'number') throw new TypeError('Değer Olarak Lütfen Bir Sayı Giriniz')
  if (!this.kontrol(veri)) throw new TypeError('Veri Olarak Giriğiniz Değer Veri Tabanında Bulunmamaktadır')
  if (typeof this.bul(veri) !== 'number') throw new TypeError('Sayı Ekleyeceğiniz Değer Bir Sayı Olmalı')
  const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
  dosya[veri] -= değer
  return fs.writeFileSync(`database.json`, JSON.stringify(dosya, null, 2))
}

sıfırla(){
  const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
  return fs.writeFileSync(`database.json`, JSON.stringify({}, null, 2))
}

}

module.exports = new DB()
