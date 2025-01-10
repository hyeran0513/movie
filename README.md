# 프로젝트 소개

이 웹사이트는 이스트소프트 부트캠프와 무관하게 혼자서 개발한 프로젝트입니다.<br/>
사용한 기술 스택은 **React**이며, **TMDB API**를 활용하여 만들었습니다.<br/>
디자인은 **넷플릭스**와 **CGV**를 모티브로 제작되었습니다.

## 학습 배경

React는 1월에 부트캠프에서 배우기로 예정되어 있었으나, 
여전히 **HTML**, **CSS**, **JavaScript**를 학습하는 중입니다.. <br/>
이에 따라 React를 별도로 학습하고 프로젝트를 진행하였습니다.

## 배포 페이지 링크
https://hyeran0513.github.io/icecream-movie/

## QR 코드
![qrcode_hyeran0513 github io (4)](https://github.com/user-attachments/assets/2e5a7bc4-6534-4aa5-a294-b280c56bf02c)


## 사용 기술 스택

| 기술/라이브러리 | 설명 |
| --- | --- |
| **React** | 웹 애플리케이션을 구축하기 위한 JavaScript 라이브러리 |
| **styled-components** | CSS-in-JS 방식을 사용하여 스타일링을 적용하는 라이브러리 |
| **react-icons** | 다양한 아이콘을 React 컴포넌트로 사용할 수 있는 라이브러리 |
| **swiper.js** | 터치 슬라이더 기능을 제공하는 JavaScript 라이브러리 |
| **axios** | 서버와의 HTTP 통신을 위해 사용하는 라이브러리 |
| **react-query** | 서버 데이터 관리 라이브러리 |

## 사용 API

TMDB API를 활용하여 다음과 같은 엔드포인트를 사용하였습니다.

| API                          | 설명                               |
| ---------------------------- | ---------------------------------- |
| `/movie/${movieId}`          | 특정 영화의 상세 정보 조회 |
| `/movie/now_playing`         | 현재 상영 중인 영화 조회 |
| `/movie/popular`             | 인기 있는 영화 조회 |
| `/movie/${movieId}/reviews`  | 특정 영화의 리뷰 정보 조회 |
| `/search/movie`              | 영화 검색 결과 조회 |
| `/movie/top_rated`           | 높은 평점을 받은 영화 조회 |
| `/movie/upcoming`            | 개봉 예정인 영화 조회 |
| `/movie/discovery`           | 다양한 조건으로 영화 검색 |
| `/genre/movie/list`          | 영화 장르 목록 조회 |

## 주요 기능

1. **인기 영화 조회**  
   인기 있는 영화를 조회할 수 있습니다.

2. **평점 높은 순으로 영화 조회**  
   높은 평점을 받은 영화를 조회할 수 있습니다.

3. **현재 상영 중인 영화 조회**  
   현재 상영 중인 영화를 조회할 수 있습니다.

4. **개봉 예정인 영화 조회**  
   개봉 예정인 영화를 조회할 수 있습니다.

5. **영화 상세 보기 및 리뷰 조회**  
   - 영화 카드의 **상세보기 버튼** 클릭 시, 해당 영화의 상세 정보를 확인할 수 있습니다.  
   - 영화에 대한 리뷰 또한 확인 가능합니다.

6. **사용자 선호 영화 조회**
   필터링 기능을 이용하여 영화를 조회할 수 있습니다.

7. **다크모드/라이트모드 전환**  
   사용자의 선호에 따라 **다크모드**와 **라이트모드**를 전환할 수 있습니다.
