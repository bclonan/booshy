// Removed direct Node.js imports - will use electron API instead
// const electron = require('electron'); // Commented out - use electron API instead
// const path = require('path'); // Commented out - use electron API instead
// const fs = require('fs'); // Commented out - use electron API instead

class electronStore {
  constructor(opts) {
    // Use electron API instead of direct electron module access
    this.configName = opts.configName;
    this.defaults = opts.defaults;
    this.data = null;
    
    // Initialize data asynchronously
    this.initData();
  }
  
  async initData() {
    try {
      const publicPath = await window.electronAPI.getPublicPath();
      this.path = `${publicPath}/${this.configName}.json`;
      this.data = await this.parseDataFile(this.path, this.defaults);
    } catch (error) {
      console.error('Error initializing electron store:', error);
      this.data = this.defaults;
    }
  }
  
  // This will just return the property on the `data` object
  get(key) {
    return this.data ? this.data[key] : undefined;
  }
  
  // ...and this will set it
  async set(key, val) {
    if (!this.data) {
      await this.initData();
    }
    
    this.data[key] = val;
    
    try {
      await window.electronAPI.writeFile(this.path, JSON.stringify(this.data));
    } catch (error) {
      console.error('Error writing to electron store:', error);
    }
  }
  
  async parseDataFile(filePath, defaults) {
    try {
      const data = await window.electronAPI.readFile(filePath);
      return JSON.parse(data);
    } catch(error) {
      // if there was some kind of error, return the passed in defaults instead.
      console.log('Using defaults for electron store');
      return defaults;
    }
  }
}

// expose the class
module.exports = electronStore;