Marquee3k.init();

const servicesEl = document.querySelector(".services");
const services = [
  {
    id: "uptime",
    name: "Uptime Kuma",
    img: "../assets/img/uptime-kuma.svg",
    link: "https://status.adamnor.com",
    desc: "Server monitoring",
  },
  {
    id: "jellyfin",
    name: "Jellyfin",
    img: "../assets/img/jellyfin.svg",
    link: "https://jellyfin.adamnor.com",
    desc: "Local media server",
  },
  {
    id: "deluge",
    name: "Deluge",
    img: "../assets/img/deluge.svg",
    link: "https://deluge.adamnor.com",
    desc: "Download client",
  },
  {
    id: "radarr",
    name: "Radarr",
    img: "../assets/img/radarr.svg",
    link: "https://radarr.adamnor.com",
    desc: "Movie management",
  },
  {
    id: "sonarr",
    name: "Sonarr",
    img: "../assets/img/sonarr.svg",
    link: "https://sonarr.adamnor.com",
    desc: "TV-shows management",
  },
];

services.forEach((service) => {
  servicesEl.innerHTML += `
    <a href="${service.link}">
      <div class="service" id="${service.id}">
        <div class="child top-container">
          <div class="child img-container">
            <img src="${service.img}" alt="" />
          </div>
          <h2>${service.name}</h2>
        </div>
        <p class="service-desc">${service.desc}</p>
      </div>
    </a>
        `;
});
