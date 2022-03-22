const securityHeaders = [
  {
    key: 'Access-Control-Allow-Origin',
    value: `^(https?:\\/\\/localhost:\\d+)$|^(https?:\\/\\/.+\\.test4echo\\.app)$|^(https?:\\/\\/.+\\.cotu\\.tv)$`,
  },
];

module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    VERYFI_API_URL: process.env.VERYFI_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  async redirects() {
    return [
      {
        source: '/hub',
        destination: 'https://hub.veryfi.com/dashboard/',
        permanent: false,
      },
    ];
  },
};
