import { globalTheme } from "../../theme";
export const screamSkeletonStyle = {
  ...globalTheme,
  card: {
    display: "flex" as const,
    marginBottom: 20,
  },
  cardContent: {
    width: "100%" as const,
    flexDirection: "column" as const,
    padding: 25,
  },
  cover: {
    minWidth: 200,
    objectFir: "cover" as const,
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: globalTheme.palette.primary.main,
    marginBottom: 7,
  },
  date: {
    width: 100,
    height: 14,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginBottom: 10, 
  },
  fullLine: {
    width: '90%' as const,
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
