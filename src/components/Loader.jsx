import { Grid } from 'react-loader-spinner';

export const Loader = () => (
  <Grid
    height="80"
    width="80"
    color="#3f51b5"
    ariaLabel="loading"
    radius="12.5"
    wrapperStyle={{
      margin: '0 auto',
    }}
  />
);
