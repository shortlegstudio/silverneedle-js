module.exports = {
    'development': {
        dialect: 'pg',
        use_env_variable: 'DATABASE_URL'
    },
    'test': {
        dialect: 'pg',
        use_env_variable: 'DATABASE_URL'
    },
    'production': {
        dialect: 'pg',
        use_env_variable: 'DATABASE_URL'
    }
}