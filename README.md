
# <p align="center">:mag_right: Github User Search</p> 

Teste Aplicação:  <a href="https://searching-github-users.netlify.app/">Github User Search</a>

Aplicação criado como intuito por em prática os estudos REACTJS, com a funcionalidade SPA(Single Page Application), e com a responsividade.

A aplicação foi baseada na vídeo aula no [Youtube](https://www.youtube.com/watch?v=dR_Fol8nAzo). As principais funcionalidades aprendidas foram: 

- Fazer buscar dos dados na API do GitHub: 
	- Dados do usuário;
	- Quantidade de followers;
	- Dados dos repositórios;
	- Quais repositórios obtiveram mais forks;
	- Quais repositórios obtiveram mais stars;
	- Quantidade limite de requisições por hora: 60;
	
- Passar os dados da API do GitHub para gráficos:
	- Bar3D;
	- Column3D;
	- Doughnut2D;
	- Pie3D;

- Autenticação utilizando o Auth0 que dá a possibilidade de fazer login com suas redes sociais:
	- GitHub;
	- LinkedIn;
	- Gmail;
	- Caso queira pode criar uma conta também;
	



---
**Tela da aplicação**:

<p align="center">
	<img src="https://user-images.githubusercontent.com/57035171/103894165-6b6df300-50e6-11eb-8920-cd6e06a4299a.png">
</p>
 
 <p align="center">
	 <img src="https://user-images.githubusercontent.com/57035171/103894220-82ace080-50e6-11eb-9c95-b09413525007.png">
</p>

  <p align="center">
	 <img src="https://user-images.githubusercontent.com/57035171/103894251-8e000c00-50e6-11eb-9faf-17ed6cb22d74.png">
</p>




## :computer:  Tecnologias / Ferramentas Utilizadas:
-   [ReactJS](https://pt-br.reactjs.org/)
-   [React Router Dom](https://reactrouter.com/web/guides/quick-start)
-   [Styled Component](https://styled-components.com/)
-   [React Anchor Link Smooth Scroll](https://www.npmjs.com/package/react-anchor-link-smooth-scroll)
-   [Axios](https://github.com/axios/axios)
-   [FusionCharts](https://www.fusioncharts.com/)
-   [Lottie React Web](https://www.npmjs.com/package/lottie-react-web)
-  [Auth0](https://auth0.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [GitHub Api](https://docs.github.com/en/free-pro-team@latest/rest)
	
## :books: Instalação:

Clone o repositório:
```sh
$ git clone https://github.com/dayana-sog/react-github-search-users
```

Aceda a pasta do projeto:
```sh
$ cd react-github-search-users
```
Instale as dependências:
```sh
$ yarn
```

Sobre a autorização:
Vá ao site da [Auth0](https://auth0.com/docs/quickstart/spa/react) siga o passo a passo para buscar a sua **Application Keys** - **Domais** e **Client ID** substitua os dados que estão no arquivo **src/index.js**  no componente **Auth0Provider** e aplique o seu **Domais** e **Client ID**.

Inicie o servidor:
```sh
$ yarn start
```


## 🚀 Deployment: 
https://www.netlify.com/


## 📝  Licença:

Esse projeto está sob a licença MIT. Veja o arquivo  [LICENSE](https://github.com/dayana-sog/react-github-search-users/blob/master/LICENSE)  para mais detalhes.
___
Feito com ♥ by Dayana Gonçalves  👋 
