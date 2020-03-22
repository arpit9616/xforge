/* 
 * (C) 2018 TekMonks. All rights reserved.
 * License: MIT - see enclosed LICENSE file.
 */

/*
 * Returns a temp file, optionally with data given written to it
 */
exports.createTempfile = (name="temp_file", data="", encoding="utf8") => {
    const fs = require("fs");
    const os = require("os");
    const path = require("path");

    return new Promise((resolve, reject) => {
        const tempPath = path.join(os.tmpdir(), "~$xforge-");
        fs.mkdtemp(tempPath, (err, folder) => {
            if (err) return reject(err);
            const file_name = path.join(folder, name);
            fs.writeFile(file_name, data, encoding, error_file => error_file?reject(error_file):resolve(file_name));
        })
    })
}