학교 말 탐험대 6차 — 실제 번역 API + 포스터 기능

[1] 준비
- Node.js 18 이상 설치
- Google Cloud 프로젝트 생성
- Cloud Translation API 활성화
- 서비스 계정 생성 및 JSON 키 발급
- 서비스 계정 인증을 위해 GOOGLE_APPLICATION_CREDENTIALS 환경변수 설정

[2] 설치
압축을 푼 폴더에서 터미널:
  npm install

[3] 인증 (Windows PowerShell 예)
  $env:GOOGLE_APPLICATION_CREDENTIALS="C:\경로\service-account.json"

[4] 실행
  npm start

브라우저:
  http://localhost:3000

[5] 작동
- 학생이 조사한 어휘/표현을 선택
- 언어 탐험가에서 목표 언어 클릭
- /api/translate가 Google Cloud Translation으로 실제 번역
- API 키/서비스 계정 정보는 브라우저에 노출되지 않음

[6] 포스터
- 상단 🎨 포스터
- 제목/소개 수정
- 조사한 어휘·표현을 자동으로 포스터에 넣음
- 브라우저 인쇄 기능으로 PDF 저장 가능

주의:
현재 포스터는 1차 기능입니다. 다음 단계에서
- 국가/국기
- 다국어 번역 결과
- 학생 이름/역할
- 장소별 사진
- 말풍선
- 색상/템플릿 선택
- A3/A4 인쇄용 레이아웃
등을 넣어 '우리 조 다국어 학교생활 포스터 만들기'로 발전시키는 것을 권장합니다.

Google Cloud Translation은 Basic API에서 API key를 지원하지만, Advanced API는 API key를 지원하지 않고 인증이 필요합니다. 이 프로젝트는 서버 측 인증 구조를 사용합니다.


추가된 번역 언어
- Italiano (이탈리아어)
- Kiswahili (스와힐리어, 탄자니아)

참고: "탄자니아어"는 일반적으로 독립된 언어 이름이라기보다 탄자니아에서 널리 사용하는 스와힐리어(Kiswahili)를 의미하는 것으로 처리했습니다.
