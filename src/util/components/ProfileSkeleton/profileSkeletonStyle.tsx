import { globalTheme } from "../../theme";
export const profileSkeletonStyle = {
  ...globalTheme,
  handle: {
    width: 60,
    height: 18,
    backgroundColor: globalTheme.palette.primary.main,
    margin: '0 auto 7px auto',
  },
  fullLine: {
    width: '100%' as const,
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10,
  },
  halfLine: {
    width: '50%' as const,
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    marginBottom: 10,
  }
};
