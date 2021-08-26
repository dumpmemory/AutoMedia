# media-server
Welcome to Adamnor Cloud Services™
## Radarr
Enable `Rename Episodes`

| Setting               | Value                                         |
|-----------------------|-----------------------------------------------|
| Colon Replacement     | Delete                                        |
| Standard Movie Format | {Movie Title} ({Release Year}) {Quality Full} |
| Movie Folder Format   | {Movie Title} ({Release Year})                |
## Sonarr
Enable `Rename Episodes`
| Setting                 | Value                               |
|-------------------------|-------------------------------------|
| Standard Episode Format | Episode S{season:00}E{episode:00} - |
| Daily Episode Format    | Episode S{season:00}E{episode:00} - |
| Anime Episode Format    | Episode S{season:00}E{episode:00} - |
| Series Folder Format    | {Series TitleYear}                  |
| Season Folder Format    | Season {season:00}                  |
| Specials Folder Format  | Specials                            |
| Multi-Episode Style     | Scene                               |

## Folder Structure
<!-- We're going to use a mounted drive that we're going to use as storage for downloads and your media. In this example the mounted drive will be mounted to /mnt/ with the following folder structure. -->
```
data
├── torrents
│  ├── movies
│  ├── music
│  └── tv
├── usenet
│  ├── movies
│  ├── music
│  └── tv
└── media
   ├── movies
   ├── music
   └── tv
```
### TODO:
- Proxy for deluge
- 



### Credits: 
- https://trash-guides.info/Hardlinks/How-to-setup-for/Docker/

<!-- ## Example docker-compose
```docker
version: "3.2"
services:
  radarr:
    container_name: radarr
    image: ghcr.io/hotio/radarr:latest
    restart: unless-stopped
    logging:
      driver: json-file
    network_mode: bridge
    ports:
      - 7878:7878
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /docker/appdata/radarr:/config
      - /data:/data
  sonarr:
    container_name: sonarr
    image: ghcr.io/hotio/sonarr:latest
    restart: unless-stopped
    logging:
      driver: json-file
    network_mode: bridge
    ports:
      - 8989:8989
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /docker/appdata/sonarr:/config
      - /data:/data
  bazarr:
    container_name: bazarr
    image: ghcr.io/hotio/bazarr:latest
    restart: unless-stopped
    logging:
      driver: json-file
    network_mode: bridge
    ports:
      - 6767:6767
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /docker/appdata/bazarr:/config
      - /data/media:/data/media
  sabnzbd:
    container_name: sabnzbd
    image: ghcr.io/hotio/sabnzbd:latest
    restart: unless-stopped
    logging:
      driver: json-file
    network_mode: bridge
    ports:
      - 8080:8080
      - 9090:9090
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /docker/appdata/sabnzbd:/config
      - /data/usenet:/data/usenet:rw
``` -->
