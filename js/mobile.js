
console.log('Javascript Loaded!');
/*
https://mbo-sd.nl/period3-fetch/games-mobile-disney-interactive
https://mbo-sd.nl/period3-fetch/games-mobile-konami
https://mbo-sd.nl/period3-fetch/games-mobile-niantic
*/

// de fetch voor de console pagina wordt hier vanaf de html gecopied en gepaste//
fetch('https://mbo-sd.nl/period3-fetch/games-mobile-disney-interactive')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".card-1").innerHTML = `
                  <div class="card h-100" >
            <img src="${data[0].img}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title ">${data[0].title} <span class="badge bg-secondary">New</span></h5>
              <p class="card-text">${data[0].description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>`;

    document.querySelector(".card-2").innerHTML = `
         <div class="card h-100">
            <img src="${data[1].img}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title ">${data[1].title} <span class="badge bg-secondary">New</span></h5>
              <p class="card-text">${data[1].description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>`;

    document.querySelector(".card-3").innerHTML = `
                    <div class="card h-100">
              <img src="${data[2].img}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title ">${data[2].title}</h5>
                <p class="card-text">${data[2].description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>`;

    document.querySelector(".card-10").innerHTML = `
          <div class="card mb-3">
          <img src="${data[0].img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[0].title}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>`;
  });




fetch('https://mbo-sd.nl/period3-fetch/games-mobile-konami')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".card-4").innerHTML = `
                     <div class="card h-100">
               <img src="${data[0].img}" class="card-img-top img-fluid" alt="...">
               <div class="card-body">
                 <h5 class="card-title ">${data[0].title} <span class="badge bg-secondary">New</span></h5>
                 <p class="card-text">${data[0].description}</p>
               </div>
               <div class="card-footer">
                 <small class="text-muted">Last updated 3 mins ago</small>
               </div>
             </div>
           </div>`;

    document.querySelector(".card-5").innerHTML = `
            <div class="card h-100">
            <img src="${data[1].img}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title ">${data[1].title} <span class="badge bg-secondary">New</span></h5>
              <p class="card-text">${data[1].description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>`;

    document.querySelector(".card-6").innerHTML = `
                       <div class="card h-100">
                 <img src="${data[2].img}" class="card-img-top img-fluid" alt="...">
                 <div class="card-body">
                   <h5 class="card-title ">${data[2].title}</h5>
                   <p class="card-text">${data[2].description}</p>
                 </div>
                 <div class="card-footer">
                   <small class="text-muted">Last updated 3 mins ago</small>
                 </div>
               </div>
             </div>`;
  });


fetch('https://mbo-sd.nl/period3-fetch/games-mobile-niantic')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector(".card-7").innerHTML = `
                     <div class="card h-100">
               <img src="${data[0].img}" class="card-img-top img-fluid" alt="...">
               <div class="card-body">
                 <h5 class="card-title ">${data[0].title} <span class="badge bg-secondary">New</span></h5>
                 <p class="card-text">${data[0].description}</p>
               </div>
               <div class="card-footer">
                 <small class="text-muted">Last updated 3 mins ago</small>
               </div>
             </div>
           </div>`;

    document.querySelector(".card-8").innerHTML = `
            <div class="card h-100">
            <img src="${data[1].img}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title ">${data[1].title} <span class="badge bg-secondary">New</span></h5>
              <p class="card-text">${data[1].description}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>`;

    document.querySelector(".card-9").innerHTML = `
                       <div class="card h-100">
                 <img src="${data[2].img}" class="card-img-top img-fluid" alt="...">
                 <div class="card-body">
                   <h5 class="card-title ">${data[2].title}</h5>
                   <p class="card-text">${data[2].description}</p>
                 </div>
                 <div class="card-footer">
                   <small class="text-muted">Last updated 3 mins ago</small>
                 </div>
               </div>
             </div>`;
  });
