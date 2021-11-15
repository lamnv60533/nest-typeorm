import { Restaurant } from './restaurant.entity';

describe('Restaurant', () => {
  it('should be defined', () => {
    expect(new Restaurant()).toBeDefined();
  });
});
