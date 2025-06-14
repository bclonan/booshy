// Test script to verify ini module works without optional chaining error
const ini = require('ini');

console.log('Testing ini module...');
try {
  const testConfig = ini.stringify({ test: { value: 'hello' } });
  console.log('✅ ini module working correctly');
  console.log('Test config:', testConfig);
  process.exit(0);
} catch (error) {
  console.error('❌ ini module error:', error.message);
  process.exit(1);
}
