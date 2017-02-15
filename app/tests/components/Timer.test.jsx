var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange StartTimer', () => {
    it('should set state to started and count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });
    it('should pause countdown on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.countdownStatus).toBe('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        timer.handleStatusChange('paused');
      }, 2001);
      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        done();
      }, 4001);
    });
    it('should restart count on stopped', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(2);
        timer.handleStatusChange('stopped');
      }, 2001);
      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 4001);
    });
  });
});
