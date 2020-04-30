import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/testSkilsTab/index.html")
@PreventIframe("/testSkilsTab/config.html")
@PreventIframe("/testSkilsTab/remove.html")
export class TestSkilsTab {
}
