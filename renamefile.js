const fs = require('fs');
const path = require('path');

/**
 * Get .jpg files in a folder, sorted by creation time (oldest to newest)
 */
function getSortedJPGs(folderPath) {
    return fs.readdirSync(folderPath)
        .filter(file => path.extname(file).toLowerCase() === '.jpg')
        .map(file => {
            const fullPath = path.join(folderPath, file);
            const stats = fs.statSync(fullPath);
            return { file, fullPath, ctime: stats.ctime };
        })
        .sort((a, b) => a.ctime - b.ctime);
}

/**
 * Rename sorted .jpgs to cover.jpg, 1.jpg, 2.jpg, ...
 */
function renameSortedJPGs(folderPath) {
    const jpgs = getSortedJPGs(folderPath);

    jpgs.forEach((entry, index) => {
        let newName = index === 0 ? 'cover.jpg' : `${index}.jpg`;
        const newPath = path.join(folderPath, newName);

        // Avoid renaming to same name
        if (path.basename(entry.fullPath) !== newName) {
            console.log(`Renaming: ${entry.fullPath} → ${newPath}`);
            fs.renameSync(entry.fullPath, newPath);
        }
    });
}

/**
 * Scan subfolders of the root folder and rename .jpgs in each
 */
function processRootFolder(rootPath) {
    const entries = fs.readdirSync(rootPath, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const subfolderPath = path.join(rootPath, entry.name);
            renameSortedJPGs(subfolderPath);
        }
    }
}

// Replace with your actual root folder path
const rootFolder = './public/assets';
processRootFolder(rootFolder);
