import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/𝗦𝗔𝗣𝗜𝗧𝗢 𝗕𝗢𝗧/master/src/JSON/Messi.json`)).data;
  const url = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m);
};
// conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi'];
handler.tags = ['internet'];
handler.command = /^(messi)$/i;
export default handler;
