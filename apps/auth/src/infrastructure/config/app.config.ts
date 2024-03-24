import { registerAs } from "@nestjs/config";

export const AUTH_APP_CONFIG = registerAs('AUTH_APP', () => {

    return {
        HOST: process.env['AUTH_APP_HOST'],
        PORT: process.env['AUTH_APP_PORT']
    };

})