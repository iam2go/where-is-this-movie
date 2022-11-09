const path = require('path');

module.exports = {
  webpack: {
    alias: {
      "@apis": path.resolve(__dirname, 'src/apis'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@atoms": path.resolve(__dirname, 'src/components/atoms'),
      "@blocks": path.resolve(__dirname, 'src/components/blocks'),
      "@pages": path.resolve(__dirname, 'src/components/pages'),
      "@hooks": path.resolve(__dirname, 'src/hooks'),
      "@styles": path.resolve(__dirname, 'src/styles'),
      "@utils": path.resolve(__dirname, 'src/utils')
    }
  }
}