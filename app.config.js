
const environments = {
  development: {
    name: 'Demo (Dev)',
    ios: {
      bundleIdentifier: 'com.vitorfrs.Demo.dev'
    },
    android: {
      package: 'com.vitorfrs.Demo.dev',
    }
  },

  staging: {
    name: "Demo (Staging)",
    ios: {
      bundleIdentifier: 'com.vitorfrs.Demo.staging'
    },
    android: {
      package: 'com.vitorfrs.Demo.staging',
    }
  },

  production: {
    name: "Demo",
    ios: {
      bundleIdentifier: 'com.vitorfrs.Demo'
    },
    android: {
      package: 'com.vitorfrs.Demo',
    }
  }
}

const resolveEnvironment = () => {
  const currentEnv = process.env.APP_ENV ?? "development";
  return environments[currentEnv];
}


export default {
 ...resolveEnvironment(),
}