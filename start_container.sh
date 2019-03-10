#!/usr/bin/env bash

IMAGE_NAME="gift_recommender_client"

ROOT="$( pwd )"

yarn

if [[ "$(docker images -q ${IMAGE_NAME}:latest 2> /dev/null)" == "" ]]; then
    echo " ----- Image Does Not Exist. Building Now. -----"
    docker build -t ${IMAGE_NAME} ${ROOT}
else
    echo " ----- Image Available for Use. -----"
fi

echo " ----- Run Application in a Disposable Container -----"
docker run \
    -i \
    -t \
    -p 3000 \
    --rm \
    -v ${ROOT}:/src \
    --env-file=${ROOT}/.env \
    ${IMAGE_NAME} \
    bash

echo " ----- EXITED from Disposable Container -----"
echo " ----- REMOVED Exited Container -----"