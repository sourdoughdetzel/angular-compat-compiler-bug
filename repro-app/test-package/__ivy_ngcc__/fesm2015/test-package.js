import { CommonModule } from '@angular/common';
import { Component, Pipe, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
class TestOneComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TestOneComponent.ɵfac = function TestOneComponent_Factory(t) { return new (t || TestOneComponent)(); };
TestOneComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TestOneComponent, selectors: [["cf-test-one"]], decls: 2, vars: 0, template: function TestOneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " test-one works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TestOneComponent, [{
        type: Component,
        args: [{
                selector: 'cf-test-one',
                template: `
    <p>
      test-one works!
    </p>
  `,
                styles: [""]
            }]
    }], function () { return []; }, { constructor: [], ngOnInit: [] });
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
TestPipePipe.ɵfac = function TestPipePipe_Factory(t) { return new (t || TestPipePipe)(); };
TestPipePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "testPipe", type: TestPipePipe, pure: true });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TestPipePipe, [{
        type: Pipe,
        args: [{
                name: 'testPipe'
            }]
    }], null, { transform: [] });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestOneModule {
}
TestOneModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TestOneModule });
TestOneModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TestOneModule_Factory(t) { return new (t || TestOneModule)(); }, imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(TestOneModule, { declarations: function () { return [TestOneComponent,
        TestPipePipe]; }, imports: function () { return [CommonModule]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TestOneModule, [{
        type: NgModule,
        args: [{
                declarations: [TestOneComponent, TestPipePipe],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null);

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
TestTwoComponent.ɵfac = function TestTwoComponent_Factory(t) { return new (t || TestTwoComponent)(); };
TestTwoComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TestTwoComponent, selectors: [["cf-test-two"]], decls: 2, vars: 0, template: function TestTwoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " test-two works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, styles: [""] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TestTwoComponent, [{
        type: Component,
        args: [{
                selector: 'cf-test-two',
                template: `
    <p>
      test-two works!
    </p>
  `,
                styles: [""]
            }]
    }], function () { return []; }, { constructor: [], ngOnInit: [] });
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
TestPipePipe$1.ɵfac = function TestPipePipe$1_Factory(t) { return new (t || TestPipePipe$1)(); };
TestPipePipe$1.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "testPipe", type: TestPipePipe$1, pure: true });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TestPipePipe$1, [{
        type: Pipe,
        args: [{
                name: 'testPipe'
            }]
    }], null, { transform: [] });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestTwoModule {
}
TestTwoModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TestTwoModule });
TestTwoModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TestTwoModule_Factory(t) { return new (t || TestTwoModule)(); }, imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(TestTwoModule, { declarations: function () { return [TestTwoComponent,
        TestPipePipe$1]; }, imports: function () { return [CommonModule]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(TestTwoModule, [{
        type: NgModule,
        args: [{
                declarations: [TestTwoComponent, TestPipePipe$1],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null);

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