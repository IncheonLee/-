import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>이준석 포트폴리오</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>👋 About Me</h2>
          <p>오늘보다 더 나은 코드를 고민하는 백엔드 개발자 이준석입니다. 새로운 기술을 배우는 걸 즐기며, 빠르게 변화하는 환경에서도 능동적으로 적응합니다.</p>
        </section>

        <section id="projects">
          <h2>🚀 Projects</h2>

          <div className="project">
            <h3>StockHolm (주식 모의투자)</h3>
            <p>Java, Spring Boot, MySQL, AWS 기반의 주식 커뮤니티 웹 앱. 게시판 CRUD 및 API 개발에 기여.</p>
            <a href="http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noreferrer">🔗 배포 링크</a>
          </div>

          <div className="project">
            <h3>Stack Underflow</h3>
            <p>사용자 질문/답변 중심 커뮤니케이션 게시판. API 품질 및 성능 최적화에 기여.</p>
            <a href="http://stack-underflow.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noreferrer">🔗 배포 링크</a>
          </div>
        </section>

        <section id="skills">
          <h2>🛠 Skills</h2>
          <div className="skills">
            {['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'AWS', 'Git', 'Postman', 'Notion'].map((skill) => (
              <span className="badge" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>📬 Contact</h2>
          <p className="contact">
            <a href="https://github.com/IncheonLee" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:cha14678@naver.com">Email</a>
          </p>
        </section>
      </main>

      <footer>
        © 2025 이준석. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
