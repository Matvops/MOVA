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
import { Tab } from "../../components/Tab";
import { Permissions } from "../../components/Permissions";
import { Permission } from "../../components/Permission";

const profileService = new ProfileService;

export function Profiles() {

  const navigate = useNavigate();

  const { setView } = useContext(ViewContext);

  const [profileName, setProfileName] = useState('');

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [abilities, setAbilities] = useState<string[]>([]);
  const [newAbilities, setNewAbilities] = useState<string[]>([]);


  const [selectedProfile, setSelectedProfile] = useState<Profile>();

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {


    const getProfiles = async () => {

      const response = await profileService.getAll();

      if (response.status === false) {
        alert(response.message);
        setView('dashboard');
        navigate('/dashboard');
      }

      response.data?.profiles?.forEach((profileReturned: object) => {
        setProfiles(prevState => [...prevState, profile(profileReturned)])
      })

      handleProfile(profile(response.data.profiles[0]));
    }

    const getAbilities = async () => {

      const response = await profileService.getAbilities();

      if (response.status === false) {
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


  function handleProfile(profile: Profile) {
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

              <TabPanel
                activeIndex={activeTab}
                setActiveIndex={setActiveTab}
              >
                <Tab title="Permissões">
                  <div>
                    <p className={styles.numberOfActivePermissions}>{selectedProfile?.abilities?.length} de {abilities?.length} permissões ativas</p>
                    <Permissions title='Frota'>
                      <Permission
                        title='Consultar frota'
                        description='Ver a lista de veículos, status e histórico.'
                      />

                      <Permission
                        title='Cadastrar veículos'
                        description='Adicionar novos veículos à frota. Requer: consultar frota.'
                      />

                      <Permission
                        title='Editar veículos'
                        description='Alterar dados, diária e disponibilidade. Requer: consultar frota.'
                      />
                    </Permissions>

                    <Permissions title='Manutenção'>
                      <Permission
                        title='Consultar manutenções'
                        description='Ver ordens de manutenção e histórico'
                      />

                      <Permission
                        title='Registrar manutenção'
                        description='Enviar veículo para manutenção. Requer: consultar manutenções, consultar frota.'
                      />
                    </Permissions>

                    <Permissions title='Clientes'>
                      <Permission
                        title='Consultar clientes'
                        description='Ver cadastro e histórico de locações.'
                      />

                      <Permission
                        title='Cadastrar clientes'
                        description='Incluir novos clientes. Requer: consultar clientes.'
                      />

                      <Permission
                        title='Editar clientes'
                        description='Alterar dados cadastrais. Requer: consultar clientes.'
                      />
                    </Permissions>

                    <Permissions title='Locações'>
                      <Permission
                        title='Consultar locações'
                        description='Ver cadastro e histórico de locações.'
                      />

                      <Permission
                        title='Criar locações e reservas'
                        description='Incluir novos clientes. Requer: consultar clientes.'
                      />

                      <Permission
                        title='Registrar devoluções'
                        description='Informar km, combustível e avarias. Requer: consultar locações.'
                      />

                      <Permission
                        title='Cancelar locações'
                        description='Cancelar locações reservadas ou em andamento. Requer: consultar locações.'
                      />
                    </Permissions>

                    <Permissions title='Operação'>
                      <Permission
                        title='Ver pendências e indicadores'
                        description='Locações atrasadas e visão gerencial na tela de Operação.'
                      />
                    </Permissions>

                    <Permissions title='Administração'>
                      <Permission
                        title='Consultar usuários'
                        description='Ver contas e perfis vinculados.'
                      />

                      <Permission
                        title='Gerenciar usuários'
                        description='Criar, editar e inativar contas. Requer: consultar usuários.'
                      />

                      <Permission
                        title='Consultar perfis'
                        description='Ver perfis e suas permissões.'
                      />

                      <Permission
                        title='Gerenciar perfis'
                        description='Criar perfis, editar permissões e vincular usuários. Requer: consultar perfis, consultar usuários.'
                      />
                    </Permissions>
                  </div>
                </Tab>

                <Tab title={`Usuários vinculados (${selectedProfile?.users?.length})`}>
                  <div>
                    
                  </div>
                </Tab>
              </TabPanel>
            </form>
          </section>
        </main>
      </div>
    </MainTemplate>
  );
}