let handler = async m => m.reply(`
*LIST GC BOT*

*GROUP 1*
https://chat.whatsapp.com/HTex6aEl1tv9PjtNbKXl9C
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

module.exports = handler
