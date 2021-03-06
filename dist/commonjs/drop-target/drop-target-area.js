'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropTargetArea = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

require('kendo.draganddrop.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropTargetArea = exports.DropTargetArea = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'drop-target-area'), _dec2 = (0, _decorators.generateBindables)('kendoDropTargetArea'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function DropTargetArea(element, widgetBase) {
    _classCallCheck(this, DropTargetArea);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropTargetArea').linkViewModel(this);
  }

  DropTargetArea.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  DropTargetArea.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  DropTargetArea.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DropTargetArea.prototype.unbind = function unbind() {
    this.widgetBase.destroy(this.kWidget);
  };

  return DropTargetArea;
}()) || _class) || _class) || _class);