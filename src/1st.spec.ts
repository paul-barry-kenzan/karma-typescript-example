'use strict';

import { Hero } from './1st';

describe('First Test Suite', () => {

  it('should pass', () => {
    let hero: Hero = {id: 1, name: 'Super Cat'};
    expect(hero.name).toEqual('Super Cat');
  });

});
