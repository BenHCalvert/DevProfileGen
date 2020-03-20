const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };
  
  module.exports = function generateHTML(data, res) {
    return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          
          
          <title>Developer Profile</title>
          <style>
              @page {
                margin: 0;
              }
             *,
             *::after,
             *::before {
             box-sizing: border-box;
             }
             html, body {
             padding: 0;
             margin: 0;
             }
             html, body, .wrapper {
             height: 100%;
             }
             .wrapper {
             padding-top: 100px;
             }
             body {
             background-color: white;
             
             font-family: Georgia, 'Times New Roman', Times, serif;
             }
             main {
            
             height: auto;
             padding-top: 30px;
             }
             h1, h2, h3, h4, h5, h6 {
             font-family: Georgia, 'Times New Roman', Times, serif;
             margin: 0;
             }
             h1 {
             font-size: 34px;
             }
             h2 {
             font-size: 32px;
             }
             h3 {
             font-size: 30px;
             }
             h4 {
             font-size: 28px;
             }
             h5 {
             font-size: 26px;
             }
             h6 {
             font-size: 26px;
             }
             .photo-header {
             position: relative;
             margin: 0 auto;
             margin-bottom: -50px;
             display: flex;
             justify-content: center;
             flex-wrap: wrap;
             background-color: ${colors[data.color].headerBackground};
             color: ${colors[data.color].headerColor};
             padding: 10px;
             width: 95%;
             border-radius: 6px;
             }
             .photo-header img {
             width: 250px;
             height: 250px;
             border-radius: 50%;
             object-fit: cover;
             margin-top: -75px;
             border: 6px solid ${colors[data.color].photoBorderColor};
             box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
             }
             .photo-header h1, .photo-header h2 {
             width: 100%;
             text-align: center;
             }
             .photo-header h1 {
             margin-top: 10px;
             }
             .links-nav {
             width: 100%;
             text-align: center;
             padding: 20px 0;
             font-size: 1.1em;
             }
             .nav-link {
             display: inline-block;
             margin: 5px 10px;
             }
             .workExp-date {
             font-style: italic;
             font-size: .7em;
             text-align: right;
             margin-top: 10px;
             }
             .container {
             padding: 50px;
             padding-left: 100px;
             padding-right: 100px;
             }
    
             .row {
               display: flex;
               flex-wrap: wrap;
               justify-content: space-between;
               margin-top: 20px;
               margin-bottom: 20px;
             }
    
             .card {
               padding: 20px;
               border-radius: 6px;
               background-color: ${colors[data.color].headerBackground};
               color: ${colors[data.color].headerColor};
               margin: 20px;
             }
             
             .col {
             flex: 1;
             text-align: center;
             }
    
             a, a:hover {
             text-decoration: none;
             color: inherit;
             font-weight: bold;
             }
    
             @media print { 
              body { 
                zoom: .75; 
              } 
             }
          </style>
          </head>
    <body class="wrapper">
    <div class="photo-header">
      <img src="${res[0].data.avatar_url}" alt="" />
      <h2>Hello!</h2>
      <br>
      <br>
      <h2>My name is ${res[0].data.name}</h2>
      <br>
      <br>
      <br>
      <center><h5>Currently Working at ${res[0].data.company}.</h5></center>
      <div class="links-nav">
        <a target="_blank" href="https://www.google.com/maps/place/${res[0].data.location}" class="nav-link"><i class="fas fa-location-arrow"></i> ${res[0].data.location}</a>
        <a target="_blank" href="${res[0].data.html_url}" class="nav-link"><i class="fab fa-github-square"></i> GitHub</a>
        <a target="_blank" href="${res[0].data.blog}" class="nav-link"> <i class="fas fa-rss-square"></i> Blog</a>
      </div>
    </div>
    <!--end photo-header-->
    <main class="container">
    <br>
    <br>
      <h3>${res[0].data.bio}</h3>
      <div class="row">
        <div class="card col">
          <h3>Public Repositories</h3>
          <h4>${res[0].data.public_repos}</h4>
        </div>
        <div class="card col">
          <h3>Followers</h3>
          <h4>${res[0].data.followers}</h4>
        </div>
      </div>
    <div class="row">
        <div class="card col">
          <h3>GitHub Stars</h3>
          <h4>${res[1].data.length}</h4>
        </div>
        <div class="card col">
          <h3>Following</h3>
          <h4>${res[0].data.following}</h4>
        </div>
    </div>
  </main>
  <footer>
  <div style="height: 300px">
  </div>
  </footer>
  </body>
  </html>
        `;
  };