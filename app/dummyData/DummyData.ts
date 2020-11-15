export type Data = {
  id: string
  name: string
  imageUri: any
  description: string
}

export const DataSetOne: Data[] = [
  {
    id: '1',
    name: 'Teamwork',
    imageUri: require('../assets/Images/beacon.jpg'),
    description: 'Be the lighthouse for your team',
  },
  {
    id: '2',
    name: 'spaces',
    imageUri: require('../assets/Images/kepplar.jpg'),
    description: 'Be not afraid of empty spaces',
  },
  {
    id: '3',
    name: 'beach',
    imageUri: require('../assets/Images/stressLess.jpg'),
    description: 'Sometimes work should be like this',
  },
  {
    id: '4',
    name: 'Jill',
    imageUri: require('../assets/Images/meeting.jpg'),
    description: 'Learn to listen before you speak',
  },
  {
    id: '5',
    name: 'WorkAndPlay',
    imageUri: require('../assets/Images/workAndPlay.jpg'),
    description: 'Find the healthy medium',
  },
  {
    id: '6',
    name: 'Ground',
    imageUri: require('../assets/Images/stormTrooper.jpg'),
    description: 'The ground can be rough',
  },
]

export const DataSetTwo: Data[] = [
  {
    id: '1',
    name: 'Game',
    imageUri: require('../assets/Images/teamWork.jpg'),
    description: 'The name of the game',
  },
  {
    id: '2',
    name: 'Kieran',
    imageUri: require('../assets/Images/leading.jpg'),
    description: 'It can be lonely',
  },
  {
    id: '3',
    name: 'Boat',
    imageUri: require('../assets/Images/team.jpg'),
    description: 'It takes many',
  },
  {
    id: '4',
    name: 'CoWork',
    imageUri: require('../assets/Images/coworking.jpg'),
    description: 'Lead your colleagues',
  },
  {
    id: '5',
    name: 'Time',
    imageUri: require('../assets/Images/coffeeBreak.jpg'),
    description: 'Take time for you',
  },
]

export const ReflectData: Data = {
  id: '1',
  name: 'Reflect',
  imageUri: require('../assets/Images/thinking.jpg'),
  description: 'Log your Reflections on your week',
}
