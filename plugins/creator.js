function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, global.owner[0], owname, m)
stc = conn.sendContact(m.chat, global.owner[0], owname, m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler

let owname = global.oname
