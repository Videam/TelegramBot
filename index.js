/*
Ringraziamento a @Pinperepette per i suoi be.stemmia e Saputello, che hanno ispiriato (e anche tanto) il bot.
https://github.com/Pinperepette
*/
const Telegraf = require('telegraf');
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const bot = new Telegraf(""); //Aggiungi tra "" il Token che ti da BotFather dopo aver configurato il tuo bot

//Dico che quando joini dal bot ti risponde e se proprio ti servono ti da gli aiuti
bot.start((msg) => msg.reply('Come dare senso ad un client di messaggistica.'));
bot.help((msg) => msg.reply('Usa /scegli per la magia o scrivi'));

//Creo il menu bello di scelta su Telegram
bot.command('scegli', (msg) => {
    return msg.replyWithHTML('<b>bestemmia</b> o <b>saputello?</b>', Extra.markup(
        Markup.keyboard(['bestemmia', 'saputello'])
    ))
});

//Dico al bot di ascoltare, altrimenti fa quello che vuoie o.O
bot.hears(/bestemmia/i, (msg) => {
    var bestArray = ['dio porco ', 'cristo la madonna ', 'madunassa ', 'gesù inchiodato sulla croce ', 'madonna puttanaccia ', 'dio culo infiammato ', 'dio can ', 'Ave Maria piena di Merda ', 'Dio, Madonna e tutti gli angeli in colonna ','Gesù scalzo in una valle di chiodi ', 'Gesù cieco in una valle di spigoli ', 'Porco Dio e Padre Pio ', 'Bastardo il clero ', 'Madonna cagna ', 'Dio cantante, Madonna musicante, Giuseppe batterista e Cristo in autopista ', 'Maria putrefatta ', 'Dio bastardo ', 'Madonna inculata da cristo, quel bastardo']
    var random = Math.floor(Math.random()*bestArray.length);
    var stampa = bestArray[random];
    return msg.reply(stampa);

});

//Muro tanto per
bot.hears(/saputello/i, (msg) => {
    var frase_a= ["L'utenza potenziale ","Il bisogno emergente ","Il quadro normativo ","L'attuale ottimizzazione ","La nuova organizzazione ","L'approccio programmatico ","Il contesto motivazionale ","Il criterio metodologico ","Il modello di sviluppo ", "Il metodo partecipativo "]
    var frase_b = ["si caratterizza per ", "privilegia ", "prefigura ", "riconduce a sintesi ", "persegue ", "estrinseca ", "si propone ", "presuppone ", "porta avanti ","auspica "]
    var frase_c = ["il ribaltamento della logica preesistente ","il superamento di ogni ostacolo e/o resistenza ","un organico collegamento interdisciplinare ed una prassi di lavoro di gruppo ","la puntuale corrispondenza fra obiettivi e risorse ","la verifica critica degli obiettivi istituzionali e l'individuazione di fini quantitativi ","il riorientamento delle linee di tendenza in atto ","l'accorpamento delle funzioni ed il decentramento decisionale ","la ricognizione del bisogno emergente e della domanda non soddisfatta ","la riconversione ed articolazione periferica dei servizi ","un corretto rapporto fra strutture e sovrastrutture "]
    var frase_d = ["nel primario interesse di tutti, ","senza pregiudicare l'attuale livello delle prestazioni, ","al di sopra di interessi e pressioni di parte, ","secondo un modulo di interdipendenza orizzontale, ","in una visione organica e ricondotta ad unità, ","con criteri non dirigistici, ","al di là delle contraddizioni e difficoltà iniziali, ","in maniera articolata e non totalizzante, ","attraverso meccanismi di coinvolgimento, ","senza precostituzione delle risposte, "]
    var frase_e = ["sostanziando e vitalizzando ","recuperando ovvero rivalutando ","ipotizzando e perseguendo ","non assumendo mai come implicito ","fattuizzando e concretizzando ","non sottacendo ma anzi puntualizzando ","petenziando ed incrementando ","non dando certo per scontato ","evidenziando ed esplicitando ","attivando ed implementando "]
    var frase_f = ["nei tempi brevi, anzi brevissimi ","in un'ottica preventiva e non ex-post ","in un ambito territoriale omogeneo, a livelli diversi ","nel rispetto della normativa vigente ","nel contesto di un sistema integrato ","quale sua premessa indispensabile e condizionante ","nella misura in cui ciò sia fattibile ","con le dovute ed imprescindibili sottolineature ","in termini di efficacia ed efficienza ","a monte ed a valle della situazione contingente "]
    var frase_g = ["la trasparenza di ogni atto decisionale", "la non classificazione delle risposte","una congrua flessibilità delle strutture","l'annullamento di ogni ghettizzazione", "il coinvolgimento attivo di operatori ed utenti","l'appianamento delle discrepanze e discrasie esistenti","la ridefinizione di una nuova figura professionale", "l'adozione di una metodologia differenziata", "la debucratizzazione del linguaggio", "un indispensabile salto di qualità"]
    var randomA = Math.floor(Math.random()*frase_a.length);
    var randomB = Math.floor(Math.random()*frase_b.length);
    var randomC = Math.floor(Math.random()*frase_c.length);
    var randomD = Math.floor(Math.random()*frase_d.length);
    var randomE = Math.floor(Math.random()*frase_e.length);
    var randomF = Math.floor(Math.random()*frase_f.length);
    var randomG = Math.floor(Math.random()*frase_g.length);
    var stampa = frase_a[randomA] + frase_b[randomB] + frase_c[randomC] + frase_d[randomD] + frase_e[randomE] + frase_f[randomF] + frase_g[randomG];
    return msg.reply(stampa);

});

bot.startPolling();