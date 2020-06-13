const {override,fixBabelImports} = require('customize-cra');

module.exports = override(
    // antd按需引入
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css'

    }),
   
);