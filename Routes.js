import React from 'react';
import {Icon} from 'react-native-elements';

const tabNavi = createBottomTabNavi(
    {
        MyList: Stack1,
        Search: Stack2,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
              let {routeName} = navigation.state;
              switch (routeName) {
                case 'WatchList':
                  return (
                    <Icon
                      reverse
                      name={'local-movies'}
                      size={30}
                      color={tintColor}
                      type={'material'}
                    />
                  );
                  break;
                case 'Search':
                  return (
                    <Icon
                      reverse
                      name={'search'}
                      size={30}
                      color={tintColor}
                      type={'material'}
                    />
                  );
                  break;
      
                default:
                  break;
              }
            },
          }),
          tabBarOptions: {
            activeTintColor: '#F0F0F0',
            inactiveTintColor: '#999',
            style: {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#010101',
            },
          },
    }
);

export default createAppContainer(tabNavi)