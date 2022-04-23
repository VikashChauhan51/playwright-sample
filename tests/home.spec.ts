import { test, Page } from '@playwright/test';
import {HomePage} from '../pages/home-page';

test.describe('Google home page tests', () => {
    
    test('Navigate to home page', async ({ page }) => {
      
        const homePage=new HomePage(page);
        await homePage.open();
        await homePage.verifyTitle();
    });

    test('Search on google', async ({ page }) => {
      
        const homePage=new HomePage(page);
        await homePage.open();
        await homePage.search('Vikash Chauhan on github');
    });
    
})
