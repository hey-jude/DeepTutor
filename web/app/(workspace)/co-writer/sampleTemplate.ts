const FENCE = "```";

export const CO_WRITER_SAMPLE_TEMPLATE = `# DeepTutor Co-Writer

> DeepTutor's built-in writing canvas for notes, reports, tutorials, and AI-assisted drafts.

### Features

- Support Standard Markdown / CommonMark / GFM for everyday writing
- Real-time preview for headings, tables, code, math, flowchart, and sequence diagrams
- AI editing workflows for rewrite, shorten, and expand
- HTML tag decoding for tags like <sub>, <sup>, <abbr>, and <mark>
- A practical starter draft for DeepTutor product docs and learning content

## Headers (Underline)

DeepTutor Learning Note
=============

DeepTutor Study Outline
-------------

### Characters

----

~~Deprecated behavior~~ <s>Legacy formatting path</s>
*Italic* _Italic_
**Emphasis** __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sup>2</sup>, Subscript: O<sub>2</sub>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Large Language Model">LLM</abbr> layer powers DeepTutor while the <abbr title="Retrieval Augmented Generation">RAG</abbr> layer provides grounded knowledge support.

### Blockquotes

> DeepTutor helps students turn questions into structured understanding.
>
> "Learn deeply, write clearly.", [DeepTutor](#deeptutor-co-writer)

### Links

[DeepTutor Co-Writer](#deeptutor-co-writer "co-writer section")

[DeepTutor Learning Note](#deeptutor-learning-note)

[DeepTutor Website](https://deeptutor.info)

[Reference link][deeptutor-doc]

[deeptutor-doc]: #deeptutor-learning-note

### Code Blocks

#### Inline code

\`deeptutor chat --once "Summarize this section"\`

#### Code Blocks (Indented style)

    from deeptutor.runtime.orchestrator import ChatOrchestrator
    orchestrator = ChatOrchestrator()
    print("DeepTutor is ready.")

#### Python

${FENCE}python
from deeptutor.runtime.orchestrator import ChatOrchestrator
from deeptutor.core.context import UnifiedContext


async def run_demo() -> str:
    orchestrator = ChatOrchestrator()
    context = UnifiedContext(
        user_query="Explain Newton's second law",
        capability="chat",
    )
    result = await orchestrator.run(context)
    return result.get("response", "")
${FENCE}

#### JSON config

${FENCE}json
{
  "app_name": "DeepTutor",
  "default_capability": "chat",
  "enabled_tools": ["rag", "web_search", "exec", "reason"],
  "ui": {
    "co_writer_template": true
  }
}
${FENCE}

#### HTML code

${FENCE}html
<section class="deeptutor-card">
  <h1>DeepTutor</h1>
  <p>Write, revise, and organize learning content with AI.</p>
</section>
${FENCE}

### Images

![](/logo-ver2.png)

> DeepTutor brand mark used inside the co-writer template.

### Lists

- DeepTutor Chat
- DeepTutor Co-Writer
- DeepTutor Research

1. Draft a concept note
2. Ask AI to refine it
3. Export the polished markdown

### Tables

Feature       | Description
------------- | -------------
Co-Writer     | Draft and refine Markdown content
Chat          | Ask questions and iterate ideas
Research      | Build structured multi-step reports

| Capability    | Primary Use Case                     |
| ------------- | ------------------------------------ |
| \`chat\`       | General tutoring and guidance        |
| \`deep_solve\` | Structured problem solving           |
| \`deep_question\` | Question generation and validation |

### Markdown extras

- [x] Draft a DeepTutor product note
- [x] Add references and structure
- [ ] Polish the final explanation
  - [ ] Check headings
  - [ ] Check citations

### TeX (LaTeX)

$$ E=mc^2 $$

Inline $$E=mc^2$$ appears in physics notes, and Inline $$a^2+b^2=c^2$$ appears in geometry notes.

$$\\sqrt{3x-1}+(1+x)^2$$

$$ \\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$

### FlowChart

${FENCE}flow
st=>start: Student asks a question
op=>operation: DeepTutor analyzes intent
cond=>condition: Need deep workflow?
chat=>operation: Answer with chat capability
solve=>operation: Route to deep solve
e=>end: Return structured response

st->op->cond
cond(no)->chat
cond(yes)->solve
chat->e
solve->e
${FENCE}

### Sequence Diagram

${FENCE}seq
Student->DeepTutor: Ask for help
DeepTutor->KnowledgeBase: Load context
Note right of DeepTutor: Collect memory\\nand relevant knowledge
DeepTutor-->Student: Return guided response
Student->>DeepTutor: Request rewrite in co-writer
${FENCE}

### End
`;

export const CO_WRITER_SAMPLE_TEMPLATE_KO = `# DeepTutor Co-Writer — 한국어 템플릿

> 노트, 보고서, 튜토리얼 및 AI 지원 초안을 위한 DeepTutor의 기본 글쓰기 캔버스입니다.

### 기능

- 일상적인 글쓰기를 위한 표준 Markdown / CommonMark / GFM 지원
- 헤더, 표, 코드, 수학식, 플로차트 및 시퀀스 다이어그램 실시간 미리보기
- 다시 쓰기, 축약 및 확장을 위한 AI 편집 워크플로
- <sub>, <sup>, <abbr>, <mark>와 같은 태그의 HTML 태그 디코딩
- DeepTutor 제품 문서와 학습 콘텐츠를 위한 실용적인 시작 초안

## 헤더 (밑줄 스타일)

DeepTutor 학습 노트
=============

DeepTutor 학습 개요
-------------

### 문자 서식

----

~~사용 중단된 동작~~ <s>레거시 서식 경로</s>
*기울임* _기울임_
**강조** __강조__
***기울임 강조*** ___기울임 강조___

위 첨자: X<sup>2</sup>, 아래 첨자: O<sub>2</sub>

**약어(link HTML abbr tag)**

<abbr title="Large Language Model">LLM</abbr> 계층은 DeepTutor를 구동하고, <abbr title="Retrieval Augmented Generation">RAG</abbr> 계층은 근거가 있는 지식 지원을 제공합니다.

### 인용문

> DeepTutor는 학생들이 질문을 구조화된 이해로 바꾸도록 돕습니다.
>
> "깊이 배우고, 명확하게 쓰세요.", [DeepTutor](#deeptutor-co-writer)

### 링크

[DeepTutor Co-Writer](#deeptutor-co-writer "co-writer section")

[DeepTutor 학습 노트](#deeptutor-learning-note)

[DeepTutor 웹사이트](https://deeptutor.info)

[참조 링크][deeptutor-doc]

[deeptutor-doc]: #deeptutor-learning-note

### 코드 블록

#### 인라인 코드

\`deeptutor chat --once "Summarize this section"\`

#### 코드 블록 (들여쓰기 스타일)

    from deeptutor.runtime.orchestrator import ChatOrchestrator
    orchestrator = ChatOrchestrator()
    print("DeepTutor is ready.")

#### Python

${FENCE}python
from deeptutor.runtime.orchestrator import ChatOrchestrator
from deeptutor.core.context import UnifiedContext


async def run_demo() -> str:
    orchestrator = ChatOrchestrator()
    context = UnifiedContext(
        user_query="Explain Newton's second law",
        capability="chat",
    )
    result = await orchestrator.run(context)
    return result.get("response", "")
${FENCE}

#### JSON 설정

${FENCE}json
{
  "app_name": "DeepTutor",
  "default_capability": "chat",
  "enabled_tools": ["rag", "web_search", "code_execution", "reason"],
  "ui": {
    "co_writer_template": true
  }
}
${FENCE}

#### HTML 코드

${FENCE}html
<section class="deeptutor-card">
  <h1>DeepTutor</h1>
  <p>AI로 학습 콘텐츠를 작성하고, 수정하고, 정리하세요.</p>
</section>
${FENCE}

### 이미지

![](/logo-ver2.png)

> Co-Writer 템플릿 안에 사용된 DeepTutor 브랜드 마크입니다.

### 목록

- DeepTutor Chat
- DeepTutor Co-Writer
- DeepTutor Research

1. 개념 노트 초안 작성
2. AI에게 다듬기 요청
3. 완성된 마크다운 내보내기

### 표

기능       | 설명
------------- | -------------
Co-Writer     | Markdown 콘텐츠 작성 및 다듬기
Chat          | 질문하고 아이디어 반복 발전시키기
Research      | 구조화된 다단계 보고서 만들기

| 기능         | 주요 사용 사례                    |
| ------------- | ------------------------------------ |
| \`chat\`       | 일반적인 튜터링 및 안내              |
| \`deep_solve\` | 구조화된 문제 해결                  |
| \`deep_question\` | 질문 생성 및 검증                 |

### Markdown 추가 기능

- [x] DeepTutor 제품 노트 초안 작성
- [x] 참고 자료와 구조 추가
- [ ] 최종 설명 다듬기
  - [ ] 헤더 확인
  - [ ] 인용 확인

### TeX (LaTeX)

$$ E=mc^2 $$

물리 노트에는 인라인 $$E=mc^2$$가, 기하 노트에는 인라인 $$a^2+b^2=c^2$$가 나타납니다.

$$\\sqrt{3x-1}+(1+x)^2$$

$$ \\sin(\\alpha)^{\\theta}=\\sum_{i=0}^{n}(x^i + \\cos(f))$$

### 플로차트

${FENCE}flow
st=>start: 학생이 질문함
op=>operation: DeepTutor가 의도를 분석함
cond=>condition: 심층 워크플로가 필요한가?
chat=>operation: chat 기능으로 답변함
solve=>operation: deep solve로 라우팅함
e=>end: 구조화된 응답 반환

st->op->cond
cond(no)->chat
cond(yes)->solve
chat->e
solve->e
${FENCE}

### 시퀀스 다이어그램

${FENCE}seq
학생->DeepTutor: 도움 요청
DeepTutor->KnowledgeBase: 컨텍스트 로드
Note right of DeepTutor: 메모리\\n및 관련 지식 수집
DeepTutor-->학생: 안내 응답 반환
학생->>DeepTutor: Co-Writer에서 다시 쓰기 요청
${FENCE}

### 끝
`;

export function getCoWriterSampleTemplate(lang: string): string {
  // zh falls back to EN template intentionally — no separate ZH template
  return lang?.startsWith("ko")
    ? CO_WRITER_SAMPLE_TEMPLATE_KO
    : CO_WRITER_SAMPLE_TEMPLATE;
}

export function isCoWriterSampleTemplate(content: string): boolean {
  const t = content.trim();
  return (
    t === CO_WRITER_SAMPLE_TEMPLATE.trim() ||
    t === CO_WRITER_SAMPLE_TEMPLATE_KO.trim()
  );
}
