module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777"
    }
  },
  compilers: {
    solc: {
      version: "5.6.8",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
