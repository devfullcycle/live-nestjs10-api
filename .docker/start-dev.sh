#!/bin/bash

npm install
npx prisma migrate dev

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

tail -f /dev/null