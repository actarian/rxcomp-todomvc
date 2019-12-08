/**
 * @license todomvc v1.0.0-alpha.11
 * (c) 2019 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('rxcomp'), require('rxjs/operators'), require('rxjs')) :
  typeof define === 'function' && define.amd ? define('main', ['rxcomp', 'rxjs/operators', 'rxjs'], factory) :
  (global = global || self, factory(global.rxcomp, global.rxjs.operators, global.rxjs));
}(this, (function (rxcomp, operators, rxjs) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var LocalStorageService =
  /*#__PURE__*/
  function () {
    function LocalStorageService() {}

    LocalStorageService.delete = function _delete(name) {
      if (this.isLocalStorageSupported()) {
        window.localStorage.removeItem(name);
      }
    };

    LocalStorageService.exist = function exist(name) {
      if (this.isLocalStorageSupported()) {
        return window.localStorage[name] !== undefined;
      }
    };

    LocalStorageService.get = function get(name) {
      var value = null;

      if (this.isLocalStorageSupported() && window.localStorage[name] !== undefined) {
        try {
          value = JSON.parse(window.localStorage[name]);
        } catch (e) {
          console.log('LocalStorageService.get.error parsing', name, e);
        }
      }

      return value;
    };

    LocalStorageService.set = function set(name, value) {
      if (this.isLocalStorageSupported()) {
        try {
          var cache = [];
          var json = JSON.stringify(value, function (key, value) {
            if (typeof value === 'object' && value !== null) {
              if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
              }

              cache.push(value);
            }

            return value;
          });
          window.localStorage.setItem(name, json);
        } catch (e) {
          console.log('LocalStorageService.set.error serializing', name, value, e);
        }
      }
    };

    LocalStorageService.isLocalStorageSupported = function isLocalStorageSupported() {
      if (this.supported) {
        return true;
      }

      var supported = false;

      try {
        supported = 'localStorage' in window && window.localStorage !== null;

        if (supported) {
          window.localStorage.setItem('test', '1');
          window.localStorage.removeItem('test');
        } else {
          supported = false;
        }
      } catch (e) {
        supported = false;
      }

      this.supported = supported;
      return supported;
    };

    return LocalStorageService;
  }();

  var StoreService =
  /*#__PURE__*/
  function () {
    function StoreService() {}

    StoreService.set = function set(items) {
      LocalStorageService.set('items', items);
      return this.get$().next(items);
    };

    StoreService.get$ = function get$() {
      if (this.store$) {
        return this.store$;
      }

      var items = LocalStorageService.get('items');

      if (!items) {
        items = [{
          id: 5,
          name: 'Cookies',
          date: new Date(Date.now())
        }, {
          id: 4,
          name: 'Pizza',
          date: new Date(2019, 4, 4, 12)
        }, {
          id: 3,
          name: 'Pasta',
          date: new Date(2019, 3, 22, 12)
        }, {
          id: 2,
          name: 'Bread',
          date: new Date(2019, 0, 6, 12)
        }, {
          id: 1,
          name: 'Ham',
          date: new Date(2018, 11, 30, 12)
        }];
        LocalStorageService.set('items', items);
      }

      this.store$ = new rxjs.BehaviorSubject(items);
      return this.store$.pipe(operators.delay(1) // simulate http
      );
    };

    StoreService.add$ = function add$(patch) {
      var item = Object.assign({
        id: Date.now(),
        date: new Date(Date.now())
      }, patch);
      var items = this.store$.getValue();
      items.unshift(item);
      this.set(items);
      return rxjs.of(item).pipe(operators.delay(1) // simulate http
      );
    };

    StoreService.patch$ = function patch$(patch) {
      var items = this.store$.getValue();
      var item = items.find(function (x) {
        return x.id === patch.id;
      });

      if (item) {
        Object.assign(item, patch);
        this.set(items);
      }

      return rxjs.of(item).pipe(operators.delay(1) // simulate http
      );
    };

    StoreService.delete$ = function delete$(item) {
      var items = this.store$.getValue();
      var index = items.indexOf(item);

      if (index !== -1) {
        items.splice(index, 1);
        this.set(items);
      }

      return rxjs.of(item).pipe(operators.delay(1) // simulate http
      );
    };

    return StoreService;
  }();

  var AppComponent =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(AppComponent, _Component);

    function AppComponent() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = AppComponent.prototype;

    _proto.onInit = function onInit() {
      var _this = this;

      // context
      var context = rxcomp.getContext(this); // input

      this.input = context.node.querySelector('.control--text'); // items

      this.items = []; // store service

      this.store$ = StoreService.get$();
      this.store$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (items) {
        _this.items = items; // onpush change detection strategy

        _this.pushChanges();
      });
    };

    _proto.onView = function onView() {
      var context = rxcomp.getContext(this); // console.log('AppComponent.onView', context.node);
    } // onChanges() {}
    // onDestroy() {}
    ;

    _proto.onInput = function onInput($event) {
      // console.log('AppComponent.onInput', $event, this);
      this.pushChanges();
    };

    _proto.onAddItem = function onAddItem($event) {
      var _this2 = this;

      if (this.input.value) {
        StoreService.add$({
          name: this.input.value
        }).subscribe(function (item) {
          // console.log('AppComponent.onAddItem', item);
          _this2.input.value = null;
        });
      }
    };

    _proto.onToggleItem = function onToggleItem(item) {
      StoreService.patch$({
        id: item.id,
        done: !item.done
      }).subscribe(function (item) {// console.log('AppComponent.onToggleItem', item);
      });
    };

    _proto.onRemoveItem = function onRemoveItem(item) {
      StoreService.delete$(item).subscribe(function (item) {// console.log('AppComponent.onRemoveItem', item);
      });
    };

    return AppComponent;
  }(rxcomp.Component);
  AppComponent.meta = {
    selector: '[app-component]'
  };

  var DatePipe =
  /*#__PURE__*/
  function (_Pipe) {
    _inheritsLoose(DatePipe, _Pipe);

    function DatePipe() {
      return _Pipe.apply(this, arguments) || this;
    }

    DatePipe.transform = function transform(value, locale, options) {
      if (locale === void 0) {
        locale = 'it-IT-u-ca-gregory';
      }

      if (options === void 0) {
        options = {
          dateStyle: 'short',
          timeStyle: 'short'
        };
      }

      var localeDateString = new Date(value).toLocaleDateString(locale, options);
      return localeDateString;
    };

    return DatePipe;
  }(rxcomp.Pipe);
  DatePipe.meta = {
    name: 'date'
  };

  var colors = [{
    hex: '#ffffff',
    background: '#ffffff',
    foreground: '#003adc',
    accent: '#212121'
  }, {
    hex: '#212121',
    background: '#212121',
    foreground: '#ffffff',
    accent: '#003adc'
  }, {
    hex: '#ffffff',
    background: '#ffffff',
    foreground: '#212121',
    accent: '#003adc'
  }, {
    hex: '#003adc',
    background: '#003adc',
    foreground: '#ffffff',
    accent: '#212121'
  }];
  function background(index, alpha) {
    return hexToRgb(colors[index % colors.length].background, alpha);
  }
  function foreground(index, alpha) {
    return hexToRgb(colors[index % colors.length].foreground, alpha);
  }
  function accent(index, alpha) {
    return hexToRgb(colors[index % colors.length].accent, alpha);
  }
  function hexToRgb(hex, a) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);

    if (a) {
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
      return "rgb(" + r + "," + g + "," + b + ")";
    }
  }

  var TodoItemComponent =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(TodoItemComponent, _Component);

    function TodoItemComponent() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = TodoItemComponent.prototype;

    // onInit() {}
    _proto.onChanges = function onChanges(changes) {
      // console.log('onChanges', changes);
      this.background = background(this.item.id);
      this.foreground = foreground(this.item.id);
      this.accent = accent(this.item.id);
    } // onView() {}
    // onDestroy() {}
    ;

    _proto.onToggle = function onToggle($event) {
      // console.log('onToggle', $event);
      this.toggle.next($event);
    };

    _proto.onRemove = function onRemove($event) {
      // console.log('onRemove', $event);
      this.remove.next($event);
    };

    return TodoItemComponent;
  }(rxcomp.Component);
  TodoItemComponent.meta = {
    selector: '[todo-item-component]',
    inputs: ['item'],
    outputs: ['toggle', 'remove'] // template syntax example

    /*
    template: // html // `
    	<div class="content" [style]="{ background: background, color: foreground, '--accent': accent }">
    		<button type="button" class="btn--toggle" (click)="onToggle(item)">
    			<div class="title" [innerHTML]="item.name"></div>
    			<div class="date" [innerHTML]="item.date | date : 'en-US' : { month: 'short', day: '2-digit', year: 'numeric' }"></div>
    		</button>
    		<button type="button" class="btn--remove" (click)="onRemove(item)">
    			<i class="icon--remove"></i>
    		</button>
    	</div>
    `,
    */

  };

  var AppModule =
  /*#__PURE__*/
  function (_Module) {
    _inheritsLoose(AppModule, _Module);

    function AppModule() {
      return _Module.apply(this, arguments) || this;
    }

    return AppModule;
  }(rxcomp.Module);
  AppModule.meta = {
    imports: [rxcomp.CoreModule],
    declarations: [TodoItemComponent, DatePipe],
    bootstrap: AppComponent
  };

  rxcomp.Browser.bootstrap(AppModule);

})));
