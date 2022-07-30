
# PROJECT : We&Olufsen

#### • 프로젝트 소개
>**Bang & Olufsen 클론 코딩**  
https://www.bang-olufsen.com/ko/kr  
아이코닉 명품 오디오 브랜드 Bang & Olufsen가 가진 고급스러운 느낌을 담은 웹사이트  
회원가입, 로그인, 장바구니, 결제 등	커머스 사이트의 기본적인 FLOW 기능 구현

#### • 작업기간 : 7월 18일 ~ 7월 29일 (2 week)

#### • 팀원 소개
> wecode 35기 1차 프로젝트  
 Dev-Island TEAM  
  **FE** | 신수정, 심동규, 이현주, 정훈조  
  **BE** | 박서윤, 손찬규
 
#### • 사용기술 및 협업 도구  
> FE: HTML, SCSS, Javascript, React, React-Router  
> BE: Phython, Django, MySQL  
> Common : Git&Github, AWS  
> Comunication : Notion, Slack, Trello  

#### • 구현기능 및 사용 기술 소개 
![gif](https://user-images.githubusercontent.com/62737638/181909170-2f7bf398-dba9-4a8e-a60e-96a455406961.gif)

#### 1. 회원가입 페이지 (FE 정훈조)
 - 클라이언트단 확인가능한 사항 불필요한 통신을 사전에 차단함
 - 정규식 통해 이메일과 패스워드 조건 확인

#### 2. 로그인 페이지 (FE 정훈조)
 클라이언트단 확인가능한 사항 불필요한 통신을 사전에 차단함
 
####  3. 메인 페이지 (FE 신수정)
- 메인 Full Banner 슬라이드 기능 구현
메인 최상단에 위치한 슬라이드 상수데이터(MAIN_BANNER)를 사용해 map함수로 구조분해할당한 뒤  
moving을 state값으로 선언해, useEffect hook을 사용해 컴포넌트가 마운트 되었을 때
데이터의 length값을 인식하여 슬라이드를 움직일 수 있도록 순환시킬 div에 인라인 스타일 값을 적용했다.
슬라이드가 3초에 한번씩 함수를 실행할 수 있도록 setInterval 함수를 이용해 구현했으며
언마운트 시 슬라이드를 종료 할 수 있도록 clearInterval을 사용했다.

- 중앙 카테고리 슬라이드 기능 구현


#### 4. 제품 리스트 페이지 (FE 심동규)

#### 5. 제품 상세 페이지 (FE 이현주)
- 장바구니 이동 모달 기능 구현

#### 6. 장바구니 페이지 (FE 정훈조)
 - 아이템 수량 핸들링시 서버통신에 따라 핸들링함.
 - 서버 pending시 후속 통신을 보류시킴
 
#### 7. my order 페이지 (FE 신수정)

#### 8. 404 페이지  (FE 정훈조)
 - 라우팅외 요청은 404 page로 리다이렉트
#### 9. NAV (FE 정훈조)
 - Position sticky 활용하여 최상단 위치하게 
#### 10. Footer (FE 정훈조)
 - 상수데이터 활용하여 구성
