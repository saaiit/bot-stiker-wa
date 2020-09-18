const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

create().then((client) => start(client));

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);
    if (msg.body === "!cek") {
      client.sendText(msg.from, "👋 Hello! BOT AKTIF");
      client;
    }
	if (msg.body === "!cmd") {
      client.sendText(msg.from, `
	  !cek = untuk cek bot aktif atau engga
	  !jadwal = Menunjukan Matkul Kelas TI R1I
	  !stiker = Buat stiker pake gambar
	  !rules = cek peraturan bot ini`);
      client;
    }
	if (msg.body === "!rules") {
      client.sendText(msg.from, ` 
	Rules ... !!!


• *Jangan spam bot ..*
• *Jangan rusuh kalo bot gaaktif*
• *Jangan telfon / vc bot nya ..*
     ( _auto block_ )
• *Sesuai kan perintah dengan formatnya..*
_salah format dan bot error = block_

Konsekuensi :

 Melanggar rules bot akan keluar 

Rules ini untuk kenyamanan semua yang memakai
bot ini


	`);
      client;
    }
	if (msg.body === "P") {
      client.sendText(msg.from, "Iya?");
      client;
    }
	if (msg.body === "!test") {
      client.sendText(msg.from, `
		*SELAMAT DATANG DI BOT SAIT ^_^* 

_Hai kawan, sebelum memakai bot ini patuhi rules dulu ya ._
Ketikan *!rules* untuk melihat rules memakai bot ini`);
      client;
    }
	if (msg.body === "Assalamualaikum" || msg.body === "Assalamuallaikum" || msg.body === "assalamualaikum" || msg.body === "assalamuallaikum" || msg.body === "Assalamu'alaikum") {
      client.sendText(msg.from, "Waalaikumusallam");
      client;
    }
	if (msg.body === "sait" || msg.body === "Sait" || msg.body === "it" || msg.body === "It") {
      client.sendText(msg.from, "👋 Iyaa");
      client;
    }
	
	
	if (msg.body === "!jadwal") {
      client.sendText(msg.from, `
				✨--JADWAL MATKUL--✨
 ----------------------------------------------	
👉Senin 09.10-10.50 - Pancasila
👩Dosen = Titin Ariska Sirnayatin, M.Pd.

👉Senin 10.50-13.30 - Kalkulus  
👨Dosen = Erlando Doni Sirait, M.Pd.
 ----------------------------------------------
 ----------------------------------------------
👉Selasa 07.30-09.10 - Algoritma 
👩Dosen = Dewi Mustari, M.Kom. 

👉Selasa 09.10-10.50 - Pemrograman 
👨Dosen = Bramantara Yudha, M.Kom.
 -----------------------------------------------
 -----------------------------------------------
👉Kamis 10.50-13.30 - Inggris 
👨Dosen = Christanto Dwi Nugroho, S.E., M.Pd.

👉Kamis 09.10-10.50 - Indonesia 
👩Dosen = Endang Sulistyaniningsih, M.Pd.
 -----------------------------------------------
 -----------------------------------------------
👉Jum'at 07.30-09.10 - PTI 
👩Dosen = Aprilia Sulistyohati, S.Kom., M.Eng.
 
👉Jum'at 09.10-10.50 - Agama 
👨Dosen = Fery Rahmawan Asma, Lc., M.A. 
 ------------------------------------------------
`);
      client;
    }
    






	else if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}