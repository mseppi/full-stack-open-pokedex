const { test, expect } = require('@playwright/test')

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5000')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('navigating to a pokemon page works', async ({ page }) => {
    await page.goto('http://localhost:5000')
    await page.getByRole('link', { name: /ivysaur/i }).click()
    await page.waitForURL('**/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
