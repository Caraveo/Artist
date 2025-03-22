#!/bin/bash
cd /var/app/staging
npm ci --legacy-peer-deps
npm run build 