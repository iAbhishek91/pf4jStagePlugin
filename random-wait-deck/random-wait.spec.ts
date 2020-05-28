import { PluginRegistry } from '@spinnaker/core';

describe('my test', () => {
  let registry: PluginRegistry;

  beforeEach(async () => {
    registry = new PluginRegistry();
    registry.registerPluginMetaData('deck', {
      id: 'Armory.RandomWaitStage',
      version: '1.0.0',
      url: 'build/dist/index.js',
    });
    await registry.loadPlugins();
  });

  test('this is a test', () => {
    expect(1 + 1).toEqual(2);
  });
});
