import React from 'react';
import styles from './UserList.module.scss';
import Card from '../ui/Card';

const UserList = ({users}) => {
console.log(users);

  return (
    <Card className={styles.users}>
      <ul>
      {
        users.map(user=><li key={user.id}>{user.username} ({user.age})세</li>)
      }        
      </ul>
    </Card>
  );
};

export default UserList;