
// Portfolio.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <header className="p-6 flex justify-between items-center shadow-md bg-gray-900">
        <h1 className="text-2xl font-bold">이준석</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center text-center h-screen px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          오늘보다 더 나은 코드를 고민하는 개발자 이준석입니다.
        </motion.h2>
        <p className="text-lg text-gray-400 max-w-xl">
          새로운 기술을 익히는 데 흥미를 느끼며, 빠르게 변화하는 환경에서 능동적으로 적응할 수 있는 개발자입니다.
        </p>
      </section>
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-gray-300">
          세명대학교 정보통신학부 졸업(복수전공: 임베디드공학). <br />
          Code States 백엔드 과정 수료 (Java, Spring Boot, Spring Security, AWS 등). <br />
          페어 프로그래밍과 코드 리뷰, 협업 프로젝트 2회 진행 경험 보유. <br />
          수어 번역 캡스톤 우수상, 부트캠프 프로젝트 데모데이 투표 1위 수상 경험.
        </p>
      </section>
      <section id="projects" className="py-20 px-6 bg-gray-900 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">StockHolm (주식 모의투자)</h4>
            <p className="text-gray-400 mb-2">
              Java, Spring Boot, MySQL, AWS 기반으로 커뮤니티 기능 포함 주식 모의투자 웹앱. 게시물 CRUD 및 안정적인 API 개발에 기여.
            </p>
            <a href="http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/" className="text-blue-400">배포 보기 →</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Stack Underflow</h4>
            <p className="text-gray-400 mb-2">
              사용자 커뮤니케이션을 강화한 게시판 프로젝트. 성능 최적화와 고품질 API 제공에 중점.
            </p>
            <a href="http://stack-underflow.s3-website.ap-northeast-2.amazonaws.com/" className="text-blue-400">배포 보기 →</a>
          </div>
        </div>
      </section>
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          <li className="bg-gray-800 p-4 rounded-lg">Java</li>
          <li className="bg-gray-800 p-4 rounded-lg">Spring Boot</li>
          <li className="bg-gray-800 p-4 rounded-lg">Spring Security</li>
          <li className="bg-gray-800 p-4 rounded-lg">MySQL</li>
          <li className="bg-gray-800 p-4 rounded-lg">AWS (EC2, RDS, S3)</li>
          <li className="bg-gray-800 p-4 rounded-lg">Git</li>
          <li className="bg-gray-800 p-4 rounded-lg">Postman</li>
          <li className="bg-gray-800 p-4 rounded-lg">Notion</li>
        </ul>
      </section>
      <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400 mb-6">궁금한 점이 있다면 언제든 연락 주세요!</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/IncheonLee" target="_blank">
            <Button variant="outline" className="gap-2">
              <Github className="w-5 h-5" /> GitHub
            </Button>
          </a>
          <a href="mailto:cha14678@naver.com">
            <Button variant="outline" className="gap-2">
              <Mail className="w-5 h-5" /> Email
            </Button>
          </a>
        </div>
      </section>
      <footer className="text-center py-6 text-gray-600 bg-gray-950 border-t border-gray-800">
        © 2025 이준석. All rights reserved.
      </footer>
    </div>
  );
}
