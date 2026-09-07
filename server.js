// server setup, main entry point for the application
require('dotenv').config();

const port = process.env.PORT || 3000;
const whatsapp = process.env.WHATSAPP_NUMBER;

console.log('Server starting...');
console.log('Port: ${port}');
console.log('WhatsApp: ${whatsapp}');