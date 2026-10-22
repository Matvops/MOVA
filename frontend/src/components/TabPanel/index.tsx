import { useState } from 'react';
import styles from './style.module.css';
import { Permissions } from '../Permissions';
import { Permission } from '../Permission';


export function TabPanel() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <header className={styles.header}>
        <p
          className={`${styles.titleHeader} ${activeIndex === 0 ? styles.activeHeader : ''}`}
          onClick={() => setActiveIndex(0)}
        >
          Permissões
        </p>
        <p
          className={`${styles.titleHeader} ${activeIndex === 1 ? styles.activeHeader : ''}`}
          onClick={() => setActiveIndex(1)}
        >
          Usuários vinculados
        </p>
      </header>

      <main>
        {activeIndex === 0 && (
          <div>
            <p className={styles.numberOfActivePermissions}>8 de 17 permissões ativas</p>
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
        )}
      </main>
    </div>
  );
}