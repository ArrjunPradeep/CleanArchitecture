import { ServerApplication } from "@Auth-application/server.application";
import { NestFactory } from "@nestjs/core";

const runApplication = async(): Promise<void> => {

  const serverApplication: ServerApplication = ServerApplication.new();
  await serverApplication.run();

}

(async (): Promise<void> => {
  await runApplication();
})();