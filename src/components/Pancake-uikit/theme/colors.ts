import { Colors } from "./types";

export const baseColors = {
  failure: "#F15479",
  primary: "#E75243",
  primaryBright: "#49A2F2",
  primaryDark: "#122B41",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  bright: "#F5F5F5",
  redeem:"#3B98BC",
  secondaryDark:"#182636",
  PrimaryLight:"#49A2F2",
  bgSecondary:"#003555",
  whiteColor: "#FCFCF9",
  btnColor: "#FF592C"
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  bronze: "#E7974D",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#e8e9fa",
  cardBorder: "#F5F5F5",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#e2e2e2",
  inputSecondary: "#E4E7EB",
  tertiary: "rgba(73, 162, 242, 0.1)",
  text: "#202224",
  textDisabled: "#BDC2C4",
  textSubtle: "#000000",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "white",
    inverseBubblegum: "white",
    cardHeader: "linear-gradient(111.68deg, #101133 0%, #101133 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    backgroundContainer: "linear-gradient(180deg, #F8F8FF 0%, #F8F8FF 100%)",
    backgroundUpgrade:"linear-gradient(106.94deg, rgba(255, 255, 255, 0.17) 24.69%, rgba(255, 255, 255, 0.1) 82.76%)",
    backgroundUserInfor:"linear-gradient(151.53deg, #D9DAFF 8.5%, #CCDDFF 97.77%)",
    backgroundNftInfo: "#EFF0FF",
    bgSecondary:"linear-gradient(110.58deg, #E1F1FF 26.33%, #FFF7F9 84.31%)",
  },
  backgroundTab: '#F5F5F5',
  textTab: '#8A94A6',
  borderTab: '#E4E7EB',
  textDark: '#101133',
  borderLine: '#E2E2E2',
  membershipwrapperheaderbackground:"#101133",
  dipoMainBackground: '#FFFFFF',
  dipoContainerBackground: '#EFF0FF',
  homePrice: '#010571',
  upgradelevelContainer:"#fff",
  borderUpgradeTableHeader:"#e2e2e2",
  backgroundlight:"#FFFFFF;",
  backgrounddark:"#F5F5F5;",
  backgroundContainerMembership:"#E8E9FA",
  divider: "#e2e2e2",
  backgroundDark:"#fff",
  thirdDark:"#F8F8FF",
  textDarkSecondary:"#40415C",
  bgCardProject:"#F8F8FF",
  textSecondary:"#868787",
  textThird:"#011226",
  containerInput:"#E8E9FA",
  backgroundListview:"#F8F8FF",
  backgroundAcionList:"#E8E9FA",
  modalHeader:"#F5F5F5",
  modalHeaderWhite:"#FCFCFD",
  backgroundModal:"#FFFFFF",
  bgRowLight:"#FFFFFF",
  bgPasteButton:"#FF592C;",
  bgButtonModalPc: "#FF592C",
  whiteColor: "#FCFCF9",
  btnColor: "#FF592C"
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#011226",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#101133",
  cardBorder: "#182636",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#182636",
  inputSecondary: "#262130",
  tertiary: "rgba(73, 162, 242, 0.1)",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#fff",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    backgroundContainer: "linear-gradient(128.36deg, rgba(255, 255, 255, 0.091) 12.77%, rgba(255, 255, 255, 0.013) 86.37%)",
    backgroundUpgrade:"#393B57;",
    backgroundUserInfor:"linear-gradient(162.57deg, rgba(44, 46, 116, 0.5) 22.42%, rgba(75, 22, 107, 0.5) 82.74%)",
    backgroundNftInfo: "linear-gradient(190.03deg, rgba(44, 46, 116, 0.5) 17.62%, rgba(75, 22, 107, 0.5) 83.22%)",
    bgSecondary:"linear-gradient(107.24deg, #0D2138 16.82%, #250126 93.99%)",
  },
  backgroundTab: '#182636',
  textTab: '#8A94A6',
  borderTab: '#E4E7EB',
  textDark: '#101133',
  borderLine: '#FFF',
  dipoMainBackground: 'linear-gradient(128.36deg, rgba(255, 255, 255, 0.091) 12.77%, rgba(255, 255, 255, 0.013) 86.37%);',
  dipoContainerBackground: 'linear-gradient(109.64deg, rgba(255, 255, 255, 0.105) 13.69%, rgba(255, 255, 255, 0.015) 89.45%)',
  homePrice: '#fdb533',
  membershipwrapperheaderbackground:"#101133",
  upgradelevelContainer:"rgba(255, 255, 255, 0.06)",
  borderUpgradeTableHeader:"rgba(255, 255, 255, 0.3);",
  backgrounddark:"#182636",
  backgroundlight :"#ffff",
  backgroundContainerMembership:"#101133",
  divider:"rgb(82 82 82 / 50%)",
  backgroundDark:"#282947",
  thirdDark:"#1C1D3D",
  textDarkSecondary:"#B7B8C2",
  bgCardProject:"#101133",
  textSecondary:"#DAEBF9",
  textThird:"#FFFFFF",
  containerInput:"#101133",
  backgroundListview:"linear-gradient(180deg, rgba(81, 82, 102, 0.5) 24.4%, rgba(71, 71, 96, 0.5) 50%)",
  backgroundAcionList:"rgba(61, 62, 89, 0.02)",
  modalHeader:"#182636",
  modalHeaderWhite:"#FCFCFD",
  backgroundModal:" #011226",
  bgRowLight:"#011226",
  bgPasteButton:"#273B52",
  bgButtonModalPc: "#22252D",
  whiteColor: "#FCFCF9",
  btnColor: "#FF592C"
};
