import path from 'path';
import fs from 'fs';
import { app } from 'electron';

class SettingsDatastore {
  constructor() {
    // Get user data directory
    const userDataPath = app.getPath('userData');
    this.settingsPath = path.join(userDataPath, 'settings.json');
    this.defaultSettings = {
      theme: 'light',
      autoSave: true,
      lastOpenedFile: null,
      recentFiles: [],
      windowState: {
        width: 1200,
        height: 800,
        x: null,
        y: null,
        maximized: false
      },
      preferences: {
        showLineNumbers: true,
        wordWrap: true,
        fontSize: 14,
        fontFamily: 'Consolas, monospace'
      }
    };
    
    this.settings = this.loadSettings();
  }

  // Load settings from file or create default settings
  loadSettings() {
    try {
      if (fs.existsSync(this.settingsPath)) {
        const data = fs.readFileSync(this.settingsPath, 'utf8');
        const loadedSettings = JSON.parse(data);
        // Merge with defaults to ensure all properties exist
        return { ...this.defaultSettings, ...loadedSettings };
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
    
    // Return default settings if file doesn't exist or error occurred
    return { ...this.defaultSettings };
  }

  // Save settings to file
  saveSettings() {
    try {
      // Ensure directory exists
      const dir = path.dirname(this.settingsPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(this.settingsPath, JSON.stringify(this.settings, null, 2));
      return true;
    } catch (error) {
      console.error('Error saving settings:', error);
      return false;
    }
  }

  // Get a setting value
  get(key) {
    const keys = key.split('.');
    let value = this.settings;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return undefined;
      }
    }
    
    return value;
  }

  // Set a setting value
  set(key, value) {
    const keys = key.split('.');
    let current = this.settings;
    
    // Navigate to the parent object
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!(k in current) || typeof current[k] !== 'object') {
        current[k] = {};
      }
      current = current[k];
    }
    
    // Set the final value
    current[keys[keys.length - 1]] = value;
    return this.saveSettings();
  }

  // Get all settings
  getAll() {
    return { ...this.settings };
  }

  // Update multiple settings at once
  update(settingsObj) {
    this.settings = { ...this.settings, ...settingsObj };
    return this.saveSettings();
  }

  // Reset to default settings
  reset() {
    this.settings = { ...this.defaultSettings };
    return this.saveSettings();
  }

  // Add file to recent files list
  addRecentFile(filePath) {
    const recentFiles = this.get('recentFiles') || [];
    
    // Remove if already exists
    const filtered = recentFiles.filter(file => file !== filePath);
    
    // Add to beginning and limit to 10 items
    filtered.unshift(filePath);
    const limited = filtered.slice(0, 10);
    
    return this.set('recentFiles', limited);
  }

  // Remove file from recent files list
  removeRecentFile(filePath) {
    const recentFiles = this.get('recentFiles') || [];
    const filtered = recentFiles.filter(file => file !== filePath);
    return this.set('recentFiles', filtered);
  }

  // Clear recent files
  clearRecentFiles() {
    return this.set('recentFiles', []);
  }

  // Update window state
  updateWindowState(state) {
    const currentState = this.get('windowState') || {};
    const newState = { ...currentState, ...state };
    return this.set('windowState', newState);
  }
}

// Export singleton instance
const settingsDatastore = new SettingsDatastore();
export default settingsDatastore;