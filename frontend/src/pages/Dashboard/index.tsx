import { useContext } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './style.module.css';
import { UserContext } from '../../contexts/UserContext/UserContext';
import { Container } from '../../components/Container';

export function Dashboard() {

  const { user } = useContext(UserContext);
  return (
    <MainTemplate>
      <div className={styles.content}>
        <header className={styles.contentHeader}>
          <span className={styles.now}>{new Date().toLocaleDateString('pt-BR')}</span>
          <p className={styles.title}>Olá, {user.name}</p>
        </header>

        <main className={styles.contentBody}>
          <Container>

            <section className={styles.cards}>
              <div className={styles.card}>
                <p className={styles.cardQuantity}>3</p>
                <p className={styles.cardDescription}>Locações em andamento</p>
              </div>

              <div className={styles.card}>
                <p className={styles.cardQuantity}>6</p>
                <p className={styles.cardDescription}>Devoluções previstas hoje</p>
              </div>


              <div className={styles.card}>
                <p className={styles.cardQuantity}>1</p>
                <p className={styles.cardDescription}>Veículos em manutenção</p>
              </div>

              <div className={styles.card}>
                <p className={styles.cardQuantity}>4</p>
                <p className={styles.cardDescription}>Veículos disponíveis</p>
              </div>

            </section>
          </Container>

          <Container>
            <section className={styles.returns}>
              <header className={styles.returnsHeader}>
                <p className={styles.returnsHeaderLegend}>Devoluções previstas para hoje</p>
                <p className={styles.returnsRedirect}>Ver todas as locações</p>
              </header>

              <table className={styles.table}>
                <tr className={styles.tableRow}>
                  <th className={styles.tableHeader}>Cliente</th>
                  <th className={styles.tableHeader}>Veículo</th>
                  <th className={styles.tableHeader}>Placa</th>
                  <th className={styles.tableHeader}>Ação</th>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>Anderson Melo</td>
                  <td className={styles.tableData}>Jeep Compass</td>
                  <td className={styles.tableData}>ABC123JXA</td>
                  <td className={`${styles.tableData} ${styles.callActionReturns}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>Anderson Melo</td>
                  <td className={styles.tableData}>Jeep Compass</td>
                  <td className={styles.tableData}>ABC123JXA</td>
                  <td className={`${styles.tableData} ${styles.callActionReturns}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>Anderson Melo</td>
                  <td className={styles.tableData}>Jeep Compass</td>
                  <td className={styles.tableData}>ABC123JXA</td>
                  <td className={`${styles.tableData} ${styles.callActionReturns}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>Anderson Melo</td>
                  <td className={styles.tableData}>Jeep Compass</td>
                  <td className={styles.tableData}>ABC123JXA</td>
                  <td className={`${styles.tableData} ${styles.callActionReturns}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>Anderson Melo</td>
                  <td className={styles.tableData}>Jeep Compass</td>
                  <td className={styles.tableData}>ABC123JXA</td>
                  <td className={`${styles.tableData} ${styles.callActionReturns}`}>Ver Locação</td>
                </tr>
              </table>
            </section>
          </Container>

          <Container>
            <section className={styles.rentalsWarning}>
              <header className={styles.rentalsWarningHeader}>
                <p className={styles.rentalsWarningHeaderLegend}>Locações que exigem atenção</p>
              </header>

              <table className={styles.table}>
                <tr className={styles.tableRow}>
                  <th className={styles.tableHeader}>Locação</th>
                  <th className={styles.tableHeader}>Cliente</th>
                  <th className={styles.tableHeader}>Prevista para</th>
                  <th className={styles.tableHeader}>Dias de atraso</th>
                  <th className={styles.tableHeader}>Ação</th>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>L-2026-044</td>
                  <td className={styles.tableData}>Maria De Lourdes Nunes</td>
                  <td className={styles.tableData}>02/10/2O26</td>
                  <td className={styles.tableData}>10</td>
                  <td className={`${styles.tableData} ${styles.callActionRentalsWarning}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>L-2026-044</td>
                  <td className={styles.tableData}>Maria De Lourdes Nunes</td>
                  <td className={styles.tableData}>02/10/2O26</td>
                  <td className={styles.tableData}>10</td>
                  <td className={`${styles.tableData} ${styles.callActionRentalsWarning}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>L-2026-044</td>
                  <td className={styles.tableData}>Maria De Lourdes Nunes</td>
                  <td className={styles.tableData}>02/10/2O26</td>
                  <td className={styles.tableData}>10</td>
                  <td className={`${styles.tableData} ${styles.callActionRentalsWarning}`}>Ver Locação</td>
                </tr>

                <tr className={styles.tableRow}>
                  <td className={styles.tableData}>L-2026-044</td>
                  <td className={styles.tableData}>Maria De Lourdes Nunes</td>
                  <td className={styles.tableData}>02/10/2O26</td>
                  <td className={styles.tableData}>10</td>
                  <td className={`${styles.tableData} ${styles.callActionRentalsWarning}`}>Ver Locação</td>
                </tr>
              </table>
            </section>
          </Container>


          <Container>
            <section className={styles.statusAutomobiles}>
              <header className={styles.statusAutomobilesHeader}>
                <p className={styles.statusAutomobilesHeaderLegend}>Status da frota</p>
              </header>

              <div className={styles.statusAutomobilesCard}>
                <progress value={0.5} className={styles.statusAutomobilesProgressBar} />

                <ul className={styles.listStatus}>
                  <li className={styles.listStatusItem}>
                    <p className={`${styles.status} ${styles.statusAvailable}`}>Disponível</p>
                    <p className={styles.quantityStatus}>4</p>
                  </li>
                  <li className={styles.listStatusItem}>
                    <p className={`${styles.status} ${styles.statusRented}`}>Alugado</p>
                    <p className={styles.quantityStatus}>2</p>
                  </li>
                  <li className={styles.listStatusItem}>
                    <p className={`${styles.status} ${styles.statusMaintenance}`}>Em manutenção</p>
                    <p className={styles.quantityStatus}>1</p>
                  </li>
                  <li className={styles.listStatusItem}>
                    <p className={`${styles.status} ${styles.statusInactive}`}>Inativo</p>
                    <p className={styles.quantityStatus}>1</p>
                  </li>
                </ul>

                <p className={styles.callActionAutomobiles}>Ver frota completa</p>
              </div>
            </section>
          </Container>
        </main>
      </div>
    </MainTemplate >
  )
}