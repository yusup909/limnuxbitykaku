let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hayo ngapain mau pasang ya?*
*Jangan la bwang hargai pembuat nya*
*dengan cara beli atau donasi klik aja button di bawah ini*
`.trim()
conn.sendButton(m.chat, info, wm, 'Beli', `.beli`, m)


}
handler.help = ['sc']
handler.tags = ['tutor']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
 
let wm = global.botwm
