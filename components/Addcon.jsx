import React from 'react';
import styles1 from '../styles/Addcon.module.css';
import { useNotification } from 'web3uikit';
import { useEffect, useState } from 'react';
import { useWeb3Contract } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { ethers } from 'ethers';
import child from '../contracts/child.json';

const Addcon = (props) => {
  const address1 = props.address;
  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: 'info',
      message: 'Reload to see',
      title: 'Added Content!',
      position: 'topR',
      icon: 'bell',
    });
  };

  const handleSuccess = async (tx) => {
    try {
      await tx.wait(1);
      handleNewNotification(tx);
    } catch (error) {
      console.log(error);
    }
  };

  const [level, setlevel] = useState('');
  const [link, setlink] = useState('');

  const {
    runContractFunction: addcontent,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: child,
    contractAddress: address1,
    functionName: 'addcontent',
    params: {
      _level: level,
      _link: link,
    },
  });

  return (
    <div className='flex justify-center'>
      <div className=' my-6 xl:w-7/12 xs:w-full'>
        <div className='flex justify-center'>
          <div className={styles1.body1}>
            <div className='grid lg:grid-cols-7 xs:grid-cols-3'>
              <div className=' col-span-3'>
                {/* <div className='flex justify-center'> */}
                <div className={styles1.search}>
                  <input
                    className={styles1.input1}
                    type='text'
                    placeholder='Paste content link here...'
                    onChange={(e) => setlink(e.target.value)}
                    style={{ maxWidth: '350px' }}
                  />
                  <button type='submit'></button>
                </div>
                <div className='flex justify-start'>
                  <div className=' text-white'>
                    ( Link should include: &quot;.ipfs.w3s.link/ &quot; )
                  </div>
                </div>
              </div>

              <div className=' col-span-3 pt-7'>
                <div className={styles1.group}>
                  <input
                    className={styles1.input1}
                    type='radio'
                    name='rb'
                    id='rb1'
                    value='1'
                    onChange={(e) => setlevel(e.target.value)}
                  />
                  <label htmlFor='rb1' className={styles1.label1}>
                    Level 1
                  </label>
                  <input
                    className={styles1.input1}
                    type='radio'
                    name='rb'
                    id='rb2'
                    value='2'
                    onChange={(e) => setlevel(e.target.value)}
                  />
                  <label htmlFor='rb2' className={styles1.label1}>
                    Level 2
                  </label>
                  <input
                    className={styles1.input1}
                    type='radio'
                    name='rb'
                    id='rb3'
                    value='3'
                    onChange={(e) => setlevel(e.target.value)}
                  />
                  <label htmlFor='rb3' className={styles1.label1}>
                    Level 3
                  </label>
                </div>
              </div>

              <button
                className={styles1.trybtn}
                disabled={
                  !link.includes('.ipfs.w3s.link') || isLoading || isFetching
                }
                onClick={async () =>
                  await addcontent({
                    onSuccess: handleSuccess,
                    onError: (error) => console.log(error),
                  })
                }
              >
                {' '}
                {isLoading || isFetching ? (
                  <div className='animate-spin spinner-border h-8 w-8 border-b-2 rounded-full '></div>
                ) : (
                  'Add Content'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcon;
