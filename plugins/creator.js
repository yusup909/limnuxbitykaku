function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '628818770766', owname, m)
stc = conn.sendContact(m.chat, '628818770766', owname, m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler

let owname = global.oname
