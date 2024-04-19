module.exports = () => {
  const { faker } = require('@faker-js/faker');
  const { times, random } = require('lodash');

  const routes = {
    '/users': [
      //
      '/:id',
      '/:id/posts',
      '/posts',
    ],
    '/posts': ['/:id'],
  };

  const users = times(random(8, 20), (id) => {
    return {
      id,
      name: faker.person.fullName(),
      email: faker.internet.email(),
    };
  });

  const posts = times(random(8, 20), (id) => {
    return {
      id,
      title: faker.lorem.sentence(),
      headline: faker.lorem.paragraph(),
      image: faker.image.url(),
      userId: random(users.length),
    };
  });

  return { routes, posts, users };
};
