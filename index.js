const express = require('express');
const bodyParser = require('body-parser');
const { Client, MessageEmbed } = require('discord.js');
const token = 'MTA3OTA4OTkyNzI1NTUwNzA5Ng.GmI-2y.7oSAtz52ggUfwvzTjTfOV7ecP6HF9cwHgch1j8';
const app = express();
const wallet = {};
const userData = {};
const axios = require('axios')
const empty = '⬜';
const player1 = '❌';
const player2 = '⭕';
let board = [
  [empty, empty, empty],
  [empty, empty, empty],
  [empty, empty, empty],
];
const palabras = ['ordenador', 'gato', 'perro', 'elefante', 'jirafa'];
let currentPlayer = player1;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`𝗙𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗺𝗶𝗲𝗻𝘁𝗼 𝗖𝗼𝗿𝗿𝗲𝗰𝘁𝗼`));
const { EventEmitter } = require('events');
EventEmitter.defaultMaxListeners = 30; // Aumenta el número según tus necesidades.

//----------------------------- SISTEMA 24/7 -----------------------------//

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   console.log(`INICIADO COMO BOT: ${client.user.tag}`); 
});


//---------------------------- Comandos HELP ----------------------------//

client.once('ready', () => {
  console.log('SeccIMP LISTO');
});

var prefix = ""

client.on('ready', () => {
  console.log(`[${client.user.tag}] Has Been Loaded`);
  client.user.setActivity(`!help`, {
  type: "WATCHING",
  url: "https://www.twitch.tv/cicuta_games"
});
});



client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!help') {
    const embed = new MessageEmbed()
      .setColor('#FFDF00')
      .setTitle('**Comandos de LuniLuxe**')
      .setDescription('Todos los comandos de diversión y utilidad de LuniLuxe !!')
      .addField('» Comandos',' ')
      .addField(' ','`p!help` : Comandos de juegos')
      .addField(' ','`u!help` : Comandos de utilidad')
      .addField(' ','`!report` : Para reportar un bug')
      .setImage('')
      .setTimestamp()
      .setFooter('©LuniLuxe Services' )

    message.channel.send(embed);
  }
});



client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'p!help') {
    const embed = new MessageEmbed()
      .setColor('#FFDF00')
      .setTitle('🕹️**Entretenimiento**')
      .setDescription(' ')
      .addField('» Comandos',' ')
      .addField(' ','`p!dado` : dado aleatorio del 1-6')
      .addField(' ','`p!tictactoe` : Para jugar al tres en raya.')
      .addField(' ','`p!ahorcado` : Jugar al ahorcado.')
      .addField(' ','`p!polisycacos` : Jugar a los policias y los ladrones.')
      .addField(' ','`p!moneda` : Tirar la moneda de CARA o CRUZ.')
      .setImage('')
      .setTimestamp()
      .setFooter('©LuniLuxe Services' )

    message.channel.send(embed);
  }
});

//---------------------------- SISTEMA DE REPORTES ----------------------------//

client.once('ready', () => {
  console.log('Sistema de reportes LISTO');
});

let reports = [];

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!report') {
    const reportText = args.join(' ');

    // Almacenar el reporte en la variable (esto no es recomendable para producción)
    reports.push({
      author: message.author.tag,
      report: reportText,
      timestamp: new Date().toISOString(),
    });

    message.channel.send('Reporte enviado. Gracias por tu colaboración.');
  }

  if (command === '!viewreports') {
    // Mostrar los reportes almacenados
    let reportList = '';
    for (const report of reports) {
      reportList += `**Reporte por:** ${report.author}\n**Mensaje:**${report.report}\n**Fecha:** ${report.timestamp}\n\n`;
    }

    message.channel.send(reportList || 'No hay reportes almacenados actualmente.');
  }
});



//----------------- Juego RolPlay-----------------//



let wallets = {};

client.once('ready', () => {
  console.log('RP LISTO');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!minar') {
    const moneyEarned = Math.floor(Math.random() * 50) + 1;
    if (!wallets[message.author.id]) wallets[message.author.id] = 0;
    wallets[message.author.id] += moneyEarned;
    message.reply(`Has picado y ganado $${moneyEarned}!`);
  } else if (command === '!robar') {
    const moneyStolen = Math.floor(Math.random() * 30) + 1;
    if (!wallets[message.author.id]) wallets[message.author.id] = 0;
    wallets[message.author.id] += moneyStolen;
    message.reply(`Has robado y ganado $${moneyStolen}!`);
  } else if (command === '!wallet') {
    const money = wallets[message.author.id] || 0;
    message.reply(`\n# LUNIBANK\n \nTu Saldo Bancario : ${money}ł`);
  }
});

//-----------------------CODIGO DEL BOT------------------------//

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "Hola")) {

     msg.channel.send("¡ Hola crack !")
  }
});


client.on("message", msg => {
  
  if (msg.content.startsWith(prefix + "hola")) {

   msg.channel.send("¡ Hola crack !")

  }
});



client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!embed') {
    // Verificar si se proporcionó un texto
    if (args.length === 0) {
      message.channel.send('Debes proporcionar un texto para crear el embed. Por ejemplo: `!embed Este es un mensaje con embed.`');
      return;
    }

    // Obtener el texto ingresado por el usuario
    const text = args.join(' ');

    // Crear el embed
    const embed = new MessageEmbed()
      .setDescription(text)
      .setColor('#00ff00');

    // Enviar el embed en el mismo canal
    message.channel.send(embed);

    // Borrar el mensaje original del usuario
    try {
      await message.delete();
    } catch (error) {
      console.error('Error al borrar el mensaje:', error);
    }
  }
});


client.on('message', (message) => {
  if (message.content === 'p!dado') {
    // Generar un número aleatorio del 1 al 10
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    message.channel.send(`Y en el **LuniDado** a salido : **El numero : ${randomNumber}** `);
  }
});


function printBoard() {
  let boardStr = '';
  for (let row of board) {
    boardStr += row.join(' ') + '\n';
  }
  return boardStr;
}

// Función para verificar si alguien ha ganado
function checkWin() {
  // Comprobación de filas y columnas
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== empty && board[i][0] === board[i][1] && board[i][0] === board[i][2]) return true;
    if (board[0][i] !== empty && board[0][i] === board[1][i] && board[0][i] === board[2][i]) return true;
  }

  // Comprobación de diagonales
  if (board[0][0] !== empty && board[0][0] === board[1][1] && board[0][0] === board[2][2]) return true;
  if (board[0][2] !== empty && board[0][2] === board[1][1] && board[0][2] === board[2][0]) return true;

  return false;
}

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'p!tictactoe') {
    board = [
      [empty, empty, empty],
      [empty, empty, empty],
      [empty, empty, empty],
    ];
    currentPlayer = player1;
    message.channel.send('**Comencemos.** El jugador 1 es ❌ y el jugador 2 es ⭕.\n' + printBoard());
  }

  if (command === '!put') {
    if (args.length !== 2) {
      message.channel.send('Debes proporcionar las coordenadas donde deseas jugar. Por ejemplo: `!play <fila> <columna>`');
      return;
    }

    const row = parseInt(args[0]);
    const col = parseInt(args[1]);

    if (isNaN(row) || isNaN(col) || row < 1 || row > 3 || col < 1 || col > 3) {
      message.channel.send('Por favor, proporciona coordenadas válidas (números del 1 al 3).');
      return;
    }

    if (board[row - 1][col - 1] !== empty) {
      message.channel.send('Esa casilla ya está ocupada. Intenta en otra casilla.');
      return;
    }

    board[row - 1][col - 1] = currentPlayer;
    message.channel.send(printBoard());

    if (checkWin()) {
      message.channel.send(`¡${currentPlayer} ha ganado! 🎉`);
      return;
    }

    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
});




client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'p!moneda') {
    const result = Math.random() < 0.5 ? 'CARA' : 'CRUZ';
    message.channel.send(`Has lanzado la moneda y ha salido: **${result}**!`);
  }
});




client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!serverinfo') {
    // Obtener información del servidor
    const server = message.guild;
    const { name, region, memberCount, owner, createdAt } = server;

    // Crear un nuevo MessageEmbed con la información del servidor
    const embed = new MessageEmbed()
      .setTitle('**Información del Servidor**')
      .addField('Nombre', name)
      .addField('Región', region)
      .addField('Cantidad de Miembros', memberCount)
      .addField('Dueño del Servidor', owner.user.tag)
      .addField('Fecha de Creación', createdAt.toDateString())
      .setColor('#00ff00'); // Puedes cambiar el color aquí

    message.channel.send(embed);
  }
});



let players = {};

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!join') {
    if (players[message.author.id]) {
      message.channel.send('Ya estás en el juego.');
      return;
    }

    players[message.author.id] = {
      id: message.author.id,
      name: message.author.username,
      role: '',
    };

    message.channel.send(`${message.author.username} se ha unido al juego.`);
  }

  if (command === '!choose') {
    if (!players[message.author.id]) {
      message.channel.send('Debes unirte al juego primero usando el comando `!join`.');
      return;
    }

    const role = args[0].toLowerCase();
    if (role !== 'policia' && role !== 'ladron') {
      message.channel.send('Debes elegir un rol válido. Opciones: `policia` o `ladron`.');
      return;
    }

    players[message.author.id].role = role;
    message.channel.send(`${message.author.username} ha elegido el rol de ${role}.`);
  }

  if (command === 'p!polisycacos') {
    const authorId = message.author.id;
    if (!players[authorId]) {
      message.channel.send('Debes unirte al juego primero usando el comando `!join`.');
      return;
    }

    if (!players[authorId].role) {
      message.channel.send('Debes elegir un rol primero usando el comando `!choose [policia|ladron]`.');
      return;
    }

    if (players[authorId].role === 'policia') {
      // Acciones que puede hacer el policía
      message.channel.send('¡Eres un policía! Puedes arrestar a los ladrones usando `!arrestar @jugador`.');
    } else {
      // Acciones que puede hacer el ladrón
      message.channel.send('¡Eres un ladrón! Puedes robar usando `!robar @jugador`.');
    }
  }

  if (command === '!arrestar') {
    const authorId = message.author.id;
    if (!players[authorId] || players[authorId].role !== 'policia') {
      message.channel.send('Debes ser un policía para arrestar.');
      return;
    }

    const target = message.mentions.users.first();
    if (!target || !players[target.id] || players[target.id].role !== 'ladron') {
      message.channel.send('Debes mencionar a un jugador que sea un ladrón para arrestar.');
      return;
    }

    message.channel.send(`${message.author.username} ha arrestado a ${target.username}. ¡Bien hecho!`);
    delete players[target.id];
  }

  if (command === '!robar') {
    const authorId = message.author.id;
    if (!players[authorId] || players[authorId].role !== 'ladron') {
      message.channel.send('Debes ser un ladrón para robar.');
      return;
    }

    const target = message.mentions.users.first();
    if (!target || !players[target.id] || players[target.id].role === 'ladron') {
      message.channel.send('Debes mencionar a un jugador que no sea un ladrón para robar.');
      return;
    }

    message.channel.send(`${message.author.username} ha robado a ${target.username}. ¡Qué ratilla!`);
  }
});

//---------------------------- SISTEMA DE !BORRAR ----------------------------//

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!borrar') {
    // Verificar si el usuario que envía el mensaje tiene permisos para borrar mensajes
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('No tienes permisos para borrar mensajes.');
    }

    // Verificar que se proporcionó un argumento numérico válido
    const cantidad = parseInt(args[0]);
    if (isNaN(cantidad)) {
      return message.reply('Por favor, proporciona un número válido.');
    }

    // Obtener los mensajes a borrar (limite máximo de 100 mensajes por restricción de Discord)
    const messages = await message.channel.messages.fetch({ limit: cantidad + 1 });

    try {
      // Borrar los mensajes
      await message.channel.bulkDelete(messages);
      message.channel.send(`Se han borrado ${cantidad} mensajes.`).then(msg => {
        msg.delete({ timeout: 3000 }); // Borrar el mensaje después de 3 segundos
      });
    } catch (error) {
      console.error('Error al intentar borrar mensajes:', error);
      message.channel.send('Ocurrió un error al intentar borrar los mensajes.');
    }
  }
});

//---------------------------- SISTEMA DE !BAN ----------------------------//

client.on('message', message => {
  // Verificar si el mensaje comienza con el prefijo y si el autor no es un bot.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Obtener los argumentos del comando y el nombre del comando.
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Verificar si el comando es "ban".
  if (command === '!ban') {
    // Verificar si el usuario tiene permisos para banear miembros.
    if (!message.member.hasPermission('BAN_MEMBERS')) {
      return message.reply('No tienes permisos para banear miembros.');
    }

    // Verificar si se menciona a un usuario en el comando.
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply('Debes mencionar a un usuario para banearlo.');
    }

    // Banear al usuario mencionado.
    member
      .ban()
      .then(() => {
        message.reply(`Usuario ${member.user.tag} baneado exitosamente.`);
      })
      .catch(error => {
        console.error('Ocurrió un error al intentar banear al usuario:', error);
        message.reply('No se pudo banear al usuario.');
      });
  }
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!unban') {
    // Verificar si el autor del mensaje tiene permiso para desbanear
    if (!message.member.hasPermission('BAN_MEMBERS')) {
      return message.reply('No tienes permiso para desbanear usuarios.');
    }

    const memberName = args[0];
    if (!memberName) {
      return message.reply('Debes proporcionar el nombre del usuario a desbanear.');
    }

    // Intentar obtener una lista de bans en el servidor
    message.guild.fetchBans().then(bans => {
      const bannedUser = bans.find(user => user.username === memberName);
      if (!bannedUser) {
        return message.reply('El usuario no está baneado en este servidor.');
      }

      // Desbanear al usuario
      message.guild.members.unban(bannedUser.user.id)
        .then(() => {
          message.channel.send(`Usuario ${bannedUser.user.username} desbaneado correctamente.`);
        })
        .catch(err => {
          message.reply('No se pudo desbanear al usuario. Asegúrate de que el bot tenga los permisos adecuados.');
          console.error(err);
        });
    });
  }
});

client.on('message', message => {
  // Verificar que el mensaje inicie con el comando !calculate
  if (message.content.startsWith('!calculate')) {
    // Obtener la expresión matemática del mensaje
    const expression = message.content.slice('!calculate'.length).trim();

    try {
      // Evaluar la expresión matemática
      const result = eval(expression);

      // Enviar el resultado como mensaje de respuesta
      message.channel.send(`El resultado de ${expression} es: ${result}`);
    } catch (error) {
      // En caso de error, enviar un mensaje indicando que la expresión es inválida
      message.channel.send('¡La expresión matemática es inválida!');
    }
  }
});

//---------------------------- PRUEVAS ----------------------------//
var PREFIX = ""
// Configura el ID de tu servidor aquí.
const SERVER_ID = '1079806610911797360';

// Configura el ID del canal de bienvenida y despedida aquí.
const WELCOME_CHANNEL_ID = '1135879783188799509';
const FAREWELL_CHANNEL_ID = '1135879783188799509';

// Objeto para almacenar el registro de experiencia de los miembros.
const userExperience = {};

// Objeto para almacenar las encuestas activas.
const activePolls = {};

// Objeto para almacenar las monedas de los miembros.
const userCoins = {};

// Función para otorgar monedas a un usuario.
function grantCoins(userId, amount) {
  userCoins[userId] = userCoins[userId] || 0;
  userCoins[userId] += amount;
}


// Escucha el evento de nuevo miembro.
client.on('guildMemberAdd', (member) => {
  const welcomeChannel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
  if (welcomeChannel) {
    welcomeChannel.send(`¡Bienvenido/a al servidor, ${member}!`);
  }

  // Agrega al nuevo miembro al registro de experiencia.
  userExperience[member.id] = 0;
});

// Escucha el evento de miembro que deja el servidor.
client.on('guildMemberRemove', (member) => {
  const farewellChannel = member.guild.channels.cache.get(FAREWELL_CHANNEL_ID);
  if (farewellChannel) {
    farewellChannel.send(`Adiós, ${member.user.tag}. ¡Esperamos verte pronto!`);
  }
});

// Comando para consultar el nivel y experiencia del usuario.
client.on('message', (message) => {
  if (message.author.bot || !message.guild) return;

  if (message.content.startsWith(PREFIX + '!nivel')) {
    const userId = message.author.id;
    const userExp = userExperience[userId] || 0;
    const userLevel = Math.floor(Math.sqrt(userExp) / 2);

    message.channel.send(
      `${message.author}, tienes ${userExp} puntos de experiencia y tu nivel es ${userLevel}.`
    );
  }
});

// Comando para crear una encuesta.
client.on('message', (message) => {
  if (message.author.bot || !message.guild) return;

  if (message.content.startsWith(PREFIX + '!poll')) {
    const pollQuestion = message.content.slice(PREFIX.length + 8);
    if (!pollQuestion) {
      message.channel.send('Por favor, proporcione una pregunta para la encuesta.');
      return;
    }

    const pollEmbed = new Discord.MessageEmbed()
      .setColor('#3498db')
      .setTitle('📊 Encuesta')
      .setDescription(pollQuestion)
      .setFooter(`Encuesta creada por ${message.author.tag}`);

    message.channel.send(pollEmbed).then((pollMessage) => {
      pollMessage.react('👍');
      pollMessage.react('👎');

      // Agrega la encuesta al registro de encuestas activas.
      activePolls[pollMessage.id] = {
        question: pollQuestion,
        yes: 0,
        no: 0,
      };
    });
  }
});

// Escucha el evento de reacciones para las encuestas.
client.on('messageReactionAdd', (reaction, user) => {
  if (user.bot || !reaction.message.guild) return;

  const poll = activePolls[reaction.message.id];
  if (poll) {
    if (reaction.emoji.name === '👍') {
      poll.yes++;
    } else if (reaction.emoji.name === '👎') {
      poll.no++;
    }
  }
});

// Comando para mostrar los resultados de una encuesta.
client.on('message', (message) => {
  if (message.author.bot || !message.guild) return;

  if (message.content.startsWith(PREFIX + '!resultados')) {
    const pollId = message.content.slice(PREFIX.length + 11);
    const poll = activePolls[pollId];

    if (!poll) {
      message.channel.send('No se encontró una encuesta con ese ID.');
      return;
    }

    const pollResultEmbed = new Discord.MessageEmbed()
      .setColor('#3498db')
      .setTitle('📊 Resultados de la Encuesta')
      .setDescription(poll.question)
      .addField('👍 Sí', poll.yes, true)
      .addField('👎 No', poll.no, true);

    message.channel.send(pollResultEmbed);
  }
});

// Escucha el evento de nuevo mensaje.
client.on('message', (message) => {
  if (message.author.bot || !message.guild) return;

  // Otorga monedas al usuario por cada mensaje enviado.
  const userId = message.author.id;
  const coinsPerMessage = 5; // Cantidad de monedas por mensaje (puedes ajustarla según tus preferencias).

  grantCoins(userId, coinsPerMessage);
});

// Comando para obtener monedas de un usuario.
client.on('message', (message) => {
  if (message.author.bot || !message.guild) return;

  if (message.content.startsWith(PREFIX + '!monedas')) {
    const userId = message.author.id;
    const userCoinAmount = userCoins[userId] || 0;

    message.channel.send(`${message.author}, tienes ${userCoinAmount} monedas.`);
  }
});

// Comando para otorgar monedas a un usuario (solo el dueño del bot puede usar este comando).
client.on('message', (message) => {
  if (message.author.bot || !message.guild || message.author.id !== 'TU_ID_DE_DUEÑO_DEL_BOT') return;

  if (message.content.startsWith(PREFIX + 'otorgarmonedas')) {
    const args = message.content.slice(PREFIX.length + 15).trim().split(' ');
    const userId = args.shift();
    const amount = parseInt(args.shift());

    if (!userId || isNaN(amount)) {
      message.channel.send('Uso incorrecto del comando. Debes proporcionar un ID de usuario válido y una cantidad de monedas.');
      return;
    }

    grantCoins(userId, amount);
    message.channel.send(`Se han otorgado ${amount} monedas al usuario con ID ${userId}.`);
  }
});

const logChannelID = '1135872900310777881';



const userMessagesLogChannelID = '1136251574990155827';



client.on('message', (message) => {
  // Evita registrar los mensajes del propio bot para evitar bucles infinitos
  if (message.author.bot) return;

  // Registro de actividad de mensajes en la consola
  console.log(`[${message.guild.name}] #${message.channel.name} ${message.author.tag}: ${message.content}`);

  // Envío de registro de mensajes de usuarios a un canal específico
  logEvent('Mensaje enviado por usuario:', message.author, message.content, userMessagesLogChannelID);
});

client.on('channelCreate', (channel) => {
  // Registro de actividad de creación de canales en la consola
  console.log(`[${channel.guild.name}] Canal "${channel.name}" creado (${channel.type})`);

  // Envío de registro de creación de canales a un canal específico
  logEvent('Canal creado:', null, channel.name, specificLogChannelID, channel.type);
});


// Función para enviar el registro a un canal específico
function logEvent(action, author, content, logChannelID, channelType) {
  const logChannel = client.channels.cache.get(logChannelID);
  if (logChannel) {
    const logEmbed = new Discord.MessageEmbed()
      .setColor('#3498db') // Puedes cambiar el color a tu gusto
      .setTitle(action)
      .setDescription(content)
      .setTimestamp();

    if (author) {
      logEmbed.setAuthor(author.tag, author.displayAvatarURL());
    }

    if (channelType) {
      logEmbed.addField('Tipo de Canal', channelType, true);
    }

    logChannel.send(logEmbed);
  }
}

//-prueva-

const tickets = {};

client.on('message', async (message) => {
  // Ignorar mensajes que no comienzan con el prefijo o provienen de otros bots.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Dividir el mensaje en comando y argumentos.
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Comando para abrir un nuevo ticket.
  if (command === '!ticket') {
    // Verificar que el usuario no tenga un ticket abierto.
    if (tickets[message.author.id]) {
      return message.channel.send('Ya tienes un ticket abierto.');
    }

    // Crear un nuevo canal de texto para el ticket.
    const ticketChannel = await message.guild.channels.create(`ticket-${message.author.username}`, {
      type: 'text',
      permissionOverwrites: [
        {
          id: message.guild.id,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: message.author.id,
          allow: ['VIEW_CHANNEL'],
        },
        // Puedes añadir más permisos para otros roles o usuarios aquí.
      ],
    });

    // Guardar la información del ticket en el objeto.
    tickets[message.author.id] = ticketChannel.id;

    // Enviar un mensaje de bienvenida al usuario en el nuevo canal de texto del ticket.
    ticketChannel.send(`¡Hola ${message.author}! Un miembro del equipo de soporte se pondrá en contacto contigo pronto.`);

    // Notificar al usuario que su ticket ha sido creado.
    message.channel.send('Tu ticket ha sido creado.');
  }

  // Comando para cerrar un ticket.
  if (command === '!cerrar') {
    // Verificar que el usuario tenga un ticket abierto.
    if (!tickets[message.author.id]) {
      return message.channel.send('No tienes un ticket abierto.');
    }

    // Obtener el canal del ticket abierto.
    const ticketChannel = message.guild.channels.cache.get(tickets[message.author.id]);

    // Eliminar el canal del ticket y borrar la información del objeto.
    if (ticketChannel) {
      ticketChannel.delete();
    }
    delete tickets[message.author.id];

    // Notificar al usuario que su ticket ha sido cerrado.
    message.channel.send('Tu ticket ha sido cerrado.');
  }
});
// prueva

client.on('message', message => {
  if (message.content === '!servers') { // Comando para obtener la lista de servidores
    const serverList = client.guilds.cache.map(guild => `ID: ${guild.id} - Nombre: ${guild.name}`).join('\n');
    message.channel.send(`Estoy conectado en los siguientes servidores:\n${serverList}`);
  }
});

client.on('message', message => {
  if (message.author.bot) return; // Evitar responder a otros bots
  if (!message.content.startsWith('!anunciar')) return; // Verificar el comando

  // Obtener el mensaje después de "!anunciar "
  const announcement = message.content.slice('!anunciar '.length);

  // Construir el mensaje embebido
  const embed = new Discord.MessageEmbed()
    .setColor('#0099ff') // Color del borde del mensaje embebido
    .setTitle('Anuncio')
    .setDescription(announcement)
    .setTimestamp();

  // Enviar el mensaje de anuncio a todos los servidores en los que está presente el bot
  client.guilds.cache.forEach(guild => {
    const channel = guild.systemChannel || guild.channels.cache.first();
    if (channel && channel.type === 'text') {
      channel.send(embed)
        .then(() => console.log(`Anuncio enviado en el servidor "${guild.name}"`))
        .catch(error => console.error(`Error al enviar el anuncio en el servidor "${guild.name}":`, error));
    }
  });
});






const mySecret = "MTA3OTA4OTkyNzI1NTUwNzA5Ng.GmI-2y.7oSAtz52ggUfwvzTjTfOV7ecP6HF9cwHgch1j8"
client.login(mySecret);