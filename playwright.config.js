import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'e2e-tests',
  timeout: 30 * 1000,
  use: {
    baseURL: 'http://localhost:5000',
    headless: true,
  },
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
})
