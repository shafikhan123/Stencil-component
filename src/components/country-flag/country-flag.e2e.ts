import { newE2EPage } from '@stencil/core/testing';

describe('country-flag', () => {
  it('verify country-flag exists', async () => {
    const page = await newE2EPage();
    await page.setContent(' <country-flag country="Latvia"></country-flag>')
    const el = await page.find('country-flag');
    expect(el).not.toBeNull();
  });
});
