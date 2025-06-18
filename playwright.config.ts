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
    // Production Environment - Chrome
    {
      name: 'production-chrome',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    // Production Environment - Firefox
    {
      name: 'production-firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    // Production Environment - Safari
    {
      name: 'production-safari',
      use: { 
        ...devices['Desktop Safari'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    // Local Development Environment - Chrome
    {
      name: 'local-chrome',
      use: { 
        ...devices['Desktop Chrome'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    // Local Development Environment - Firefox
    {
      name: 'local-firefox',
      use: { 
        ...devices['Desktop Firefox'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
    // Mobile Testing - Production
    {
      name: 'production-mobile',
      use: { 
        ...devices['iPhone 13'],
        baseURL: 'https://beksar-yernar.web.app/',
      },
    },
  ],
  outputDir: 'test-results/',
});