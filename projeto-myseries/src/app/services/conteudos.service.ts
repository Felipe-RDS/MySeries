import { Injectable } from '@angular/core';
import { Conteudo } from 'src/app/model/conteudo.model';
@Injectable({
  providedIn: 'root'
})
export class ConteudosService {
  public animesLista: Array<Conteudo> = [
    {
      id: 0,
      nome: 'Hunter x Hunter',
      descricao: 'Monstros amedrontadores, criaturas exóticas, riquezas vastas, tesouros misteriosos, terras vis e terras inexploradas... Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido. Pelo caminho, ele conhece outros participantes da Prova dos Caçadores: Kurapika, Leorio e Killua. Será Gon capaz de vencer os grandes desafios da Prova de Caçadores e se tornar o melhor do mundo? Esta jornada selvagem e épica está prestes a começar!!',
      status: true,
      imagem: './../../assets/img/clients/client-1.jpg'
    },
    {
      id: 1,
      nome: 'Jujutsu Kaisen',
      descricao: 'Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições. Certo dia, para salvar amigos que estavam sendo atacados por Maldições, Yuji Itadori engole o dedo do Ryomen-Sukuna, absorvendo sua Maldição. Ele então decide se matricular no Colégio Técnico de Feitiçaria de Tóquio, uma organização que combate as Maldições... e assim começa a heróica lenda do garoto que tornou-se uma Maldição para exorcizar uma Maldição.',
      status: true,
      imagem: './../../assets/img/clients/client-2.jpg'
    },
    {
      id: 2,
      nome: 'One Piece',
      descricao: 'Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. "Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!". Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis... Assim começou a Grande Era dos Piratas!',
      status: true,
      imagem: './../../assets/img/clients/client-3.jpg'
    },
    {
      id: 3,
      nome: 'Naruto',
      descricao: 'Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. "Meu tesouro? Se quiserem, podem pegá-lo. Procurem-no! Ele contém tudo que este mundo pode oferecer!". Foi a revelação do maior tesouro, o One Piece, cobiçado por homens de todo o mundo, sonhando com fama e riqueza imensuráveis... Assim começou a Grande Era dos Piratas!',
      status: true,
      imagem: './../../assets/img/clients/client-4.jpg'
    },
    {
      id: 4,
      nome: 'The Time I got Reincarnated as a Slime',
      descricao: 'Mikami Satoru, funcionário de uma megacorporação, é apunhalado por um assassino nas ruas e renasce num mundo paralelo... Mas ele renasce como um slime! Jogado neste novo mundo com o nome Rimuru, ele assume a missão de criar um mundo que seja acolhedor para todas as raças.',
      status: true,
      imagem: './../../assets/img/clients/client-5.jpg'
    },
    {
      id: 5,
      nome: 'Overlord',
      descricao: 'Quando um MMORPG bastante popular anuncia que será desligado permanentemente, um jogador veterano se recusa a deslogar: Momonga. À medida que NPCs começam a desenvolver personalidades e mentes próprias, ele decide usar suas habilidades para se tornar o novo chefão do jogo.',
      status: true,
      imagem: './../../assets/img/clients/client-6.png'
    },
    {
      id: 6,
      nome: 'Gintama',
      descricao: 'Gintama é a história de um faz tudo chamado Gintoki, um samurai sem respeito com regras impostas pelos invasores e que está pronto para pegar qualquer trabalho para sobreviver. ',
      status: true,
      imagem: './../../assets/img/clients/client-7.png'
    },
    {
      id: 7,
      nome: 'Bleach',
      descricao: 'BLEACH conta a história do Ichigo Kurosaki. Num dia ele encontra a Rukia e, a partir daí, descobre que sua vida mudou para sempre.',
      status: true,
      imagem: './../../assets/img/clients/client-8.png'
    }
  ];

  public seriesLista: Array<Conteudo> = [
    {
      id: 0,
      nome:'The Mandalorian',
      descricao:'Em The Mandalorian, Din Djarin (Pedro Pascal) é um guerreiro solitário que trabalha como caçador de recompensa. Ele embarca numa jornada pelos territórios esquecidos da galáxia, logo após a queda do Império e antes da criação da temida Primeira Ordem.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-1.jpg'
    },
    {
      id: 1,
      nome:'The Witcher',
      descricao:'Em The Witcher, Geralt de Rivia (Henry Cavill) é um solitário caçador de monstros, que luta para encontrar seu lugar num mundo onde pessoas são mais crueis que criaturas. Mas seu caminho irá cruzar com duas figuras que mudarão sua vida: a feiticeira Yennefer de Vengerberg (Anya Chalotra) e a princesa poderosa Cintran Ciri (Freya Allan).',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-2.jpg'
    },
    {
      id: 2,
      nome:'Stranger Things',
      descricao:'Em Stranger Things, quando Will (Noah Schnapp), um menino de 12 anos, desaparece misteriosamente, o xerife Jim Hopper (David Harbour) inicia uma operação para encontrá-lo. Enquanto isso, Mike (Finn Wolfhard), Dustin (Gaten Matarazzo) e Lucas (Caleb McLaughlin), melhores amigos de Will, decidem procurá-lo por conta própria. Mas as investigações acabam levando o grupo a experimentos secretos do governo e a uma peculiar menina perdida na floresta.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-3.jpg'
    },
    {
      id: 3,
      nome:'Breaking bad',
      descricao:'Walter White (Bryan Cranston) é um professor de química na casa dos 50 anos que trabalha em uma escola secundária no Novo México. Para atender às necessidades de Skyler (Anna Gunn), sua esposa grávida, e Walt Junior (RJ Mitte), seu filho deficiente físico, ele tem que trabalhar duplamente. Sua vida fica ainda mais complicada quando descobre que está sofrendo de um câncer de pulmão incurável. Para aumentar rapidamente a quantidade de dinheiro que deixaria para sua família após sua morte, Walter usa seu conhecimento de química para fazer e vender metanfetamina, uma droga sintética. Ele conta com a ajuda do ex-aluno e pequeno traficante Jesse (Aaron Paul) e enfrenta vários desafios, incluindo o fato de seu concunhado ser um importante nome dentro da Agência Anti-Drogas da região.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-4.jpg'
    },
    {
      id: 4,
      nome:'Dexter',
      descricao:'Dexter Morgan (Michael C. Hall) é adotado aos três anos de idade por Harry Morgan (James Remar) e Doris (Kathrin Middleton), depois de ter se tornado órfão. Após detectar sua tendência homicida, o pai de Dexter decide ensinar a ele um código no intuito de canalizar a raiva do filho para situações mais propícias à violência. Nesta nova lógica, Dexter deve matar apenas assassinos de pessoas inocentes com a condição de provar sua culpa. Ele inicia o desenvolvimento de diversas estratégias usando seu conhecimento e a experiência para realizar sua nova função.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-5.jpg'
    },
    {
      id: 5,
      nome:'Loki',
      descricao:'Baseada no famoso vilão do Universo Cinematográfico Marvel, Loki é uma série original do Disney+ que se passa após os eventos narrados em Vingadores: Ultimato. O spin-off segue os passos de Loki (Tom Hiddleston), mais conhecido como Deus da Trapaça, que conseguiu roubar o tesserato dos Vingadores durante a missão de recuperar as Joias do Infinito. Com o poder da gema do espaço, o Asgardiano começa a pular no tempo com a intenção de chegar a Midgard. Ao longo de sua jornada, ele acaba interferindo em momentos importantes da história da humanidade – seja para cumprir seus próprios objetivos, seja para se divertir um pouco. O que ele não sabe é que sua intervenção pode gerar uma catástrofe nas linhas do tempo e, assim, colocar em risco todo o universo.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-6.jpg'
    },
    {
      id: 6,
      nome:'Dark',
      descricao:'Quatro diferentes famílias - Kahnwald, Nielsen, Doppler e Tiedemann - vivem em Winden, uma pequena e aparentemente tranquila cidade alemã. A rotina dos moradores vira de cabeça para baixo quando duas crianças desaparecem misteriosamente, nas proximidades de uma antiga usina nuclear. Segredos familiares começam a emergir à medida que a polícia investiga os sumiços e logo percebe uma relação com eventos também sombrios do passado. O tempo e o espaço parecem se embaralhar cada vez mais, deflagrando uma série de tragédias que, curiosamente, se repete a cada geração.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-7.jpg'
    },
    {
      id: 7,
      nome:'Star Trek: Discovery',
      descricao:'Em Star Trek: Discovery, dez anos antes da famosa missão do Capitão Kirk, a tripulação do USS Discovery se depara com novos mundos e civilizações, sendo obrigada a se aprofundar em temas familiares e explorar situações até então desconhecidas.',
      status: true,
      imagem:'./../../assets/img/cliseries/cliseries-8.jpg'
    },
  ];

  constructor() { }

  public getAllAnimes(): Array<Conteudo> {
    return this.animesLista;
  }

  public getIdAnimes(id: number): Conteudo{
    for (let obj of this.animesLista){
      if(obj.id === id)
      return obj;
    }
    return new Conteudo();
  }

  public getAllSeries(): Array<Conteudo> {
    return this.seriesLista;
  }

  public getIdSeries(id: number): Conteudo{
    for(let obj of this.seriesLista){
      if(obj.id === id)
      return obj;
    }
    return new Conteudo();
  }


}
