const servicesEl = document.querySelector("#services");
const services = [
  {
    id: "deluge",
    name: "Deluge",
    img: "assets/img/deluge.svg",
    link: "https://deluge.adamnor.com",
  },
  {
    id: "radarr",
    name: "Radarr",
    img: "assets/img/radarr.svg",
    link: "https://radarr.adamnor.com",
  },
  {
    id: "sonarr",
    name: "Sonarr",
    img: "assets/img/sonarr.svg",
    link: "https://sonarr.adamnor.com",
  },
  {
    id: "jellyfin",
    name: "Jellyfin",
    img: "assets/img/jellyfin.svg",
    link: "https://jellyfin.adamnor.com",
  },
];

services.forEach((service) => {
  servicesEl.innerHTML += `
      <a href="${service.link}">
        <div class="service" id="${service.id}">
          <div class="child text-container">
            <h2>${service.name}</h2>
          </div>
          <div class="child img-container">
            <img src="${service.img}" alt="" />
          </div>
        </div>
      </a>
        `;
});
