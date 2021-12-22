import { createClient } from 'redis';
import config from 'config';

const client = createClient({
    host: config.get('HOSTNAME'),
    port: config.get('REDIS_PORT'),
    socket: {
        timeout: config.get('TIMEOUT')
    }
})

export const connect = client.connect()
export default client;