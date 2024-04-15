const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token obtained from BotFather
const bot = new TelegramBot('7040589763:AAEnHErp1Pm5XvJtLyHj4fPF2PtJHiPYdkI', { polling: true });

// Start command handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'How can I help you?', {
        reply_markup: {
            keyboard: [['I got scammed']],
            resize_keyboard: true
        }
    });
});

// Handle 'I got scammed' button click
bot.onText(/I got scammed/, (msg) => {
   const chatId = msg.chat.id;
   bot.sendMessage(chatId, `GOT TO @fromscamer THIS CHANNEL AND COPY AND FILL INFORMATION AND SEND TO ME`);
});

// Handle messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text) {
        // Check if the message is "hi" and respond with a greeting
        if (msg.text.toString().toLowerCase() === 'hi') {
            bot.sendMessage(chatId, 'Hello there! How can I assist you?');
        } else {
            // Compile details and send report to admin channel
            const report = `Scam Report:\n\nUsername: ${msg.from.username}\nScammer Profile: ${msg.text}`;
            // Replace 'ADMIN_CHANNEL_ID' with your admin channel ID
            const adminChannelId = '-1002038381938';
            bot.sendMessage(adminChannelId, report);
            bot.sendMessage(chatId, 'Thank you for reporting. Our team will review the information.');
        }
    } else {
        bot.sendMessage(chatId, 'Please provide text input.');
    }
});
