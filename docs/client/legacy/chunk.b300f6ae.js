import './chunk.9598750f.js';
import { c as init, a as assign, e as createText, d as createElement, h as claimText, f as claimElement, g as children, i as detachNode, j as addLoc, k as insert, l as append, p as setData, b as protoDev } from './chunk.4242be0c.js';
import { a as _asyncToGenerator, b as _regeneratorRuntime } from './chunk.c21c98c2.js';

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(_ref) {
    var params, query, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref.params, query = _ref.query;
            _context.next = 3;
            return this.fetch("blog/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}
var file = "src\\routes\\blog\\[slug].html";

function create_main_fragment(component, ctx) {
  var title_value,
      text0,
      h1,
      text1_value = ctx.post.title,
      text1,
      text2,
      div,
      raw_value = ctx.post.html;
  document.title = title_value = ctx.post.title;
  return {
    c: function create() {
      text0 = createText("\n\n");
      h1 = createElement("h1");
      text1 = createText(text1_value);
      text2 = createText("\n\n");
      div = createElement("div");
      this.h();
    },
    l: function claim(nodes) {
      text0 = claimText(nodes, "\n\n");
      h1 = claimElement(nodes, "H1", {}, false);
      var h1_nodes = children(h1);
      text1 = claimText(h1_nodes, text1_value);
      h1_nodes.forEach(detachNode);
      text2 = claimText(nodes, "\n\n");
      div = claimElement(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      div_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      addLoc(h1, file, 4, 0, 59);
      div.className = "content svelte-1mj6nmv";
      addLoc(div, file, 6, 0, 82);
    },
    m: function mount(target, anchor) {
      insert(target, text0, anchor);
      insert(target, h1, anchor);
      append(h1, text1);
      insert(target, text2, anchor);
      insert(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p: function update(changed, ctx) {
      if (changed.post && title_value !== (title_value = ctx.post.title)) {
        document.title = title_value;
      }

      if (changed.post && text1_value !== (text1_value = ctx.post.title)) {
        setData(text1, text1_value);
      }

      if (changed.post && raw_value !== (raw_value = ctx.post.html)) {
        div.innerHTML = raw_value;
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(text0);
        detachNode(h1);
        detachNode(text2);
        detachNode(div);
      }
    }
  };
}

function Slug(options) {
  this._debugName = '<Slug>';

  if (!options || !options.target && !options.root) {
    throw new Error("'target' is a required option");
  }

  init(this, options);
  this._state = assign({}, options.data);
  if (!('post' in this._state)) console.warn("<Slug> was created without expected data property 'post'");
  this._intro = true;
  this._fragment = create_main_fragment(this, this._state);

  if (options.target) {
    var nodes = children(options.target);
    options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
    nodes.forEach(detachNode);

    this._mount(options.target, options.anchor);
  }
}

assign(Slug.prototype, protoDev);

Slug.prototype._checkReadOnly = function _checkReadOnly(newState) {};

Slug.preload = preload;

export default Slug;
//# sourceMappingURL=chunk.b300f6ae.js.map
