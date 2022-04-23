import { expect, Locator, Page } from '@playwright/test';

export class HomePage {

    readonly searchInput: Locator;
    constructor(private readonly page: Page) {
        this.searchInput = page.locator('input[name=q]');
    }



    async open() {
        await this.page.goto('/');

    }

    async verifyTitle() {
        const title = await this.page.title();
        expect(title).toBe('Google');

    }
    async search(text: string) {
        await this.searchInput.fill(text);
        await this.searchInput.press('Enter');
    }
}