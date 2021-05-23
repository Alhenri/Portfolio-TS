import electronic_img from './circuito.jpeg';
import snct_img from './snct2019.jpeg';

const data = [
  {
    title: 'Weather app',
    img: 'https://media.giphy.com/media/k0JPEO1JY2kxxAMxeq/giphy.gif',
    lines: [
      'O site tem a principal função de checar informações sobre o clima de qualquer local que desejar. Há duas formas de selecionar um local, pela sua localização ou por um mapa. O local pesquisado fica salvo no navegador para consultas posteriores, podendo ser editado ou excluido.',
    ],
  },
  {
    title: 'Projeto de hardware e educação',
    img: electronic_img,
    lines: [
      'No IFPE fiz parte do projeto KDET que conta com a participação de três pesquisadores e dois professores orientadores. Nosso principal objetivo era apresentar nossa instituição e o curso de telecomunicações a alunos do ensino médio de outras escolas com a finalidade de incentiva-los a seguir carreira na área.',
      'Meu papel na equipe era desenvolver os circuitos eletrônicos dos kits didáticos que darão apoio às aulas. Com isso, foi possível aprimorar meus conhecimentos de programação, hardware e redes, além de aprender conceitos de telecomunicações e evoluir a minha didática de ensino.',
    ],
  },
  {
    title: 'Projeto de hardware e empreendedorismo',
    img: snct_img,
    lines: [
      'Para a semana nacional de ciencia e tecnologia de 2019 no IFPE, participei do evento apresentando um projeto de empreendedorismo na área de IoT.',
      'O projeto realizado por mim e mais 4 integrantes visava desenvolver um plano de negócios para uma empresa de automação residencial idealizada por nós, a Hexagon. Além da pesquisa e construção do hardware, no caso, um sistema de irrigação automático, houve muita pesquisa de mercado, fornecedores e concorrentes para avaliar a taxa de sucesso do empreendimento.',
    ],
  },
];

export default data;
