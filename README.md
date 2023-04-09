

##   [.gitignore 이용해 git에 추가되지 말아야 할 파일 정의하기](https://kotlinworld.com/269) 

<img src="https://understanding963852.github.io/img/build.png" width="500">

-----------------------------------------
- build폴더를 push할 필요없음


- github pages 라이브러리를 나의 프로젝트에 다운받기

`
PS C:\D\rock> npm install gh-pages
`

- github pages 라이브러리를 통해 build폴더를 github에 올리기

<img src="https://understanding963852.github.io/img/build2.png" width="800">

`
PS C:\D\rock> npm run build
`

- ⬇️ 아래내용을 적으며 build폴더가 github에 올라간다

`
PS C:\D\rock> npm gh-pages -d build
`
