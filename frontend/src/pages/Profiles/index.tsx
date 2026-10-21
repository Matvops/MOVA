import { MainTemplate } from "../../templates/MainTemplate";
import styles from './style.module.css';
import { InputDefault } from "../../components/InputDefault";
import { useState } from "react";
import { ProfileCards } from "../../components/ProfileCards";
import { PageHeader } from "../../components/PageHeader";

export function Profiles() {

  const [profileName, setProfileName] = useState('');
  const [description, setDescription] = useState('');


  return (
    <MainTemplate>
      <div className={styles.content}>
        <PageHeader 
          title="Perfis e permissões"
          description="Administração"
          buttonContent="Novo perfil"
        />

        <main className={styles.content}>
          <section>
            <p className={styles.descriptionContent}>Todo usuário pertence a um perfil. O perfil define quais telas aparecem
              no menu e quais ações ficam disponíveis em cada tela. As alterações passam a valer assim que
              são salvas.
            </p>
          </section>

          <section className={styles.parameterizations}>
            
            <ProfileCards />

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