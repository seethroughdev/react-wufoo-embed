import React from 'react/addons';
const {TestUtils} = React.addons;
const Wufoo = require('../src/ReactWufooEmbed');

let demo = {
  userName: 'adaml',
  formHash: 'zkgmlhk086qrhp'
}

describe('Wufoo', () => {

  it('renders', () => {
    let element = TestUtils.renderIntoDocument(<Wufoo />);
    expect(element).toBeTruthy();
  });

  describe('iframe', () => {

    let el;

    beforeEach((done) => {
      el = TestUtils.renderIntoDocument(<Wufoo userName={demo.userName} formHash={demo.formHash} />);
      setTimeout(function() {
        done();
      }, 2000);
    });

    it('should load wufoo', () => {
      expect(typeof WufooForm).toBe('function');
    });

    it('should give div proper id', () => {
      let id = el.getDOMNode().getAttribute('id');
      expect(id).toBe(`wufoo-${demo.formHash}`);
    });

  });

});
