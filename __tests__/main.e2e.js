import wd from 'wd';
import config from './e2e-config';

const port = 4723;
const driver = wd.promiseChainRemote('localhost', port);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

describe('Simple Appium Example', () => {
  beforeAll(async () =>  {
    await driver.init(config);
    await driver.sleep(5000); // wait for app to load
  });
  afterAll(async () => await driver.quit());

  it('should show main view', async () => {
    expect(await driver.hasElementByAccessibilityId('main')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('text1')).toBe(false);
  });

  it('should click a button', async () => {
    expect(await driver.hasElementByAccessibilityId('button')).toBe(true);
    await driver.elementByAccessibilityId('button')
      .click()
      .click();

    expect(await driver.hasElementByAccessibilityId('2')).toBe(true);
  });
});
