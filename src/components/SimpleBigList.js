import { faker } from '@faker-js/faker';
import List from './List';

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

const SimpleBigList = () => {
  return (
    <List
      data={bigList}
      renderItem={item => (
        <div style={{ display: 'flex' }}>
          <img src={item.avatar} alt={item.name} width={50} />
          <p>
            {item.name} - {item.email}
          </p>
        </div>
      )}
    />
  );
};

export default SimpleBigList;
