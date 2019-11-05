import { CommonModule } from '@angular/common';
import { Component, Pipe, NgModule } from '@angular/core';

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
        { type: Component, args: [{
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
        { type: Pipe, args: [{
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
        { type: NgModule, args: [{
                    declarations: [TestOneComponent, TestPipePipe],
                    imports: [
                        CommonModule
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
        { type: Component, args: [{
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
        { type: Pipe, args: [{
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
        { type: NgModule, args: [{
                    declarations: [TestTwoComponent, TestPipePipe$1],
                    imports: [
                        CommonModule
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

export { TestOneComponent, TestOneModule, TestTwoComponent, TestTwoModule, TestPipePipe as ɵa, TestPipePipe$1 as ɵb };

//# sourceMappingURL=test-package.js.map