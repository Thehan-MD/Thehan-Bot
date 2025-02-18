const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});

client.on('qr', (qr) => {
    console.log('Scan this QR code to log in:', qr);
});

client.on('ready', () => {
    console.log('Thehan Bot is ready!');
});

client.on('message', async (message) => {
    if (message.body.toLowerCase() === '.alive') {
        message.reply('ᴘᴀᴋᴇ ᴍᴅ ɪꜱ ᴏɴʟɪɴᴇ ɴᴏᴡ ❗\n𝐁𝐞𝐬𝐭 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭\n> ʙʏ xᴅ ꜱᴀᴜʀᴏɴ');
    }
});

client.initialize();
