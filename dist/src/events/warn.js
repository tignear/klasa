"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@klasa/core");
class default_1 extends core_1.Event {
    run(warning) {
        this.client.console.warn(warning);
    }
    init() {
        if (!this.client.options.consoleEvents.warn)
            this.disable();
    }
}
exports.default = default_1;
//# sourceMappingURL=warn.js.map