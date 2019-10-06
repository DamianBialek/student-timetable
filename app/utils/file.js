const fileSystemModule = require("tns-core-modules/file-system");
const documents = fileSystemModule.knownFolders.documents();

const getFile = function (fileName) {
    return documents.getFile(fileName);
};

const readFile = function (fileName) {
    return getFile(fileName).readText();
};

const writeFile = function (fileName, content = '') {
    return getFile(fileName).writeText(content);
};

export { getFile, readFile, writeFile };