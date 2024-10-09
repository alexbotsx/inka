const handler = async (m, {conn, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.info_groupsofc

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `${tradutor.texto1[0]}

${tradutor.texto1[1]}
1.- https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ==

2.- https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ==

3.- https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ==

4.- https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ==

> Sunlight Team  :

1.- https://whatsapp.com/channel/0029Vam7yUg77qVaz3sIAp0z

2.- https://chat.whatsapp.com/Fy74b6fgE9SJJpHVi6CKJY`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ==`},
    'mimetype': `application/${document}`,
    'fileName': `${tradutor.texto2}`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ==',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': `${tradutor.texto3}`,
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/yaritza.dzn05?igsh=MXg2dWhjdTV0eWxvaQ=='}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
