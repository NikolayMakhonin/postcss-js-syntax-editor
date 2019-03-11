import './chunk.b0ae64c3.js';
import { c as init, a as assign, e as createText, d as createElement, h as claimText, f as claimElement, g as children, i as detachNode, j as addLoc, k as insert, l as append, s as noop, b as protoDev } from './chunk.42d23e7c.js';

/* src\routes\about.html generated by Svelte v2.16.1 */
var file = "src\\routes\\about.html";

function create_main_fragment(component, ctx) {
  var text0, h1, text1, text2, p, text3;
  return {
    c: function create() {
      text0 = createText("\n\n");
      h1 = createElement("h1");
      text1 = createText("About this site");
      text2 = createText("\n\n");
      p = createElement("p");
      text3 = createText("This is the 'about' page. There's not much here.");
      this.h();
    },
    l: function claim(nodes) {
      text0 = claimText(nodes, "\n\n");
      h1 = claimElement(nodes, "H1", {}, false);
      var h1_nodes = children(h1);
      text1 = claimText(h1_nodes, "About this site");
      h1_nodes.forEach(detachNode);
      text2 = claimText(nodes, "\n\n");
      p = claimElement(nodes, "P", {}, false);
      var p_nodes = children(p);
      text3 = claimText(p_nodes, "This is the 'about' page. There's not much here.");
      p_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      addLoc(h1, file, 4, 0, 52);
      addLoc(p, file, 6, 0, 78);
    },
    m: function mount(target, anchor) {
      insert(target, text0, anchor);
      insert(target, h1, anchor);
      append(h1, text1);
      insert(target, text2, anchor);
      insert(target, p, anchor);
      append(p, text3);
    },
    p: noop,
    d: function destroy(detach) {
      if (detach) {
        detachNode(text0);
        detachNode(h1);
        detachNode(text2);
        detachNode(p);
      }
    }
  };
}

function About(options) {
  this._debugName = '<About>';

  if (!options || !options.target && !options.root) {
    throw new Error("'target' is a required option");
  }

  init(this, options);
  this._state = assign({}, options.data);
  this._intro = true;
  this._fragment = create_main_fragment(this, this._state);

  if (options.target) {
    var nodes = children(options.target);
    options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
    nodes.forEach(detachNode);

    this._mount(options.target, options.anchor);
  }
}

assign(About.prototype, protoDev);

About.prototype._checkReadOnly = function _checkReadOnly(newState) {};

export default About;
//# sourceMappingURL=chunk.6cb2acd8.js.map