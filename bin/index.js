#!/usr/bin/env node
const { createApp } = require('../lib/create-app');

const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
    console.error('❌ 請輸入專案名稱');
    process.exit(1);
}

createApp(projectName);