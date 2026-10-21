import { FiPlus } from "react-icons/fi";
import { MainTemplate } from "../../templates/MainTemplate";
import styles from './style.module.css';
import { InputDefault } from "../../components/InputDefault";
import { useState } from "react";

export function Profiles() {

  const [profileName, setProfileName] = useState('');
  const [description, setDescription] = useState('');


  return (
    <MainTemplate>
      <div className={styles.content}>
        <header className={styles.contentHeader}>
          <div>
            <span className={styles.desc}>Administração</span>
            <p className={styles.title}>Perfis e permissões</p>
          </div>

          <button className={styles.button} type="button">
            <FiPlus className={styles.plusIcon} /> Novo perfil
          </button>
        </header>

        <main className={styles.content}>
          <section>
            <p className={styles.descriptionContent}>Todo usuário pertence a um perfil. O perfil define quais telas aparecem
              no menu e quais ações ficam disponíveis em cada tela. As alterações passam a valer assim que
              são salvas.
            </p>
          </section>

          <section className={styles.parameterizations}>
            <div className={styles.cardsProfile}>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileContent}>
                  <h2 className={styles.profile}>Atendente</h2>
                  <p className={styles.profileAbilities}>8 de 17 permissões</p>
                </div>
                <p className={styles.usersPeerProfile}>3 Usuários</p>
              </div>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileContent}>
                  <h2 className={styles.profile}>Gestor</h2>
                  <p className={styles.profileAbilities}>8 de 17 permissões</p>
                </div>
                <p className={styles.usersPeerProfile}>2 Usuários</p>
              </div>
              <div className={styles.cardProfile}>
                <div className={styles.cardProfileContent}>
                  <h2 className={styles.profile}>Administrador</h2>
                  <p className={styles.profileAbilities}>8 de 17 permissões</p>
                </div>
                <p className={styles.usersPeerProfile}>1 Usuários</p>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.input}>
                <InputDefault
                  label="Nome do Perfil"
                  value={profileName}
                  type="text"
                  autoComplete="off"
                  handleValue={(e) => setProfileName(e.target.value)}
                />
              </div>

              <div className={styles.input}>
                <InputDefault
                  label="Descrição"
                  value={description}
                  type="text"
                  autoComplete="off"
                  handleValue={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
          </section>
        </main>
      </div>
    </MainTemplate>
  );
}