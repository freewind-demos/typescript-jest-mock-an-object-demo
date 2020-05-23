import {User, welcome} from './User';

describe('User', () => {
  it('welcome', () => {
    const user: User = {
      name: 'aaa',
      join: jest.fn((team) => team.toUpperCase())
    }
    const message = welcome(user);
    expect(message).toBe('Welcome, aaa, TEAM1');
    expect(user.join).toHaveBeenCalledWith('team1');
  })
})
