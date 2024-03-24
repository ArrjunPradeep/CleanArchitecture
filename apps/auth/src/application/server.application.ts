import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { RootModule } from "./di/root.module";
import { Logger } from "@nestjs/common";

export class ServerApplication {

    private host: string;
    private port: number;

    public async run(): Promise<void> {

        const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

        this.host = "localhost";
        this.port = 3000;

        this.log();

        await app.listen(this.port, this.host);

    }

    private log(): void {
        Logger.log(`Server started on host: ${this.host}; port: ${this.port}`);
    }

    public static new(): ServerApplication {
        return new ServerApplication();
    }

}