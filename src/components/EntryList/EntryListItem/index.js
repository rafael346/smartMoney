import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Colors from '../../../styles/Colors';

//y = distancia do teto 0 = topo/ 50 =base
// height = distancia da base - 0 = base / 50 = topo

const EntryListItem = ({entry, isFirstItem, isLastItem}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = Colors.white;

  return (
    <View>
      <Svg height="50" width="30">
        {showBulletLine && (
          <Rect
            x="9"
            y={bulletLineY}
            width="1.5"
            height="50"
            fill={Colors.background}
          />
        )}

        <Circle cx="10" cy="25" r={8} stroke={Colors.background} strokeWidth="1.5" fill={bulletColor} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  entry: {},
});

export default EntryListItem;
