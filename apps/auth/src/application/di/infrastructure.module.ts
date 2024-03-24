import config from "@Auth-infrastructure/config";
import { Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['env/auth/auth.app.env'],
            load: config,
            cache: true,
            expandVariables: true,
            isGlobal: true
        })
    ]
})

export class InfrastructureModule {}