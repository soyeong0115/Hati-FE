# 🎄 HATI (Holiday Animal Type Indicator)

> **연말을 준비하는 나는 어떤 동물일까?**  
> MBTI 기반 12개 문항으로 나의 연말 동물 유형을 알아보는 심리 테스트 웹 애플리케이션

---

## 💡 Introduction

연말 시즌을 맞아 자신의 성향을 동물로 표현한 재미있는 심리 테스트입니다.  
MBTI 기반의 12개 문항을 통해 나만의 연말 동물 유형을 발견해보세요!

### ⭐️ 주요 기능

- 🎯 **12개 문항 심리 테스트** - 약 3분 소요
- 🐶 **16가지 연말 동물 유형** - 각 MBTI 유형별 고유한 동물 캐릭터와 성격 설명 제공
- 🎄 **크리스마스 테마** - 따뜻한 연말 분위기
- 💬 **피드백 기능** - 사용자 의견 수집
- 🔗 **링크 공유 최적화** - Open Graph 메타 태그 지원

<img width="3600" height="1890" alt="og-image" src="https://github.com/user-attachments/assets/7252a6fd-de70-49a6-8904-f5debd77591f" />

---

## 📋 Project Overview

### 프로젝트 목적

연말 시즌을 맞아 사용자들이 재미있게 자신의 성향을 알아볼 수 있는 심리 테스트 서비스를 개발했습니다.
MBTI 기반의 12개 문항을 통해 16가지 연말 동물 유형 중 하나를 결과로 제공하며,
사용자들이 결과를 공유하고 피드백을 남길 수 있는 기능을 구현했습니다.

### 프로젝트 목표

- **사용자 경험 최적화**: 직관적이고 재미있는 테스트 경험 제공
- **공유 기능 강화**: Open Graph 메타 태그를 통한 소셜 미디어 공유 최적화
- **전체 스택 구현**: Frontend부터 Backend, Database, 배포까지 전 과정 경험
- **실제 서비스 운영**: 배포 후 실제 사용자 피드백 수집 및 개선

### 프로젝트 선택 이유

**우아한테크코스 8기 프리코스 오픈미션**으로 진행한 프로젝트입니다.
심리 테스트라는 재미있는 주제를 선택하여 사용자들이 즐겁게 사용할 수 있는 서비스를 만들고,
동시에 프론트엔드와 백엔드 전반의 기술 스택을 학습하고 적용할 수 있는 기회로 활용했습니다.

---

## 🧩 Server Architecture

//시스템 아키텍쳐 추가 예정

---

## ⚙️ Tech Stack

| 구분                  | 사용 기술                                   |
| -------------------- | ----------------------------------------- |
| **Framework**        | React, TypeScript                         |
| **Styling**          | Tailwind CSS, 커스텀 폰트 (학교안심 둥근미소)    |
| **State Management** | React-Query, Redux-Toolkit                |
| **Build Tool**       | Vite                                      |
| **Deployment**       | Vercel                                    |
| **Analytics**        | Vercel Analytics, Vercel Speed Insights   |

----

## 🗂️ Project Structure

| 폴더명                  | 설명                                      |
| ----------------------- | ----------------------------------------- |
| `src/api`               | API 통신 모듈 (피드백 API)                |
| `src/assets`            | 정적 자산 (폰트, 이미지, SVG)             |
| `src/components`        | 재사용 가능한 UI 컴포넌트                 |
| `src/constants`         | 상수 데이터 (테스트 질문, 결과)           |
| `src/pages`             | 라우팅되는 페이지 컴포넌트                |
| `src/routes`            | 라우팅 설정                               |
| `src/utils`             | 공통 유틸 함수 (MBTI 계산, 텍스트 스타일) |

<details>
<summary>📂 자세한 폴더 구조 (클릭해서 열기)</summary>

```plaintext
HATI_FE/
├── src/
│   ├── api/              # API 클라이언트
│   ├── assets/           # 이미지, 폰트, SVG
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── common/       # 공통 컴포넌트
│   │   ├── home/         # 홈 페이지 컴포넌트
│   │   ├── layout/       # 레이아웃 컴포넌트
│   │   └── test/         # 테스트 페이지 컴포넌트
│   ├── constants/        # 상수 데이터 (질문, 결과)
│   ├── pages/            # 페이지 컴포넌트
│   ├── routes/           # 라우팅 설정
│   └── utils/            # 유틸리티 함수
├── public/               # 정적 파일
└── package.json
```
</details>

---

## 🚀 Deployment URL

- [HATI 바로가기](https://myhati.vercel.app/)

---

## 🙋🏻‍♂️ Frontend Engineers

| Soyeong |
| ------- |
| <img src="https://github.com/soyeong0115.png" width="100"/> |
| <a href="https://github.com/soyeong0115"><img src="https://img.shields.io/badge/soyeong0115-000?style=flat&logo=github&logoColor=white" alt="soyeong0115"/></a> |

