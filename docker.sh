#!/usr/bin/env bash

#
# Start all containers: `sudo ./start.sh`
# Update all containers: `sudo ./start.sh update`
# Restart all containers: `sudo ./start.sh restart`
#

# Start all containers
docker_cmd=("docker-compose --env-file .env")
for config in docker/*.yml; do
    docker_cmd+=("-f $config")
done

if [[ $1 == "start" ]]; then
    docker_cmd+=("up -d")
    eval "${docker_cmd[@]}"
fi

# Optionally down all and update
if [[ $1 == "update" || $1 == "restart" ]]; then
    docker_cmd_down=("${docker_cmd[@]}" "down")
    eval "${docker_cmd_down[@]}"

    if [[ $1 == "update" ]]; then
        docker_cmd_down=("${docker_cmd[@]}" "pull")
        eval "${docker_cmd_update[@]}"
    fi
    docker_cmd+=("up -d")
    eval "${docker_cmd[@]}"
fi

if [[ $1 == "stop" ]]; then
    docker_cmd_stop=("${docker_cmd[@]}" "down")
    eval "${docker_cmd_stop[@]}"
fi
