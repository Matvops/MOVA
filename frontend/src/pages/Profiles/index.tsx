import { MainTemplate } from "../../templates/MainTemplate";
import styles from './style.module.css';
import { InputDefault } from "../../components/InputDefault";
import { useContext, useEffect, useState } from "react";
import { ProfileCards } from "../../components/ProfileCards";
import { PageHeader } from "../../components/PageHeader";
import { TabPanel } from "../../components/TabPanel";
import { ProfileService } from "../../services/administrativo/ProfileService";
import { useNavigate } from "react-router-dom";
import { ViewContext } from "../../contexts/ViewContext/ViewContext";
import type { Profile } from "../../interfaces/Profile";
import { profile } from "../../mappers/profile";

const profileService = new ProfileService;

export function Profiles() {

  const navigate = useNavigate();

  const { setView } = useContext(ViewContext);
  
  const [profileName, setProfileName] = useState('');

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [abilities, setAbilities] = useState<string[]>([]);
  
  const [selectedProfile, setSelectedProfile] = useState<Profile>();

  useEffect(() => {


    const getProfiles = async () => {

      const response = await profileService.getAll();

      if(response.status === false) {
        alert(response.message);
        setView('dashboard');
        navigate('/dashboard');
      }

      response.data?.profiles?.forEach((profileReturned: object) => {
        setProfiles(prevState => [...prevState, profile(profileReturned)])
      })

      handleProfile(profiles[0]);
    }

    const getAbilities = async () => {

      const response = await profileService.getAbilities();

      if(response.status === false) {
        alert(response.message);
        setView('dashboard');
        navigate('/dashboard');
      }

      response.data?.abilities?.forEach((abilitieReturned: string) => {
        setAbilities(prevState => [...prevState, abilitieReturned])
      })
    }

    getProfiles();
    getAbilities();
  }, []);

  function handleProfile(profile: Profile){
    setSelectedProfile(profile);
    setProfileName(profile.name);
  }

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

            <ProfileCards
              profiles={profiles}
              totalQuantityAbilities={abilities?.length}
              selectedProfile={selectedProfile}
              handleProfile={handleProfile}
            />

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

              <TabPanel />
            </form>
          </section>
        </main>
      </div>
    </MainTemplate>
  );
}