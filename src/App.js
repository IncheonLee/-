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
          <p>
            안녕하세요! 저는 Java와 Spring Boot를 중심으로 웹 백엔드 개발을 공부하고 있는 이준석입니다.
            세명대학교 정보통신학부에서 임베디드공학까지 복수전공하며 컴퓨터 전반에 대한 기초를 다졌고,
            이후 Code States 백엔드 부트캠프를 수료하며 실전 경험을 쌓았습니다.
          </p>
          <p>
            부트캠프에서는 팀 프로젝트를 통해 페어 프로그래밍, 코드 리뷰, Git 협업 등 실제 개발 프로세스를 익혔습니다.
            졸업작품으로 수어 번역 시스템을 개발하며 머신러닝과 사용자 편의성에 대한 고민도 경험했습니다.
            꾸준한 개선과 배움을 즐기는 개발자가 되기 위해 매일 기록하고 실험합니다.
          </p>
        </section>

        <section id="projects">
          <h2>🚀 Projects</h2>

          <div className="project">
            <img src="https://via.placeholder.com/600x300?text=StockHolm" alt="StockHolm" className="thumbnail"/>
            <h3>StockHolm (주식 모의투자)</h3>
            <p>
              Spring Boot 기반의 주식 모의투자 및 커뮤니티 플랫폼입니다.
              로그인/회원가입, 게시판 CRUD, 댓글, 좋아요, AWS S3 정적 배포까지 직접 구현했습니다.
              실시간 주식 데이터 연동은 팀원과 협력하여 개발했습니다.
            </p>
            <div>
              <span className="badge">Spring Boot</span>
              <span className="badge">MySQL</span>
              <span className="badge">AWS</span>
              <span className="badge">JPA</span>
            </div>
            <a href="http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noreferrer">🔗 배포 링크</a>
          </div>

          <div className="project">
            <img src="https://via.placeholder.com/600x300?text=Stack+Underflow" alt="Stack Underflow" className="thumbnail"/>
            <h3>Stack Underflow</h3>
            <p>
              StackOverflow 클론 프로젝트로, 질문/답변 게시판 기능 구현에 집중했습니다.
              회원 기능, 댓글, 정렬/검색 기능, RESTful API 구현 및 Swagger 문서화에 기여했습니다.
            </p>
            <div>
              <span className="badge">Spring Security</span>
              <span className="badge">Spring Boot</span>
              <span className="badge">MySQL</span>
            </div>
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
