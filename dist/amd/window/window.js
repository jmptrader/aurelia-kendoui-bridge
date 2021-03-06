define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.window.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Window = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Window = exports.Window = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'window'), _dec2 = (0, _decorators.generateBindables)('kendoWindow'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Window(element, widgetBase) {
      _classCallCheck(this, Window);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoWindow').linkViewModel(this);
    }

    Window.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Window.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Window.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Window.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Window;
  }()) || _class) || _class) || _class);
});