import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['json'], ['html', { open: 'never', host: '0.0.0.0' }]],
  use: {
    trace: 'on-first-retry',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chrome',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    {
      name: 'safari',
      use: { 
        ...devices['Desktop Safari'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
     {
      name: 'mobile',
      use: { 
        ...devices['iPhone 13'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
  ],
  outputDir: 'test-results/',
});