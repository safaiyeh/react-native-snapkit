import { NativeModules } from 'react-native';

type SnapkitType = {
  getDeviceName(): Promise<string>;
};

const { Snapkit } = NativeModules;

export default Snapkit as SnapkitType;
