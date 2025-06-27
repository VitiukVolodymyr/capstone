import { ClockLoader } from 'react-spinners';

type LoaderProps = {
  loading?: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ loading }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ClockLoader color="#36d7b7" loading={loading} size={50} />
  </div>
);
