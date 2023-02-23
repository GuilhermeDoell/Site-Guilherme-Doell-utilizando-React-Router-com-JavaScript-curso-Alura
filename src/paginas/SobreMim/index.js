import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/imagem-guilherme-doell.png";

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Guilherme
      </h3>
      
      <img 
        src={fotoSobreMim}
        alt="Foto do Guilherme sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
          Sou advogado formado pela Faculdade de Direito IBMEC RJ, pretendo ingressar na carreira de desenvolvimento de sistemas. Estou cursando graduação em Análise e Desenvolvimento de Sistemas pela faculdade Estácio de Sá.
      </p>
      <p className={styles.paragrafo}>
          Possuo conhecimentos sobre HTML, CSS, JavaScript, SQL, Node.js, GIT, React, Typescript, tendo concluído cursos práticos de criação de projetos utilizando as tecnologias indicadas. Atualmente, estou focando meus estudos em JavaScript, Node.js e React. Além disso, possuo experiência profissional anterior em empresa de tecnologia.
      </p>
      <p className={styles.paragrafo}>
          Considero-me uma pessoa determinada, proativa, inovadora, com visão de mercado e entendimento de regra de negócio, dinâmica e de ótimo relacionamento interpessoal. Busco enfrentar desafios e vivenciar experiências que contribuam para meu perfil profissional e pessoal, resultando no desenvolvimento da minha carreira.
      </p>
    
    </PostModelo>
  )
}