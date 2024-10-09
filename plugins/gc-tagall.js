let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `@inkaikos_ff:  ${pesan}`
  let teks = `💎𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝙂𝙀𝙉𝙀𝙍𝘼𝙇🐍
   ${oi}\n\n 🐸𝐒𝐀𝐏𝐈𝐓𝐎 𝐁𝐎𝐓🐸\n`
  for (let mem of participants) {
  teks += `🎀➤ @${mem.id.split('@')[0]}\n`}
  teks += `➥ 𝐏𝐚𝐫𝐚 𝐚𝐝𝐪𝐮𝐢𝐫𝐢𝐫 𝐮𝐧 𝐛𝐨𝐭 𝐜𝐨𝐦𝐮𝐧𝐢𝐜𝐚𝐭𝐞 𝐜𝐨𝐧𝐦𝐢𝐠𝐨:
@yaritza.dzn05 `
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler