# 📚 Learning Content Generator

> Claude API로 매일 학습 콘텐츠 자동 생성하기

매일 새로운 걸 배우고 싶은데, 매번 "오늘 뭘 어떻게 공부하지?" 하면서 시간 보내기 싫어서 만든 개인 프로젝트입니다.

Claude한테 물어보면 1시간짜리 학습 계획을 체계적으로 짜주는데, 매번 같은 프롬프트 치기 귀찮아서 자동화했어요.

## 🎯 이런 분께 추천

- 매일 새로운 기술/개념 공부하고 싶은 개발자
- 체계적으로 학습 계획 세우는 걸 좋아하는 사람  
- Claude 쓰는데 매번 같은 프롬프트 치기 귀찮한 사람
- VSCode에서 뭔가 자동화하는 걸 좋아하는 사람

## ✨ 뭘 해주는지

- **단축키 하나로 실행**: `Ctrl+Shift+L` 누르면 끝
- **1시간 강의 구성**: 10분씩 6개 세션으로 나눠서 체계적으로
- **마크다운 파일 생성**: 노션이나 옵시디언에 바로 복붙 가능
- **여러 주제 한 번에**: 배치로 돌려서 일주일치 미리 준비

## 🚀 사용법

### 설치

```bash
git clone https://github.com/your-username/learning-content-generator.git
cd learning-content-generator
npm install
```

### Claude API 키 설정

1. [Anthropic 콘솔](https://console.anthropic.com)에서 API 키 받기
2. `.env` 파일 만들고 키 넣기:

```env
ANTHROPIC_API_KEY=여기에_당신의_API_키
```

### VSCode에서 사용

1. VSCode로 폴더 열기
2. `Ctrl+Shift+L` 누르기
3. 주제 입력 (예: "Docker 기초")
4. 난이도, 스타일 선택
5. 끝! 📄

## 📁 어떻게 생겼는지

```
my-learning-automation/
├── templates/          # 프롬프트 템플릿들
├── scripts/           # 실제 동작하는 스크립트들  
├── output/generated/  # 생성된 학습 자료들
├── .vscode/          # VSCode 설정
└── .env              # API 키 (본인만 알아야 함)
```

## 🎨 생성 결과 예시

이런 식으로 나옵니다:

```markdown
# React Hooks 심화 - 1시간 완성 가이드

## 🎯 학습 목표
1. useState vs useReducer 언제 뭘 쓸지 알기
2. Custom Hook 만들어서 로직 재사용하기  
3. 실제 프로젝트에서 자주 쓰이는 패턴들

## 📅 10분씩 6세션 구성

### 세션 1: useState 깊게 파보기
**목표**: setState가 비동기인 이유 이해하기
**핵심 내용**: 
- 배치 업데이트가 뭔지
- 함수형 업데이트 언제 써야 하는지
...

**실습**: 카운터 만들면서 setState 타이밍 확인해보기

## 📚 복습 자료
- 체크리스트로 정리된 핵심 포인트들
- 퀴즈 몇 개
- 더 볼만한 자료 링크들
```

## 🛠️ 커스터마이징

### 프롬프트 바꾸고 싶을 때

`templates/base-template.txt` 파일 열어서 수정하면 됨:

```txt
너는 온라인 콘텐츠 교육 설계자야.
내가 배우고 싶은 주제: {{TOPIC}}

// 여기를 본인 스타일로 바꾸세요
```

### 주제별로 다른 템플릿 쓰고 싶을 때

`templates/subjects/` 폴더에 새 파일 만들면 됨

## 💡 사용 팁

```bash
# 터미널에서 바로 실행
npm run generate "GraphQL 기초"

# 여러 개 한 번에 (batch-generate.js 파일 수정 후)
npm run batch

# 생성된 파일 VSCode에서 바로 열기
npm run quick --topic="Next.js 13 App Router"
```

## 🤔 문제가 생기면

**API 키 에러 날 때**: `.env` 파일 확인하고 키가 맞는지 체크

**VSCode에서 단축키 안 될 때**: 프로젝트 폴더가 루트로 열려있는지 확인

**생성된 파일 어디 갔는지 모를 때**: `output/generated/` 폴더 확인

## 📝 만든 이유

Claude 쓸 때마다 똑같은 프롬프트 복붙하는 게 너무 귀찮았어요. 그래서 VSCode에서 단축키로 바로 실행할 수 있게 만들었습니다.

개인적으로 매일 새로운 걸 배우는 걸 좋아하는데, 학습 계획 세우는 시간을 줄이고 실제 공부하는 시간을 늘리고 싶었거든요.

## 🔧 기술 스택

- Node.js (스크립트 실행용)
- Claude API (콘텐츠 생성)
- VSCode Tasks (IDE 통합)
- 그냥 간단한 JavaScript

## 💬 마지막으로

개인 프로젝트라 코드가 완벽하지 않을 수 있어요. 그래도 실제로 매일 쓰고 있고, 꽤 유용합니다!

혹시 개선 아이디어나 버그 찾으시면 이슈 남겨주세요. 근데 큰 기대는 하지 마세요... 😅

---

⭐ 괜찮다고 생각하시면 스타 눌러주세요!
