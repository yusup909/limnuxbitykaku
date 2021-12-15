let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
ISI INI PAKE LINK GC LU
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
