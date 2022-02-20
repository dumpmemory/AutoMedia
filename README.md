# AutoMedia
Simple docker stack for deploying a jellyfin media server with automated TV-show and Movies download through Sonarr and Radarr using Prowlarr as the indexer manager, deluge as download client and gluetun as a VPN container.


## TODO:
- [x] Proxy/VPN for deluge
  - Added via gluetun
- [x] Add Cloudflare end-to-end SSL CA
- [x] Add CloudFlare DDoS protection
- [x] Migrate to Prowlarr from Jackett 
- [x] Add unpackerr
  - https://github.com/davidnewhall/unpackerr
- [ ] Research nginx proxy manager vs nginx for future migration from caddy v2
- [ ] Add authentication
   - Authelia (https://github.com/authelia/authelia) 

## Radarr
Enable `Rename Episodes`

| Setting               | Value                                             |
|-----------------------|---------------------------------------------------|
| Colon Replacement     | Delete                                            |
| Standard Movie Format | {Movie Title} ({Release Year}) {Quality Full}     |
| Movie Folder Format   | {Movie Title} ({Release Year}) [tmdbid-{tmdb ID}] |
| Propers and Repacks   | Prefer and Upgrade                                |

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
| Propers and Repacks     | Prefer and Upgrade                  |

## Folder Structure
Using the following folder structure for Instant moves and hardlinks in Sonarr and Radarr

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
### Credits: 
- https://trash-guides.info/Hardlinks/How-to-setup-for/Docker/
