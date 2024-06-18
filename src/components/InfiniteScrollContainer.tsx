import { cloneElement } from 'react';
import { InfiniteScroll } from './InfiniteScroll';
import { PruebaTsx } from './PruebaTsx';
interface Props {
  elemento?: React.ReactElement;
}
export const prerender = false;

export const InfiniteScrollContainer: React.FC<Props> = ({ elemento }) => {
  const numero = 9;
  return (
    <>
      {/* {cloneElement(elemento, { num: 9 })} */}

      <InfiniteScroll
        triggered={() => console.log('triggered')}
        createChild={(num) => <PruebaTsx key={num} num={num}></PruebaTsx>}
      >
        <PruebaTsx />
      </InfiniteScroll>
    </>
  );
};
