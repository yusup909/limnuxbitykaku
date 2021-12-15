let handler = async m => m.reply(`
_*TOT*_
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /Ngen|ngen/i

module.exports = handler
