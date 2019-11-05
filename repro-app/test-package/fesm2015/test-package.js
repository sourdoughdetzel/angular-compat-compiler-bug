import { CommonModule } from '@angular/common';
import { Component, Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestOneComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestOneComponent.decorators = [
    { type: Component, args: [{
                selector: 'cf-test-one',
                template: `
    <p>
      test-one works!
    </p>
  `,
                styles: [""]
            }] }
];
/** @nocollapse */
TestOneComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestPipePipe {
    /**
     * @return {?}
     */
    transform() {
        return null;
    }
}
TestPipePipe.decorators = [
    { type: Pipe, args: [{
                name: 'testPipe'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestOneModule {
}
TestOneModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestOneComponent, TestPipePipe],
                imports: [
                    CommonModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestTwoComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestTwoComponent.decorators = [
    { type: Component, args: [{
                selector: 'cf-test-two',
                template: `
    <p>
      test-two works!
    </p>
  `,
                styles: [""]
            }] }
];
/** @nocollapse */
TestTwoComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestPipePipe$1 {
    /**
     * @return {?}
     */
    transform() {
        return null;
    }
}
TestPipePipe$1.decorators = [
    { type: Pipe, args: [{
                name: 'testPipe'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestTwoModule {
}
TestTwoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TestTwoComponent, TestPipePipe$1],
                imports: [
                    CommonModule
                ]
            },] }
];

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