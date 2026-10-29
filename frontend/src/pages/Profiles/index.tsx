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
        setAbilities(prevState => [...prevState, abilitieReturned]);
      })
    }

    getProfiles();
    getAbilities();
  }, []);


  function handleProfile(profile: Profile) {
    setSelectedProfile(profile);
    setNewAbilities(profile.abilities);
    setProfileName(profile.name);
  }

  function handleAllAbilitiesByGroup(section: string): void
  {

    const allAbilitiesOfSection = abilities.filter(ability => ability.includes(section));

    if(isAddAll(section)) {

      allAbilitiesOfSection.forEach(ability => {
        if(newAbilities.includes(ability)) return;
        toggleAbility(ability);
      });

      return;
    }

    allAbilitiesOfSection.forEach(ability => {
      if(newAbilities.includes(ability)) toggleAbility(ability);
    });

  }

  function isAddAll(section: string): boolean
  {
    const allAbilitiesExistBySection = abilities.filter(ability => ability.includes(section));
    const allNewAbilitiesExistBySection = newAbilities.filter(ability => ability.includes(section));

    if(section === 'automobiles') {
      console.log(allAbilitiesExistBySection);
      console.log(allNewAbilitiesExistBySection);
    }
    return allAbilitiesExistBySection.length !== allNewAbilitiesExistBySection.length;
  }

  function toggleAbility(ability: string): void
  {
    if(newAbilities.includes(ability)) {
      setNewAbilities(prevState => prevState.filter(element => element != ability));
      return;
    }

    setNewAbilities(prevState => [...prevState, ability]);
  }

  useEffect(() => {
    console.log(newAbilities)
  }, [newAbilities]);

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
                    <Permissions 
                      title='Frota' 
                      handleAll={() => handleAllAbilitiesByGroup("automobiles")} 
                      isAddAll={isAddAll('automobiles')}
                    >
                      <Permission
                        title='Consultar frota'
                        description='Ver a lista de veículos, status e histórico.'
                        checked={newAbilities.includes('read:automobiles')}
                        handlePermission={() => toggleAbility("read:automobiles")}
                      />

                      <Permission
                        title='Cadastrar veículos'
                        description='Adicionar novos veículos à frota. Requer: consultar frota.'
                        checked={newAbilities.includes('write:automobiles')}
                        handlePermission={() => toggleAbility("write:automobiles")}
                      />

                      <Permission
                        title='Editar veículos'
                        description='Alterar dados, diária e disponibilidade. Requer: consultar frota.'
                        checked={newAbilities.includes('update:automobiles')}
                        handlePermission={() => toggleAbility("update:automobiles")}
                      />
                    </Permissions>

                    <Permissions 
                      title='Manutenção'  
                      handleAll={() => 
                      handleAllAbilitiesByGroup("maintenances")}
                      isAddAll={isAddAll("maintenances")}
                    >
                      <Permission
                        title='Consultar manutenções'
                        description='Ver ordens de manutenção e histórico'
                        checked={newAbilities.includes('read:maintenances')}
                        handlePermission={() => toggleAbility("read:maintenances")}
                      />

                      <Permission
                        title='Registrar manutenção'
                        description='Enviar veículo para manutenção. Requer: consultar manutenções, consultar frota.'
                        checked={newAbilities.includes('write:maintenances')}
                        handlePermission={() => toggleAbility("write:maintenances")}
                      />
                    </Permissions>

                    <Permissions 
                      title='Clientes' 
                      handleAll={() => handleAllAbilitiesByGroup("clients")}
                      isAddAll={isAddAll("clients")}
                    >
                      <Permission
                        title='Consultar clientes'
                        description='Ver cadastro e histórico de locações.'
                        checked={newAbilities.includes('read:clients')}
                        handlePermission={() => toggleAbility("read:clients")}
                      />

                      <Permission
                        title='Cadastrar clientes'
                        description='Incluir novos clientes. Requer: consultar clientes.'
                        checked={newAbilities.includes('write:clients')}
                        handlePermission={() => toggleAbility("write:clients")}
                      />

                      <Permission
                        title='Editar clientes'
                        description='Alterar dados cadastrais. Requer: consultar clientes.'
                        checked={newAbilities.includes('update:clients')}
                        handlePermission={() => toggleAbility("update:clients")}
                      />
                    </Permissions>

                    <Permissions 
                      title='Locações' 
                      handleAll={() => handleAllAbilitiesByGroup("rentals")}
                      isAddAll={isAddAll("rentals")}
                    >
                      <Permission
                        title='Consultar locações'
                        description='Ver cadastro e histórico de locações.'
                        checked={newAbilities.includes('read:rentals')}
                        handlePermission={() => toggleAbility("read:rentals")}
                      />

                      <Permission
                        title='Criar locações e reservas'
                        description='Incluir novos clientes. Requer: consultar clientes.'
                        checked={newAbilities.includes('write:rentals')}
                        handlePermission={() => toggleAbility("write:rentals")}
                      />

                      <Permission
                        title='Registrar devoluções'
                        description='Informar km, combustível e avarias. Requer: consultar locações.'
                        checked={newAbilities.includes('update:rentals')}
                        handlePermission={() => toggleAbility("update:rentals")}
                      />

                      <Permission
                        title='Cancelar locações'
                        description='Cancelar locações reservadas ou em andamento. Requer: consultar locações.'
                        checked={newAbilities.includes('delete:rentals')}
                        handlePermission={() => toggleAbility("delete:rentals")}
                      />
                    </Permissions>

                    <Permissions 
                      title='Operação' 
                      handleAll={() => handleAllAbilitiesByGroup("dash")}
                      isAddAll={isAddAll("dash")}
                    >
                      <Permission
                        title='Ver pendências e indicadores'
                        description='Locações atrasadas e visão gerencial na tela de Operação.'
                        checked={newAbilities.includes('read:dash')}
                        handlePermission={() => toggleAbility("read:dash")}
                      />
                    </Permissions>

                    <Permissions 
                      title='Administração' 
                      handleAll={() => {
                       handleAllAbilitiesByGroup("users");
                       handleAllAbilitiesByGroup("profiles");
                      }}
                      isAddAll={isAddAll("users") && isAddAll("profiles")}
                    >
                      <Permission
                        title='Consultar usuários'
                        description='Ver contas e perfis vinculados.'
                        checked={newAbilities.includes('read:users')}
                        handlePermission={() => toggleAbility("read:users")}
                      />

                      <Permission
                        title='Gerenciar usuários'
                        description='Criar, editar e inativar contas. Requer: consultar usuários.'
                        checked={newAbilities.includes('write:users')}
                        handlePermission={() => toggleAbility("write:users")}
                      />

                      <Permission
                        title='Consultar perfis'
                        description='Ver perfis e suas permissões.'
                        checked={newAbilities.includes('read:profiles')}
                        handlePermission={() => toggleAbility("read:profiles")}
                      />

                      <Permission
                        title='Gerenciar perfis'
                        description='Criar perfis, editar permissões e vincular usuários. Requer: consultar perfis, consultar usuários.'
                        checked={newAbilities.includes('write:profiles')}
                        handlePermission={() => toggleAbility("write:profiles")}
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