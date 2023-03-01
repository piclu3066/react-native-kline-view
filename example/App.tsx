import React, {useEffect, useRef} from 'react';
import {findNodeHandle, SafeAreaView, UIManager, View} from 'react-native';
// import RNKLineView from 'react-native-kline-view';

function App(): JSX.Element {
  const kLineViewRef = useRef(null);

  useEffect(() => {
    if (kLineViewRef.current) {
      UIManager.dispatchViewManagerCommand(
        findNodeHandle(kLineViewRef.current),
        'reloadOptionList',
        [JSON.stringify(optionList)],
      );
    }
  }, [optionList]);

  return (
    <SafeAreaView>
      <View ref={kLineViewRef} />
    </SafeAreaView>
  );
}

export default App;
