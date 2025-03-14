import { useRef } from 'react';
const RefComponent = () => {
  //   return (
  //     <div>
  //       <input type="text" ref={inputRef} />
  //     </div>
  //   );

  const inputRef = useRef<HTMLInputElement>(null);
  function doSomething() {
    console.log('All the properties and methods of the input', inputRef.current);
  }
  return <input ref={inputRef} type="text" />;
};

export default RefComponent;
