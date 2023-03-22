import logoBarber from './../../assets/barber-logo-2.png';
import './HomePage.css'

function HomePage() {
  return (
    <div className='logo'>
      

      <input type="checkbox" id="nav-toggle"/>
          <div class="sidebar">
              {/* <div class="sidebar-brand">
                  <h2><span class="lab la-accusoft"></span></h2>
              </div> */}
              <div class="sidebar-menu">
                  <ul>
                    <h1 className='machos'>Machos Barbearia</h1>
                     <img className='logobarber' src={logoBarber} alt="" />
                      <li>
                          <a href="" class="active"><span class="las la-igloo"></span>
                              <span>Dashboard</span></a>
                      </li>
                      <li>
                          <a href=""><span class="las la-users"></span>
                              <span>Colaboradores</span></a>
                      </li>
                      <li>
                          <a href=""><span class="las la-clipboard-list"></span>
                              <span>Atendimentos</span></a>
                      </li>
                      <li>
                          <a href=""><span class="las la-shipping-bag"></span>
                              <span>Avaliações</span></a>
                      </li>
                      
                  </ul>
              </div>
          </div>
          <div class="main-content">
              <header>
                  <h1><label for="nav-toggle">
                      <span class="las la-bars"></span>
                  </label>
                  Dashboard
              </h1>
              <div class="search-wrappeer">
                  <span class="las la-search"></span>
                  <input type="search" placeholder="Search here"/>
              </div>
              <div class="user-wrapper">
                  <img src="img/2.jpg" width="30px" height="40px" alt=""/>
                  <div>
                      <h4>john Doe</h4>
                      <small>Super admin</small>
                  </div>
              </div>
              </header>
              <main>
                  <div class="cards">
                      <div class="card-single">

                          <div>
                            <h1>5</h1>
                            <span>Funcionários</span>
                          </div>
                          <div>
                            <span class="las la-users"></span>
                          </div>
                        </div>
                    <div class="card-single">

                      <div>
                          <h1>320</h1>
                          <span>Atendimentos</span>
                      </div>
                      <div>
                          <span class="las la-clipboard-list"></span>
                      </div>
                    </div>
                    <div class="card-single">
                      <div>
                        <h1>150</h1>
                        <span>Avaliações</span>
                      </div>
                      <div>
                        <span class="las la-shopping-bag"></span>
                      </div>
                    </div>
                    <div class="card-single">
                      <div>
                        <h1>$6k</h1>
                        <span>Income</span>
                      </div>
                      <div>
                        <span class="lab la-google-wallet"></span>
                      </div>
                    </div>
                  </div>
                  <div class="recent-grid">
                      <div class="projects">
                        <div class="card">
                          <div class="card-header">
                          <h3>Colaboradores</h3>

                          <button>Mais <span class="las la-arrow-right">
                          </span></button>
                          </div>

                          <div class="card-body">
                          <div class="table-responsive">
                              <table width="100%">
                                  <thead>
                                      <tr>
                                          <td>Nome</td>
                                          <td>Atendimentos</td>
                                          <td>Avaliação</td>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>João Silva</td>
                                          <td>52</td>
                                          <td>
                                              <span class="status yellow">
                                              </span>
                                              5 estrelas
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Paulo Menezes</td>
                                          <td>63</td>
                                          <td>
                                              <span class="status yellow"></span>
                                              4.5 estrelas
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Alex Filho</td>
                                          <td>45</td>
                                          <td>
                                              <span class="status yellow">
                                              </span>
                                              5 estrelas
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Pedro Conceição</td>
                                          <td>26</td>
                                          <td>
                                              <span class="status yellow"></span>
                                              4.5 estrelas
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Lucas Louco</td>
                                          <td>21</td>
                                          <td><span class="status yellow"></span>
                                              4 estrelas
                                          </td>
                                      </tr>
                                      
                                  </tbody>
                              </table>
                          </div>
                          </div>
                        </div>
                      </div>
                      
                  </div>
              </main>
          </div>
    </div>
  )
}

export default HomePage