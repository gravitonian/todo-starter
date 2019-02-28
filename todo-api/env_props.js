// Environment specific configuration injected into the container
module.exports = {
    postgresHost: process.env.POSTGRES_HOST,
    postgresPort: process.env.POSTGRES_PORT,
    postgresDatabase: process.env.POSTGRES_DATABASE,
    postgresUser: process.env.POSTGRES_USER,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    elasticHost: process.env.ELASTICSEARCH_HOST,
    elasticPort: process.env.ELASTICSEARCH_PORT
};