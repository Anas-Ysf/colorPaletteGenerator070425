export function generateColorPalette(numColors = 5) {
    const palette = [];

    for (let i = 0; i < numColors; i++) {
        const hexCode = generateRandomHexCode();
        const id = generateUniqueId();
        palette.push({ id, hexCode });
    }

    return palette;
}

function generateRandomHexCode() {
    const hexChars = "0123456789ABCDEF";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    return hexCode;
}

function generateUniqueId() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 5; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}