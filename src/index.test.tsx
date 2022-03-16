import React from 'react';

import reactToText, { ResolverMap } from './index';

const CustomComponent: React.FC<{ title: string }> = (props) => <p>{props.title}</p>;

describe('reactToText', () => {
  describe('When given text', () => {
    it('Returns the same text', () => {
      expect(reactToText(' Some text. ')).toBe(' Some text. ');
    });
  });

  describe('When given a number', () => {
    it('Returns the number as text', () => {
      expect(reactToText(1)).toBe('1');
      // eslint-disable-next-line no-magic-numbers
      expect(reactToText(1.01)).toBe('1.01');
    });
  });

  describe('When given a boolean', () => {
    it('Returns the boolean as text', () => {
      expect(reactToText(true)).toBe('true');
      expect(reactToText(false)).toBe('false');
    });
  });

  describe('When given null or undefined', () => {
    it('Returns an empty string', () => {
      expect(reactToText(undefined)).toBe('');
      expect(reactToText(null)).toBe('');
    });
  });

  describe('When given an empty object', () => {
    it('Returns an empty string', () => {
      expect(reactToText({})).toBe('');
    });
  });

  describe('When given an array of nodes', () => {
    it('Returns the text content', () => {
      expect(reactToText(['hi ', 1, false, <span key="test">react</span>])).toBe('hi 1falsereact');
    });
  });

  describe('When given a single level react component', () => {
    describe('When component has no children ', () => {
      it('Returns an empty string', () => {
        expect(reactToText(<></>)).toBe('');
        expect(reactToText(<div />)).toBe('');
      });
    });

    it('Returns the text content', () => {
      expect(reactToText(<> Some text. </>)).toBe(' Some text. ');
      expect(reactToText(<div> Some text. </div>)).toBe(' Some text. ');
    });
  });

  describe('When given a multi level react component', () => {
    it('Returns the text content', () => {
      expect(
        reactToText(
          <>
            {' '}
            Some <span>text</span>.{' '}
          </>,
        ),
      ).toBe(' Some text. ');
      expect(
        reactToText(
          <div>
            <h1> Some text. </h1>
          </div>,
        ),
      ).toBe(' Some text. ');
      expect(reactToText(<>{['hello ', 'world']}</>)).toBe('hello world');
    });
  });

  describe('When component HTML entity', () => {
    it('Returns the html entity rendered to text', () => {
      expect(reactToText(<div>one &mdash; two</div>)).toBe('one — two');
    });
  });

  describe('When given a custom component', () => {
    it('Returns uses the custom resolver behavior', () => {
      const resolvers: ResolverMap = new Map([
        [CustomComponent, (props: { title: string }) => props.title],
      ]);

      expect(
        reactToText(
          <div>
            foo <CustomComponent title="bar" />
          </div>,
          resolvers,
        ),
      ).toBe('foo bar');
    });
  });
});
