// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      default: string;
    };
    breakpoints: {
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}
