(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('test-package', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['test-package'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestOneComponent = /** @class */ (function () {
        function TestOneComponent() {
        }
        /**
         * @return {?}
         */
        TestOneComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestOneComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cf-test-one',
                        template: "\n    <p>\n      test-one works!\n    </p>\n  ",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TestOneComponent.ctorParameters = function () { return []; };
        return TestOneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestPipePipe = /** @class */ (function () {
        function TestPipePipe() {
        }
        /**
         * @return {?}
         */
        TestPipePipe.prototype.transform = /**
         * @return {?}
         */
            function () {
                return null;
            };
        TestPipePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'testPipe'
                    },] }
        ];
        return TestPipePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestOneModule = /** @class */ (function () {
        function TestOneModule() {
        }
        TestOneModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TestOneComponent, TestPipePipe],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return TestOneModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestTwoComponent = /** @class */ (function () {
        function TestTwoComponent() {
        }
        /**
         * @return {?}
         */
        TestTwoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TestTwoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'cf-test-two',
                        template: "\n    <p>\n      test-two works!\n    </p>\n  ",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        TestTwoComponent.ctorParameters = function () { return []; };
        return TestTwoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestPipePipe$1 = /** @class */ (function () {
        function TestPipePipe() {
        }
        /**
         * @return {?}
         */
        TestPipePipe.prototype.transform = /**
         * @return {?}
         */
            function () {
                return null;
            };
        TestPipePipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'testPipe'
                    },] }
        ];
        return TestPipePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TestTwoModule = /** @class */ (function () {
        function TestTwoModule() {
        }
        TestTwoModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TestTwoComponent, TestPipePipe$1],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return TestTwoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.TestOneComponent = TestOneComponent;
    exports.TestOneModule = TestOneModule;
    exports.TestTwoComponent = TestTwoComponent;
    exports.TestTwoModule = TestTwoModule;
    exports.ɵa = TestPipePipe;
    exports.ɵb = TestPipePipe$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=test-package.umd.js.map