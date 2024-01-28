//! 깃 - 버전 관리 시스템 
// 파일 변경 이력을 관리하는 소프트웨어 시스템
// ? 중요성
// 협업 강화 , 변경 이력 추적 , 데이터 백업 및 복구

// ! 깃 사용 방법

// 1. 설치
// : 구글 > git > 공식웹사이트

// 2. 기본설정 (git에 사용자 이름과 이메일 설정)
//  시작버튼 > 자격 증명 관리자 > Windows 자격 증명 > 일반 자격 증명
// git / github . sourcetree 에서 타인의 아이디로 설정 되어있는 경우 삭제
// 브라우저에서 깃허브에 로그인 상태 확인

// 사용자 이름과 이메일 설정
// : Windows (Git Bash, cmd)

// 사용자 이름 설정
// git config --global user .name 본인아이디  (복사는 컨c 후 쉬프트 인서트)

// 사용자 이메일 주소 설정
// git config --global user .email 깃허브이메일

// 설정확인

// git config
// $ git config --global user.name "John Doe"
// $ git config --global user.email johndoe@example.com

//! Git의 구조적 요소
// 1. workspace 개발자가 코드를 작성하는 공간
// 2. staging area 커밋하기 전에 파일의 변경사항을 준비하는 장소, 기존의 로컬 스토리지와의 변경사항을 검토하고 커밋할 항목을 결정
// 3. local Repository 사용자의 개인 컴퓨터에 위치한 저장소, 개인 작업을 진행하고 저장
// 4. remote reponsitory 인터넷이나 네트워크에 위치한 저장소, 깃허브의 호스팅 서비스를 사용

// ! Git의 중요 명령어

// 1. 깃 '저장소 초기화'
// : git init >> 명령어 사용 시 해당 폴더에 .git 디렉토리가 생성
// 2. 깃 상태 확인
// : git status >> 현재 저장소의 상태를 보여줌 (변경된 파일, 스테이징 파일, 커밋되지 않은 사항 등)
// 3. 깃 사용 명령어 
//? git add .  >> 파일을 스테이징 영역에 추가하여 깃에 추적하게 함
// :git add 파일명 / git add . (모든 변경사항 추가)

// ? git commit -m "커밋 메세지"
// 스테이징 영역의 변경사항을 로컬 저장소의 기록으로 작성 (20240128 KDH work)

// ? git push
// 로컬 변경 사항을 리모트 저장소에 업로드
// git push origin main

// ? git pull
// : 리모트 저장소의 변경사항을 로컬로 가져오는 명령어
// 로컬에서 작업환경 (work space) 까지 바로 사용 가능
// git pull origin main

// ! 깃과 깃허브 연동
// ?리모트 저장소 추가
// : 작업하는 환경(work space)과 원격리포지토리를 연결
// :git romote add origin 리모트저장소 url

// ! 연동된 자장소에 새로운 파일 추가
