import React from 'react';
import ReactDOM from 'react-dom';
import STORE from './STORE';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
// Smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      STORE.lists.map(list => {
        <List
          key={list.id}
          header={list.header}
          cardIds={list.cardIds.map(id =>
            STORE.allCards[id]
          )}
        />}), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
    .create(
      STORE.lists.map(list => {
          <List
            key={list.id}
            header={list.header}
            cardIds={list.cardIds.map(id =>
              STORE.allCards[id]
            )}
          />
      })
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  })

});
