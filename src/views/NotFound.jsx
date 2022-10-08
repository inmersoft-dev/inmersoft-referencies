// sito components
import SitoContainer from "sito-container";

const NotFound = () => (
  <SitoContainer
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    sx={{ width: "100vw", height: "100vh" }}
  >
    <SitoContainer>Page not found</SitoContainer>
    <h1>404</h1>
  </SitoContainer>
);

export default NotFound;
