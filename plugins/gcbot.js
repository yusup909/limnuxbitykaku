let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
ISI SENDIRI
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
