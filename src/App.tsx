/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export default function App() {
  const [currentSection, setCurrentSection] = useState('inicio');
  const [quizState, setQuizState] = useState({ answered: false, score: 0 });
  const [loginState, setLoginState] = useState({ loggedIn: false, error: '', username: '', password: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quizSubject, setQuizSubject] = useState<string | null>(null);
  const [pollVoted, setPollVoted] = useState(false);

  const showSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const mathQuestion = {
    q: "Quanto é 7 x 8?",
    options: ["54", "56", "58", "62"],
    answer: 1
  };
  const portQuestion = {
    q: "Qual é o plural de 'cidadão'?",
    options: ["Cidadões", "Cidadãos", "Cidadães", "Cidadãoes"],
    answer: 1
  };

  const currentQuestion = quizSubject === 'Matemática' ? mathQuestion : portQuestion;

  const checkAnswer = (optionIndex: number) => {
    const correctAnswer = currentQuestion.answer;
    setQuizState({
      answered: true,
      score: optionIndex === correctAnswer ? 1 : 0
    });
  };

  const resetQuiz = () => {
    setQuizState({ answered: false, score: 0 });
    setQuizSubject(null);
  };

  const handleLogin = () => {
    if (loginState.username === 'aluno' && loginState.password === '123') {
      setLoginState({ ...loginState, loggedIn: true, error: '' });
    } else {
      setLoginState({ ...loginState, error: 'Usuário ou senha incorretos!' });
    }
  };

  const logout = () => {
    setLoginState({ loggedIn: false, error: '', username: '', password: '' });
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar">
            <div className="logo">
                <i className="fas fa-graduation-cap"></i> Escola<span>Futuro</span>
            </div>
            <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('inicio'); }}>Início</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('sobre'); }}>Sobre</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('materiais'); }}>Materiais</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('enquetes'); }}>Enquetes</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('quiz'); }}>Quiz</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('projetos'); }}>Projetos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('login'); }} className="btn-aluno">Área do Aluno</a></li>
            </ul>
            <div className="menu-toggle" id="mobile-menu" onClick={handleMobileMenu}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
      </header>

      <main id="content">
        {/* SEÇÃO INÍCIO */}
        <section id="inicio" className={currentSection === 'inicio' ? 'active' : 'hidden'}>
            <div className="hero">
                <div className="hero-text">
                    <h1>Educação que Transforma o Amanhã</h1>
                    <p>Um ambiente de aprendizado inovador, tecnológico e humano.</p>
                    <button className="cta-btn" onClick={() => showSection('sobre')}>Saiba Mais</button>
                </div>
            </div>

            <div className="avisos-container">
                <h2><i className="fas fa-bullhorn"></i> Avisos Importantes</h2>
                <div className="avisos-grid">
                    <div className="aviso-card">
                        <span className="data">10 de Abril</span>
                        <p>Feira de Conhecimento: Preparem seus projetos!</p>
                    </div>
                    <div className="aviso-card">
                        <span className="data">Final de Abril</span>
                        <p>Gincana Escolar: Formem suas equipes e participem.</p>
                    </div>
                    <div className="aviso-card">
                        <span className="data">20 Nov</span>
                        <p>Dia da Consciência Negra: Apresentações e eventos culturais.</p>
                    </div>
                    <div className="aviso-card urgent">
                        <span className="data">Atenção</span>
                        <p>Semana de Provas: Fiquem atentos ao calendário de avaliações.</p>
                    </div>
                </div>
            </div>

            {/* Calendário Escolar Simples */}
            <div className="calendar-section">
                <h2><i className="far fa-calendar-alt"></i> Calendário de Eventos</h2>
                <div className="calendar-list">
                    <div className="calendar-item"><strong>Final de Abril:</strong> Gincana Escolar</div>
                    <div className="calendar-item"><strong>Novembro:</strong> Consciência Negra</div>
                </div>
            </div>
        </section>

        {/* SEÇÃO SOBRE */}
        <section id="sobre" className={currentSection === 'sobre' ? 'active' : 'hidden'}>
            <div className="container">
                <h2>Sobre a Escola</h2>
                <p>Fundada em 2010, a Escola Futuro dedica-se a formar cidadãos críticos e preparados para os desafios do século XXI.</p>
                <div className="stats">
                    <div className="stat-item"><h3>+500</h3><p>Alunos</p></div>
                    <div className="stat-item"><h3>45</h3><p>Professores</p></div>
                    <div className="stat-item"><h3>15</h3><p>Laboratórios</p></div>
                </div>
            </div>
        </section>

        {/* SEÇÃO MATERIAIS */}
        <section id="materiais" className={currentSection === 'materiais' ? 'active' : 'hidden'}>
            <div className="container">
                <h2>Materiais de Estudo</h2>
                <div className="materials-grid">
                    <div className="material-card">
                        <i className="fas fa-file-pdf"></i>
                        <h3>Resumo de História</h3>
                        <p>Revolução Industrial e seus impactos.</p>
                        <a href="#" className="download-link">Baixar PDF</a>
                    </div>
                    <div className="material-card">
                        <i className="fas fa-video"></i>
                        <h3>Videoaula: Genética</h3>
                        <p>Introdução às Leis de Mendel.</p>
                        <a href="#" className="download-link">Assistir</a>
                    </div>
                    <div className="material-card">
                        <i className="fas fa-flask"></i>
                        <h3>Guia de Química</h3>
                        <p>Tabela Periódica interativa.</p>
                        <a href="#" className="download-link">Acessar</a>
                    </div>
                </div>
            </div>
        </section>

        {/* SEÇÃO ENQUETES */}
        <section id="enquetes" className={currentSection === 'enquetes' ? 'active' : 'hidden'}>
            <div className="quiz-container">
                <h2>Enquete da Semana</h2>
                {!pollVoted ? (
                  <div id="poll-content">
                      <p>Qual é a sua matéria favorita?</p>
                      <div className="options">
                          <button onClick={() => setPollVoted(true)}>Matemática</button>
                          <button onClick={() => setPollVoted(true)}>Português</button>
                          <button onClick={() => setPollVoted(true)}>Ciências</button>
                          <button onClick={() => setPollVoted(true)}>História</button>
                      </div>
                  </div>
                ) : (
                  <div id="poll-result">
                      <h3>Obrigado por votar!</h3>
                      <p>Sua resposta foi registrada com sucesso.</p>
                  </div>
                )}
            </div>
        </section>

        {/* SEÇÃO QUIZ */}
        <section id="quiz" className={currentSection === 'quiz' ? 'active' : 'hidden'}>
            <div className="quiz-container">
                <h2>Desafio de Conhecimentos</h2>
                {!quizSubject ? (
                    <div>
                        <p>Escolha uma matéria para o Quiz:</p>
                        <div className="options">
                            <button onClick={() => setQuizSubject('Matemática')}>Matemática</button>
                            <button onClick={() => setQuizSubject('Português')}>Português</button>
                        </div>
                    </div>
                ) : !quizState.answered ? (
                  <div id="quiz-content">
                      <p id="question">{currentQuestion.q}</p>
                      <div className="options">
                          {currentQuestion.options.map((opt, idx) => (
                              <button key={idx} onClick={() => checkAnswer(idx)}>{opt}</button>
                          ))}
                      </div>
                  </div>
                ) : (
                  <div id="quiz-result">
                      <h3>Parabéns!</h3>
                      <p>Sua pontuação: <span id="score" style={{ color: quizState.score === 1 ? 'green' : 'red' }}>{quizState.score}</span>/1</p>
                      <button onClick={resetQuiz}>Tentar Novamente</button>
                  </div>
                )}
            </div>
        </section>

        {/* SEÇÃO PROJETOS */}
        <section id="projetos" className={currentSection === 'projetos' ? 'active' : 'hidden'}>
            <div className="container">
                <h2>Nossos Projetos</h2>
                <div className="projects-flex">
                    <div className="project-box">
                        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80" alt="Feira de Ciências" />
                        <h3>Feira de Ciências 2024</h3>
                        <p>Explorando energias renováveis e sustentabilidade.</p>
                    </div>
                    <div className="project-box">
                        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80" alt="Artes" />
                        <h3>Workshop de Arte Digital</h3>
                        <p>Alunos criam exposições virtuais incríveis.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* ÁREA DO ALUNO (LOGIN SIMULADO) */}
        <section id="login" className={currentSection === 'login' ? 'active' : 'hidden'}>
            {!loginState.loggedIn ? (
              <div className="login-card" id="login-form-div">
                  <h2>Portal do Aluno</h2>
                  <input 
                    type="text" 
                    id="username" 
                    placeholder="Usuário (aluno)" 
                    value={loginState.username}
                    onChange={(e) => setLoginState({...loginState, username: e.target.value})}
                  />
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Senha (123)" 
                    value={loginState.password}
                    onChange={(e) => setLoginState({...loginState, password: e.target.value})}
                  />
                  <button onClick={handleLogin}>Entrar</button>
                  {loginState.error && <p id="login-error" style={{ color: 'red', marginTop: '10px' }}>{loginState.error}</p>}
              </div>
            ) : (
              <div id="student-dashboard" className="container">
                  <h2>Bem-vindo, Aluno!</h2>
                  <div className="dashboard-grid">
                      <div className="dash-card">
                          <h3>Suas Notas</h3>
                          <ul>
                              <li>Matemática: 8.5</li>
                              <li>Português: 9.0</li>
                              <li>Física: 7.5</li>
                          </ul>
                      </div>
                      <div className="dash-card">
                          <h3>Tarefas Pendentes</h3>
                          <ul>
                              <li>Exercício de Álgebra (Para amanhã)</li>
                              <li>Resenha de Literatura (Sexta)</li>
                          </ul>
                      </div>
                  </div>
                  <button onClick={logout} className="cta-btn" style={{ background: '#e74c3c' }}>Sair</button>
              </div>
            )}
        </section>
      </main>

      <footer>
          <div className="footer-content">
              <p>&copy; 2023 Escola Futuro. Todos os direitos reservados.</p>
              <div className="socials">
                  <a href="https://instagram.com/9b_cesgroll" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                      <i className="fab fa-instagram"></i>
                  </a>
              </div>
          </div>
      </footer>
    </>
  );
}
