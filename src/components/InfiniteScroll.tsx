import {
  Children,
  cloneElement,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';

interface Props {
  triggered?: () => void;
  createChild: (num: number) => ReactNode;
  children: ReactElement;
}
export const InfiniteScroll: React.FC<Props> = ({
  triggered,
  createChild,
  children,
}) => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  function addTenNums() {
    setNums(
      nums.concat(
        nums.length + 1,
        nums.length + 2,
        nums.length + 3,
        nums.length + 4,
        nums.length + 5,
        nums.length + 6,
        nums.length + 7,
        nums.length + 8,
        nums.length + 9,
        nums.length + 10
      )
    );
  }
  document.addEventListener('scroll', () => {
    console.log(window.innerHeight + window.scrollY);
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.scrollHeight
    ) {
      addTenNums();
    }
  });

  return (
    <div>
      <button
        className='text-white rounded-sm border p-1 m-1 hover:bg-slate-400 hover:text-slate-900 transition-colors duration-300'
        onClick={addTenNums}
      >
        agregar mas numero
      </button>
      <div id='contenedor'>
        {nums.map((num) => cloneElement(children, { num: num }))}
      </div>
    </div>
  );
};
