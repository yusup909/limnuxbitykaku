let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Berikut ini adalah daftar menu NayLa-B0TZ.\nSilahkan tekan tombol Click Here untuk melihat sub-menu NAYLA-B0TZ.\n\nJika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.",
                        "description": "Klik aja CLICK HERE nya ya",
                        "buttonText": "CLICK HERE",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                            	"rows":[{
                                    "title": `Menu Simple`,
                                    "description": "\nMenu yang bisa di akses dengan mudah",
                                    "rowId": `.smenu`
                                  },{
                                    "title": "Allmenu",
                                    "description": "\nSemua perintah yang di akses dengan 1 chat",
                                    "rowId": `.allmenu`
                                  },{
                                   	"title": "Rules",
                                    "description": "\nUser yang pintar pasti selalu mematuhi peraturan",
                                    "rowId": `.rules`      
                                  },{
                                    "title": "Group Official",
                                    "description": "\nGroup official dari NayLa-B0TZ",
                                    "rowId": `.jarangmenu`               
                                  },{
                                    "title": "Status Bot",
                                    "description": "\nStatus dan Informasi dari NayLa-B0TZ",
                                    "rowId": `.status`               
                                  },{
                                    "title": "Premium - Sewa",
                                    "description": "\nUntuk kamu yang ingin melihat daftar harga sewa dan premium",
                                    "rowId": `.beli`                         
                                  },{
                                    "title": "Owner",
                                    "description": "\nPemilik NayLa-B0TZ",
                                    "rowId": `.owner`      
                                   }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler
