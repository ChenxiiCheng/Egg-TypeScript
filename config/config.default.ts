import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586278114027_3124';

  // add your egg config in here
  config.middleware = [];

  // csrf
  config.security = {
    csrf: {
      ignore: ['/api'],
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // egg-mongoose
  config.mongoose = {
    url:
      'mongodb+srv://brad123:brad123@contactkeeper-j0cwi.mongodb.net/tsegg?retryWrites=true&w=majority',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
