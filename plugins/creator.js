const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;Zifabotz-MD;;;\nFN:zifabotz-MD\nitem1.TEL;waid=6285828764046:+62 858-2876-4046\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:zifabotz-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
