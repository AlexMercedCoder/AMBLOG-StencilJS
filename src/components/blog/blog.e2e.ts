import { newE2EPage } from '@stencil/core/testing';

describe('am-blog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<am-blog></am-blog>');

    const element = await page.find('am-blog');
    expect(element).toHaveClass('hydrated');
  });
});
