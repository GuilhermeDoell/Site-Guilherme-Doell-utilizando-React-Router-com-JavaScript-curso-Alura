import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/imagem-guilherme-doell.png';  

export default function Banner(){
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Guilherme Doell
        </h1>

        <p className={styles.paragrafo}>
          Bem-vindos à minha página pessoal.
        </p>
      </div>

      <div className={styles.imagens}>
        <img 
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img 
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Guilherme sorrindo"
        />
      </div>
    </div>
  )
}