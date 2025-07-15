
const { execSync } = require('child_process');
const fs = require('fs'); //Node.js file-system module
const path = require('path');

function createApp(projectName) {
    console.log(`🚀 建立專案資料夾 ${projectName}...`);
    fs.mkdirSync(projectName);
    process.chdir(projectName);//get into child directory...

    console.log('🛠️ 使用 Vite 初始化...');
    execSync(`npm create vite@latest . -- --template react`, { stdio: 'inherit' });

    console.log('🎨 安裝 Tailwind CSS...');
    execSync('npm install tailwindcss @tailwindcss/vite', { stdio: 'inherit' });

    // tailwindcss official suggestion:
    const viteConfigPath = './vite.config.js';
    if (fs.existsSync(viteConfigPath)) {
        let viteContent = fs.readFileSync(viteConfigPath, 'utf-8');

        if (!viteContent.includes(`@tailwindcss/vite`)) {
            viteContent = `import tailwindcss from '@tailwindcss/vite'\n` + viteContent;
        }

        viteContent = viteContent.replace(
            /plugins:\s*\[/,
            `plugins: [tailwindcss(), `
        );

        fs.writeFileSync(viteConfigPath, viteContent);
        console.log('✅ 成功插入 @tailwindcss/vite 至 vite.config.js');
    }


    // @import "tailwindcss"; in index.css
    const cssPath = './src/index.css';
    if (fs.existsSync(cssPath)) {
        let cssContent = fs.readFileSync(cssPath, 'utf-8');
        if (cssContent) {
            cssContent = `@import \"tailwindcss\";\n` + `@theme {}\n` + `@layer base{}\n` + `@layer components{}\n` + `@layer utilities{}\n`;
        }
        fs.writeFileSync(cssPath, cssContent);
    }

    console.log('📁 建立資料夾架構...');
    fs.mkdirSync('./src/Components');


    console.log('✅ 專案建立完成！ Now run:\n \n cd your-project-name\n npm run dev\n \n Then, Happing Coding!!\n');
    // process.chdir(projectName);
}

module.exports = { createApp };