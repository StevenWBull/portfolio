module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL
      || 'postgresql://dunder_mifflin@localhost/breadcrumbs',
    JWT_SECRET: process.env.JWT_SECRET || 'breadcrumbs-secret',
    JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
    GMAIL_PASS: process.env.GMAIL_PASS
  }