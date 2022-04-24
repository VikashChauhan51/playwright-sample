import { Page } from '@playwright/test';
import { Logger } from "winston";
import { logger } from "@utils/logger";

export class PageBase {
    protected readonly logger: Logger;
    constructor(protected readonly page: Page) {
        this.logger = logger;
    }
}